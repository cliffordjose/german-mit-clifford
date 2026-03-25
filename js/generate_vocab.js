const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'js/data');
const vocabFileRegex = /^vocab(_.*)?\.js$/;

let allVariables = [];

const files = fs.readdirSync(dataDir);

for (const file of files) {
    if (file === 'vocabulary.js') continue;
    if (vocabFileRegex.test(file)) {
        const filePath = path.join(dataDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // Match const variableName = [
        const regex = /const\s+([a-zA-Z0-9_]+)\s*=\s*\[/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            allVariables.push(match[1]);
        }
    }
}

console.log("Found variables:", allVariables.length);

// Generate vocabulary.js content
const generatedContent = `// vocabulary.js — Master merger for all vocabulary levels and expansions
// GENERATED FILE - DO NOT EDIT MANUALLY

// Helper to safely merge arrays even if a variable is accidentally undefined
function mergeVocabLevels(...arrays) {
    return arrays.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(curr);
        }
        return acc;
    }, []);
}

const vocabularyData = {
    A1: mergeVocabLevels(
        ${allVariables.filter(v => v.includes('A1')).map(v => `typeof ${v} !== 'undefined' ? ${v} : []`).join(',\n        ')}
    ),
    A2: mergeVocabLevels(
        ${allVariables.filter(v => v.includes('A2')).map(v => `typeof ${v} !== 'undefined' ? ${v} : []`).join(',\n        ')}
    ),
    B1: mergeVocabLevels(
        ${allVariables.filter(v => v.includes('B1')).map(v => `typeof ${v} !== 'undefined' ? ${v} : []`).join(',\n        ')}
    ),
    B2: mergeVocabLevels(
        ${allVariables.filter(v => v.includes('B2')).map(v => `typeof ${v} !== 'undefined' ? ${v} : []`).join(',\n        ')}
    ),
    C1: mergeVocabLevels(
        ${allVariables.filter(v => v.includes('C1')).map(v => `typeof ${v} !== 'undefined' ? ${v} : []`).join(',\n        ')}
    ),
    C2: mergeVocabLevels(
        ${allVariables.filter(v => v.includes('C2')).map(v => `typeof ${v} !== 'undefined' ? ${v} : []`).join(',\n        ')}
    ),
    // Variables that do not explicitly contain a level in their name (assigning to generic for now, or determining based on name)
    Mixed: mergeVocabLevels(
        ${allVariables.filter(v => !['A1','A2','B1','B2','C1','C2'].some(lvl => v.includes(lvl))).map(v => `typeof ${v} !== 'undefined' ? ${v} : []`).join(',\n        ')}
    )
};

// Flat list of ALL words for Word List view
function getAllWords() {
    const all = [];
    for (const [level, categories] of Object.entries(vocabularyData)) {
        for (const cat of categories) {
            for (const word of cat.words) {
                // If it's the "Mixed" bucket, try to use the word's own level if it has one, otherwise keep it as empty or infer
                all.push({ ...word, level: level === 'Mixed' ? 'Mixed' : level, category: cat.category });
            }
        }
    }
    return all;
}
`;

fs.writeFileSync(path.join(dataDir, 'vocabulary.js'), generatedContent);
console.log("Successfully generated vocabulary.js");
