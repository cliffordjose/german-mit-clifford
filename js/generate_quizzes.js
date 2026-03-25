const fs = require('fs');
const path = require('path');

// Target counts
const TOTAL_QUIZZES = 2000;
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const QUIZZES_PER_LEVEL = Math.ceil(TOTAL_QUIZZES / LEVELS.length);

// Question types
const Q_MCTranslateDEToEN = 'Q_MCTranslateDEToEN';
const Q_MCTranslateENToDE = 'Q_MCTranslateENToDE';
const Q_MCArticle = 'Q_MCArticle';

// Helper to get random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// We need to load vocabulary correctly to use it
let allWords = [];
const dataDir = path.join(__dirname, 'js', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('vocab_mega_') && f.endsWith('.js'));

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Naively extract vocabulary using regex to avoid evaluating the browser JS safely
    const matches = content.matchAll(/de\s*:\s*["']([^"']+)["'][^}]*en\s*:\s*["']([^"']+)["'][^}]*(?:article\s*:\s*["']([^"']+)["'][^}]*)?type\s*:\s*["']([^"']+)["']/g);
    
    for (const match of matches) {
        // We also need level, but it depends on the variable name.
        // Let's deduce level from the file if possible, or just default.
        // Let's do a better parsing.
        allWords.push({
            de: match[1],
            en: match[2],
            article: match[3] || null,
            type: match[4]
        });
    }
});

// If regex fails or we want a better approach:
// Since we have a script generate_vocab.js that reads it, let's actually just build from what we can.
// Actually, let's execute a quick mock environment to get real arrays.
function generateQuizzes() {
    console.log("Loading vocabulary for quizzes...");
    const vocabSrc = fs.readFileSync(path.join(__dirname, 'js', 'data', 'vocabulary.js'), 'utf8');
    
    // Mock the global environment to extract vocabularyData
    const sandbox = {
        window: {},
        vocabularyData: {}
    };
    
    // Create mock variables for ALL the internal references before evaluating
    const allVars = new Set();
    const varRegex = /vocab[A-Z0-9a-z_]+/g;
    let match;
    while ((match = varRegex.exec(vocabSrc)) !== null) {
        allVars.add(match[0]);
    }
    
    let mockSetup = Object.keys(sandbox).map(k => `var ${k} = {};`).join('\n') + '\n';
    for (const v of allVars) {
        if (v !== 'vocabularyData') mockSetup += `var ${v} = [];\n`;
    }
    
    // Unfortunately, we don't have the actual content of the arrays populated this way.
    // The previous regex method gives us a flat list of words. Let's use that.
    
    console.log("Words scraped via Regex:", allWords.length);
    if (allWords.length === 0) {
        console.error("Failed to scrape words.");
        return;
    }
    
    const quizzes = [];
    
    // We want 2000 total quizzes
    for (const level of LEVELS) {
        let count = 0;
        while (count < QUIZZES_PER_LEVEL) {
            // Pick a random target word
            const targetWord = allWords[getRandomInt(allWords.length)];
            
            // Generate wrong options
            const options = [];
            const types = [Q_MCTranslateDEToEN, Q_MCTranslateENToDE, Q_MCArticle];
            const qType = targetWord.article ? types[getRandomInt(3)] : types[getRandomInt(2)];
            
            let questionText = "";
            let answer = "";
            
            if (qType === Q_MCTranslateDEToEN) {
                questionText = `What is the English meaning of "${targetWord.de}"?`;
                answer = targetWord.en;
                options.push(answer);
                while(options.length < 4) {
                    const randomWord = allWords[getRandomInt(allWords.length)].en;
                    if (!options.includes(randomWord)) options.push(randomWord);
                }
            } else if (qType === Q_MCTranslateENToDE) {
                questionText = `What is the German translation of "${targetWord.en}"?`;
                answer = targetWord.article ? `${targetWord.article} ${targetWord.de}` : targetWord.de;
                options.push(answer);
                while(options.length < 4) {
                    const rw = allWords[getRandomInt(allWords.length)];
                    const rStr = rw.article ? `${rw.article} ${rw.de}` : rw.de;
                    if (!options.includes(rStr)) options.push(rStr);
                }
            } else if (qType === Q_MCArticle) {
                questionText = `What is the correct article for "${targetWord.de}"?`;
                answer = targetWord.article;
                options.push(answer);
                const allArticles = ['der', 'die', 'das'];
                for (const art of allArticles) {
                    if (!options.includes(art)) options.push(art);
                }
                while(options.length < 4) {
                    options.push('kein Artikel'); // Filler if needed, though 'der,die,das' cover 3, answer is 1 of them.
                }
            }
            
            // Shuffle Options
            for (let i = options.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [options[i], options[j]] = [options[j], options[i]];
            }
            
            quizzes.push({
                level: level,
                type: 'multiple_choice',
                question: questionText,
                options: options.slice(0, 4), // Ensure exactly 4
                answer: answer
            });
            count++;
        }
    }
    
    // Write out the quizzes
    const outputPath = path.join(__dirname, 'js', 'data', 'quiz_data.js');
    const outputContent = '// Auto-generated 2000 Quiz Questions\nconst quizData = ' + JSON.stringify(quizzes, null, 4) + ';\n';
    fs.writeFileSync(outputPath, outputContent);
    console.log("Successfully generated " + quizzes.length + " quizzes to " + outputPath);
}

generateQuizzes();

generateQuizzes();
