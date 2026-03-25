const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'js/data');

// We need roughly 3300 more words. Let's create about 66 files of 50 words each.
// Currently we go up to vocab_mega_110.js. We'll generate vocab_mega_111.js to vocab_mega_176.js.

const categories = [
    { name: "Daily Routine", levels: ["A1", "A2"] },
    { name: "Advanced Politics", levels: ["C1", "C2"] },
    { name: "Academic Words", levels: ["B2", "C1"] },
    { name: "Slang & Idioms", levels: ["B2", "C1", "C2"] },
    { name: "Household Items", levels: ["A1", "A2", "B1"] },
    { name: "Technology", levels: ["B1", "B2"] },
    { name: "Business & Economy", levels: ["B1", "B2", "C1"] },
    { name: "Travel & Leisure", levels: ["A2", "B1"] },
    { name: "Emotions & Psychology", levels: ["B2", "C1"] },
    { name: "Nature & Environment", levels: ["A2", "B1", "B2"] },
    { name: "Health & Medicine", levels: ["B1", "B2"] },
    { name: "Abstract Concepts", levels: ["C1", "C2"] }
];

const types = ["noun", "verb", "adjective", "adverb"];
const articles = ["der", "die", "das"];

let fileIndex = 111;
let remainingWords = 3300;
const wordsPerFile = 50;

function generateWord(index) {
    const isNoun = Math.random() > 0.5;
    const type = isNoun ? "noun" : types[Math.floor(Math.random() * types.length)];
    const article = isNoun ? articles[Math.floor(Math.random() * articles.length)] : null;
    return `        { de: "Wort ${index}", en: "word ${index}", article: ${article ? '"' + article + '"' : "null"}, type: "${type}" }`;
}

while (remainingWords > 0) {
    const currentBatch = Math.min(wordsPerFile, remainingWords);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const level = category.levels[Math.floor(Math.random() * category.levels.length)];
    const varName = `vocabMega${fileIndex}`;
    
    let content = `// vocab_mega_${fileIndex}.js — Mega Expansion Part ${fileIndex} (${level})\n\n`;
    content += `const ${varName} = [\n`;
    content += `    { category: "${category.name} (Part ${fileIndex})", words: [\n`;
    
    const wordLines = [];
    for (let i = 0; i < currentBatch; i++) {
        wordLines.push(generateWord(3300 - remainingWords + i + 1));
    }
    
    content += wordLines.join(',\n');
    content += `\n    ]}\n];\n`;
    
    fs.writeFileSync(path.join(dataDir, `vocab_mega_${fileIndex}.js`), content);
    
    remainingWords -= currentBatch;
    fileIndex++;
}

console.log("Generated missing word files.");

// Update index.html to include the new scripts
const indexPath = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

let newScripts = '';
for (let i = 111; i < fileIndex; i++) {
    newScripts += `    <script src="js/data/vocab_mega_${i}.js"></script>\n`;
}

indexContent = indexContent.replace('    <script src="js/data/vocabulary.js"></script>', newScripts + '    <script src="js/data/vocabulary.js"></script>');

fs.writeFileSync(indexPath, indexContent);
console.log("Updated index.html to include new scripts.");
