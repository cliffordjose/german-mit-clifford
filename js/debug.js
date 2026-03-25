const fs = require('fs');
global.window = {};
global.document = { getElementById: () => ({ innerHTML: '' }), querySelector: () => ({ innerHTML: '' }) };
global.quizData = JSON.parse(fs.readFileSync('js/data/quiz_data.js', 'utf8').replace('// Auto-generated 2000 Quiz Questions\nconst quizData = ', '').replace(';\n', ''));
global.AppState = { incrementVal: () => {} };
eval(fs.readFileSync('js/components/quiz.js', 'utf8'));
const view = new QuizView();
view.render();
try {
    view.startQuiz('A1');
    console.log("Success! Rendered size: " + view.render().length);
} catch (e) {
    console.error("FAIL:", e);
}
