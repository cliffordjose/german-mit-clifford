class QuizView {
    constructor() {
        this.state = {
            activeQuiz: false,
            level: 'A1',
            questions: [],
            currentQuestionIndex: 0,
            score: 0,
            selectedOption: null,
            showResult: false
        };
        
        // Ensure quizData is loaded
        this.quizData = typeof quizData !== 'undefined' ? quizData : [];
        this.levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    }

    reRender() {
        try {
            const contentArea = document.getElementById('content-area') || document.querySelector('.content-area');
            if (contentArea) {
                contentArea.innerHTML = this.render();
            }
        } catch (e) {
            alert("Error in reRender: " + e.message + "\n" + e.stack);
        }
    }

    startQuiz(level) {
        try {
            // removed heart check
            const levelQuizzes = this.quizData.filter(q => q.level === level);
            if (levelQuizzes.length === 0) {
                alert("No quizzes available for this level.");
                return;
            }

            // Pick 10 random questions
            const shuffled = levelQuizzes.sort(() => 0.5 - Math.random());
            this.state.questions = shuffled.slice(0, 10);
            this.state.level = level;
            this.state.activeQuiz = true;
            this.state.currentQuestionIndex = 0;
            this.state.score = 0;
            this.state.selectedOption = null;
            this.state.showResult = false;
            
            this.reRender();
        } catch (e) {
            alert("Error in startQuiz: " + e.message + "\n" + e.stack);
        }
    }

    selectOption(index) {
        if (this.state.showResult) return;
        this.state.selectedOption = index;
        this.reRender();
    }

    playSound(isCorrect) {
        if (typeof AppState !== 'undefined') {
            const state = AppState.get();
            if (state && state.settings && state.settings.soundEnabled === false) return;
        }
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            oscillator.type = 'sine';
            if (isCorrect) {
                oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
            } else {
                oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.15);
            }
            
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.15);
        } catch(e) { /* ignore */ }
    }

    checkAnswer() {
        if (this.state.selectedOption === null) return;
        
        const q = this.state.questions[this.state.currentQuestionIndex];
        const selectedText = q.options[this.state.selectedOption];
        
        if (selectedText === q.answer) {
            this.state.score++;
             // Update mastery (mockly)
            if (typeof AppState !== 'undefined') {
                AppState.incrementVal('wordsMastered', 2);
            }
            this.playSound(true);
        } else {
            this.playSound(false);
            // removed heart deductions
        }
        
        this.state.showResult = true;
        this.reRender();
    }

    nextQuestion() {
        if (this.state.currentQuestionIndex < this.state.questions.length - 1) {
            this.state.currentQuestionIndex++;
            this.state.selectedOption = null;
            this.state.showResult = false;
            this.reRender();
        } else {
            // End of quiz
            if (typeof AppState !== 'undefined') {
                AppState.incrementVal('quizzesTaken', 1);
            }
            this.state.activeQuiz = 'finished';
            this.reRender();
        }
    }

    resetQuiz() {
        this.state.activeQuiz = false;
        this.reRender();
    }

    render() {
        window.QuizController = this; // Expose for inline onclick handlers

        // 'failed' state removed as hearts are unlimited.

        if (this.state.activeQuiz === 'finished') {
            return `
                <div class="page-header fade-in">
                    <h1 class="page-title">Quiz Complete!</h1>
                </div>
                <div class="glass-card fade-in" style="max-width: 600px; margin: 0 auto; text-align: center; padding: 60px 40px;">
                    <div style="font-size: 64px; color: var(--accent-gold); margin-bottom: 24px;">
                        <i class='bx bx-trophy'></i>
                    </div>
                    <h2 style="margin-bottom: 16px;">You scored ${this.state.score} / ${this.state.questions.length}</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 32px;">Great job keeping your streak alive! Mastered words have been updated in your dashboard.</p>
                    <button class="btn-primary" onclick="QuizController.resetQuiz()">Back to Quizzes</button>
                    <a href="#/" class="btn-secondary" style="margin-left: 12px;">Go to Dashboard</a>
                </div>
            `;
        }

        if (this.state.activeQuiz === true) {
            const q = this.state.questions[this.state.currentQuestionIndex];
            
            let optionsHtml = '';
            q.options.forEach((opt, idx) => {
                let btnStyle = "padding: 16px; border-radius: var(--border-radius-sm); border: 2px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.2); color: white; cursor: pointer; text-align: left; font-size: 16px; transition: all 0.2s;";
                
                if (this.state.showResult) {
                    if (opt === q.answer) {
                        btnStyle += " border-color: #2ecc71; background: rgba(46, 204, 113, 0.1);";
                    } else if (idx === this.state.selectedOption && opt !== q.answer) {
                        btnStyle += " border-color: #e74c3c; background: rgba(231, 76, 60, 0.1); text-decoration: line-through; opacity: 0.6;";
                    } else {
                        btnStyle += " opacity: 0.5;";
                    }
                } else {
                    if (idx === this.state.selectedOption) {
                        btnStyle += " border-color: var(--accent-gold); background: rgba(255, 204, 0, 0.1);";
                    }
                }

                // escape single quotes in option just in case
                let safeOpt = opt ? opt.replace(/'/g, "&apos;") : opt;

                optionsHtml += `<button style="${btnStyle}" onclick="QuizController.selectOption(${idx})" ${this.state.showResult ? 'disabled' : ''}>${safeOpt}</button>`;
            });

            return `
                <div class="page-header fade-in">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h1 class="page-title">Level ${this.state.level} Quiz</h1>
                        <span style="font-size: 18px; color: var(--text-secondary); font-weight: bold;">Question ${this.state.currentQuestionIndex + 1} / ${this.state.questions.length}</span>
                    </div>
                    <div class="progress-bar-bg" style="margin-top: 16px;">
                        <div class="progress-bar-fill" style="width: ${((this.state.currentQuestionIndex) / this.state.questions.length) * 100}%;"></div>
                    </div>
                </div>

                <div class="glass-card fade-in ${this.state.showResult && this.state.selectedOption !== null && q.options[this.state.selectedOption] !== q.answer ? 'gamify-error' : ''} ${this.state.showResult && this.state.selectedOption !== null && q.options[this.state.selectedOption] === q.answer ? 'gamify-success' : ''}" style="max-width: 800px; margin: 0 auto; padding: 40px;">
                    <h2 style="font-size: 28px; margin-bottom: 32px; text-align: center;">${q.question}</h2>
                    <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px;">
                        ${optionsHtml}
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: var(--border-glass); padding-top: 24px;">
                        <button class="btn-secondary" onclick="QuizController.resetQuiz()">Quit Quiz</button>
                        ${!this.state.showResult 
                            ? `<button class="btn-primary" onclick="QuizController.checkAnswer()" ${this.state.selectedOption === null ? 'style="opacity:0.5; cursor:not-allowed;"' : ''}>Check Answer</button>`
                            : `<button class="btn-primary" onclick="QuizController.nextQuestion()" style="background: #2ecc71;">${this.state.currentQuestionIndex === this.state.questions.length - 1 ? 'Finish' : 'Next Question'} <i class='bx bx-right-arrow-alt'></i></button>`
                        }
                    </div>
                </div>
            `;
        }

        // Selection View
        let levelCards = '';
        this.levels.forEach(lvl => {
            const count = this.quizData.filter(q => q.level === lvl).length;
            levelCards += `
                <div class="glass-card" style="text-align: center;">
                    <div style="font-size: 48px; color: var(--accent-gold); margin-bottom: 16px;">
                        <i class='bx bx-brain'></i>
                    </div>
                    <h3 style="font-size: 24px; margin-bottom: 24px;">Level ${lvl}</h3>
                    <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="QuizController.startQuiz('${lvl}')">Start Random Quiz</button>
                </div>
            `;
        });

        return `
            <div class="page-header fade-in">
                <h1 class="page-title">Practice Quizzes</h1>
                <p class="page-desc">Test your knowledge with 2000 randomly available questions across all CEFR levels.</p>
            </div>
            
            <div class="grid-cards fade-in" style="animation-delay: 0.1s;">
                ${levelCards}
            </div>
        `;
    }
}
