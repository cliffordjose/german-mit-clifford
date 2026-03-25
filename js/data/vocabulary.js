// vocabulary.js — Master merger for all vocabulary levels and expansions
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
        typeof vocabA1 !== 'undefined' ? vocabA1 : [],
        typeof vocabA1Extra !== 'undefined' ? vocabA1Extra : [],
        typeof vocabA1Mega !== 'undefined' ? vocabA1Mega : [],
        typeof vocabA1Mega2 !== 'undefined' ? vocabA1Mega2 : []
    ),
    A2: mergeVocabLevels(
        typeof vocabA2 !== 'undefined' ? vocabA2 : [],
        typeof vocabA2Extra !== 'undefined' ? vocabA2Extra : [],
        typeof vocabA2Mega !== 'undefined' ? vocabA2Mega : [],
        typeof vocabA2Mega2 !== 'undefined' ? vocabA2Mega2 : []
    ),
    B1: mergeVocabLevels(
        typeof vocabB1 !== 'undefined' ? vocabB1 : [],
        typeof vocabB1Extra !== 'undefined' ? vocabB1Extra : [],
        typeof vocabB1Mega !== 'undefined' ? vocabB1Mega : [],
        typeof vocabB1Mega2 !== 'undefined' ? vocabB1Mega2 : []
    ),
    B2: mergeVocabLevels(
        typeof vocabB2 !== 'undefined' ? vocabB2 : [],
        typeof vocabB2Extra !== 'undefined' ? vocabB2Extra : [],
        typeof vocabB2Mega !== 'undefined' ? vocabB2Mega : [],
        typeof vocabB2Mega2 !== 'undefined' ? vocabB2Mega2 : []
    ),
    C1: mergeVocabLevels(
        typeof vocabC1 !== 'undefined' ? vocabC1 : [],
        typeof vocabC1Extra !== 'undefined' ? vocabC1Extra : [],
        typeof vocabC1Mega !== 'undefined' ? vocabC1Mega : [],
        typeof vocabSuperb !== 'undefined' ? vocabSuperb : []
    ),
    C2: mergeVocabLevels(
        typeof vocabC2 !== 'undefined' ? vocabC2 : [],
        typeof vocabC2Extra !== 'undefined' ? vocabC2Extra : [],
        typeof vocabC2Mega !== 'undefined' ? vocabC2Mega : []
    ),
    C2: mergeVocabLevels(
        typeof vocabC2 !== 'undefined' ? vocabC2 : [],
        typeof vocabC2Extra !== 'undefined' ? vocabC2Extra : [],
        typeof vocabC2Mega !== 'undefined' ? vocabC2Mega : []
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
