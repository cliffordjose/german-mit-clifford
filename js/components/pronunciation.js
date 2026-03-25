class PronunciationView {
    constructor() {
        this.practiceItems = [
            { german: "Guten Morgen", english: "Good morning" },
            { german: "Wie geht es Ihnen?", english: "How are you?" },
            { german: "Ich spreche ein bisschen Deutsch", english: "I speak a little German" },
            { german: "Entschuldigung, wo ist der Bahnhof?", english: "Excuse me, where is the train station?" },
            { german: "Das ist eine ausgezeichnete Idee", english: "That is an excellent idea" },
            { german: "Wir lernen jeden Tag neue Wörter", english: "We learn new words every day" },
            { german: "Die deutsche Sprache ist sehr interessant", english: "The German language is very interesting" },
            { german: "Können Sie das bitte wiederholen?", english: "Can you repeat that please?" },
            { german: "Ich hätte gerne eine Tasse Kaffee", english: "I would like a cup of coffee" },
            { german: "Übung macht den Meister", english: "Practice makes perfect" }
        ];
        this.currentIndex = 0;
        this.recognition = null;
        this.isRecording = false;
        
        this.initSpeechRecognition();
    }

    initSpeechRecognition() {
        if ('webkitSpeechRecognition' in window) {
            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'de-DE';
            
            this.recognition.onstart = () => {
                this.isRecording = true;
                this.updateRecordButtonUI(true);
            };

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.handleVoiceInput(transcript);
            };

            this.recognition.onerror = (event) => {
                console.error("Speech recognition error", event.error);
                this.isRecording = false;
                this.updateRecordButtonUI(false);
                alert("Speech recognition failed: " + event.error);
            };

            this.recognition.onend = () => {
                this.isRecording = false;
                this.updateRecordButtonUI(false);
            };
        } else {
            console.warn("Speech recognition not supported in this browser.");
        }
    }

    // A simple Levenshtein distance for string matching
    calculateSimilarity(str1, str2) {
        // Remove punctuation and lowercase
        const clean1 = str1.toLowerCase().replace(/[.,!?]/g, "").trim();
        const clean2 = str2.toLowerCase().replace(/[.,!?]/g, "").trim();
        
        if (clean1 === clean2) return 100;
        
        const track = Array(clean2.length + 1).fill(null).map(() =>
            Array(clean1.length + 1).fill(null)
        );
        for (let i = 0; i <= clean1.length; i += 1) track[0][i] = i;
        for (let j = 0; j <= clean2.length; j += 1) track[j][0] = j;
        for (let j = 1; j <= clean2.length; j += 1) {
            for (let i = 1; i <= clean1.length; i += 1) {
                const indicator = clean1[i - 1] === clean2[j - 1] ? 0 : 1;
                track[j][i] = Math.min(
                    track[j][i - 1] + 1, 
                    track[j - 1][i] + 1, 
                    track[j - 1][i - 1] + indicator 
                );
            }
        }
        const distance = track[clean2.length][clean1.length];
        const maxLength = Math.max(clean1.length, clean2.length);
        const accuracy = ((maxLength - distance) / maxLength) * 100;
        return Math.max(0, Math.round(accuracy));
    }

    async handleVoiceInput(transcript) {
        const item = this.practiceItems[this.currentIndex];
        
        // Show loading state
        const resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = `
            <div class="ai-loading-state">
                <div class="spinner"></div>
                <p>Clifford is analyzing your pronunciation...</p>
            </div>
        `;
        resultContainer.style.display = 'block';

        try {
            const analysis = await window.AICoach.analyze(item.german, transcript);
            
            resultContainer.innerHTML = this.renderAIAnalysis(analysis, transcript);

            const scoreEl = document.getElementById('pronunciation-score-val');
            if (scoreEl) {
                scoreEl.innerText = `${analysis.score}%`;
                this.applyScoreColor(scoreEl, analysis.score);
            }
        } catch (error) {
            resultContainer.innerHTML = `<div class="error-msg">AI Analysis failed. Please try again.</div>`;
        }
    }

    renderAIAnalysis(analysis, transcript) {
        const heatmapHtml = analysis.heatmap.map(hw => `
            <span class="heatmap-word status-${hw.status}">${hw.word}</span>
        `).join(' ');

        const feedbackHtml = analysis.feedback.length > 0 ? `
            <div class="ai-feedback-box">
                <div class="feedback-title"><i class='bx bxs-bulb'></i> AI Phonetic Tips</div>
                <div class="feedback-list">
                    ${analysis.feedback.map(f => `<div class="feedback-item">${f}</div>`).join('')}
                </div>
            </div>
        ` : '';

        const conversationalHtml = analysis.conversational_tip ? `
            <div class="conversational-tip-box">
                <i class='bx bxs-quote-alt-left'></i>
                <span>${analysis.conversational_tip}</span>
            </div>
        ` : '';

        return `
            <div class="analysis-header">
                <div class="accuracy-label">AI Accuracy Score</div>
                <div id="pronunciation-score-val" class="score-display">${analysis.score}%</div>
            </div>
            
            ${conversationalHtml}

            <div class="transcript-box">
                <div class="transcript-label">What Clifford heard:</div>
                <div class="transcript-text">"${transcript}"</div>
            </div>

            <div class="heatmap-container">
                <div class="heatmap-label">Pronunciation Heatmap:</div>
                <div class="heatmap-wrapper">${heatmapHtml}</div>
            </div>

            ${feedbackHtml}

            <div class="ai-pulse-indicator">
                <div class="pulse-ring"></div>
                <span>AI Analysis Complete</span>
            </div>
        `;
    }

    applyScoreColor(el, score) {
        if (score >= 90) el.style.color = '#4caf50';
        else if (score >= 70) el.style.color = 'var(--accent-gold)';
        else el.style.color = 'var(--accent-red)';
        
        if (score >= 90) {
            el.classList.add('jump-anim');
            setTimeout(() => el.classList.remove('jump-anim'), 1000);
        }
    }

    updateRecordButtonUI(recording) {
        const btn = document.getElementById('btn-record');
        if (!btn) return;
        if (recording) {
            btn.innerHTML = `<i class='bx bx-stop-circle'></i> <span class="ai-recording-text">AI is Listening...</span>`;
            btn.classList.add('recording-pulse');
            document.getElementById('ai-waveform').classList.add('active');
        } else {
            btn.innerHTML = `<i class='bx bx-microphone'></i> Tap to Speak`;
            btn.classList.remove('recording-pulse');
            document.getElementById('ai-waveform').classList.remove('active');
        }
    }

    render() {
        return `
            <style>
                .pronunciation-card { margin: 20px auto; max-width: 650px; padding: 40px; text-align: center; border: 1px solid rgba(255,255,255,0.05); }
                .target-phrase { font-size: 32px; font-weight: 800; margin-bottom: 10px; color: var(--text-primary); letter-spacing: -0.5px; }
                .target-meaning { font-size: 18px; color: var(--text-secondary); margin-bottom: 40px; font-style: italic; }
                
                @media (max-width: 600px) {
                    .pronunciation-card { padding: 24px 20px !important; margin: 10px auto !important; }
                    .target-phrase { font-size: 24px !important; }
                    .target-meaning { font-size: 16px !important; margin-bottom: 24px !important; }
                    .action-buttons { flex-direction: column !important; gap: 12px !important; }
                    .btn-audio, .btn-record { width: 100% !important; justify-content: center !important; }
                }
                
                /* AI Waveform Animation */
                .ai-waveform { display: flex; justify-content: center; align-items: center; gap: 4px; height: 40px; margin-bottom: 30px; opacity: 0.3; transition: all 0.5s; }
                .ai-waveform.active { opacity: 1; }
                .wave-bar { width: 4px; height: 10px; background: var(--gradient-brand); border-radius: 10px; animation: wave 1s infinite ease-in-out; }
                .wave-bar:nth-child(2) { animation-delay: 0.1s; }
                .wave-bar:nth-child(3) { animation-delay: 0.2s; }
                .wave-bar:nth-child(4) { animation-delay: 0.3s; }
                .wave-bar:nth-child(5) { animation-delay: 0.4s; }
                @keyframes wave { 0%, 100% { height: 10px; } 50% { height: 35px; } }

                .btn-record { background: var(--gradient-brand); color: black; border: none; padding: 18px 40px; border-radius: 50px; font-size: 18px; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 12px; transition: all 0.3s; box-shadow: 0 10px 30px rgba(255, 107, 18, 0.3); }
                .btn-record:hover { transform: scale(1.05); }
                
                .result-container { background: rgba(0,0,0,0.3); border-radius: 20px; padding: 30px 20px; margin-top: 30px; border: 1px solid rgba(255,255,255,0.1); display: none; text-align: left; }
                .score-display { font-size: 64px; font-weight: 900; color: var(--accent-gold); margin: 10px 0; text-align: center; }
                
                .heatmap-wrapper { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; justify-content: center; }
                .heatmap-word { padding: 5px 12px; border-radius: 8px; font-weight: 600; font-size: 18px; border: 1px solid rgba(255,255,255,0.05); }
                .status-perfect { background: rgba(76, 175, 80, 0.2); color: #81c784; border-color: rgba(76, 175, 80, 0.3); }
                .status-near { background: rgba(255, 152, 0, 0.2); color: #ffb74d; border-color: rgba(255, 152, 0, 0.3); }
                .status-miss { background: rgba(255, 107, 18, 0.15); color: #ff9f43; border-color: rgba(255, 107, 18, 0.2); }
                
                .ai-feedback-box { margin-top: 25px; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border-left: 4px solid var(--accent-gold); }
                .feedback-title { font-weight: 700; color: var(--accent-gold); margin-bottom: 10px; display: flex; align-items: center; gap: 8px; font-size: 15px; text-transform: uppercase; }
                .feedback-item { font-size: 15px; color: var(--text-secondary); margin-bottom: 8px; line-height: 1.5; }
                
                .ai-pulse-indicator { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 25px; font-size: 12px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 2px; }
                .pulse-ring { width: 10px; height: 10px; background: #4caf50; border-radius: 50%; animation: pulse-green 2s infinite; }
                @keyframes pulse-green { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(76, 175, 80, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); } }
                
                .transcript-box { text-align: center; margin-bottom: 25px; }
                .transcript-label { font-size: 12px; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 5px; }
                .transcript-text { font-size: 18px; color: var(--text-primary); font-style: italic; font-weight: 500; }
                
                .ai-loading-state { text-align: center; padding: 20px; color: var(--text-secondary); }
                .spinner { width: 40px; height: 40px; border: 4px solid rgba(255,107,18,0.1); border-top: 4px solid var(--accent-gold); border-radius: 50%; margin: 0 auto 15px; animation: spin 1s linear infinite; }
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                
                .conversational-tip-box { background: rgba(255, 153, 0, 0.05); padding: 15px 20px; border-radius: 12px; margin-bottom: 25px; font-style: italic; color: var(--text-primary); display: flex; gap: 12px; align-items: flex-start; border: 1px solid rgba(255, 153, 0, 0.2); }
                .conversational-tip-box i { color: var(--accent-gold); font-size: 20px; margin-top: 3px; }

                .ai-recording-text { animation: blink 1s infinite; }
                @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
                
                .error-msg { color: var(--accent-red); text-align: center; font-weight: 600; padding: 20px; }
            </style>
            
            <div class="page-header fade-in">
                <h1 class="page-title"><i class='bx bxs-microphone'></i> AI Pronunciation</h1>
                <p class="page-desc">Neural analysis of your German speech patterns.</p>
            </div>

            <div class="fade-in" style="animation-delay: 0.1s; max-width: 800px; margin: 0 auto;">
                <div class="glass-card pronunciation-card">
                    <div id="ai-waveform" class="ai-waveform">
                        <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
                    </div>

                    <div id="target-phrase" class="target-phrase"></div>
                    <div id="target-meaning" class="target-meaning"></div>
                    
                    <div class="action-buttons" style="display: flex; justify-content: center; gap: 20px;">
                        <button id="btn-listen" class="btn-audio" style="padding: 18px 30px; border-radius: 50px; font-family: var(--font-heading); font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
                            <i class='bx bx-volume-full'></i> Native Audio
                        </button>
                        <button id="btn-record" class="btn-record">
                            <i class='bx bx-microphone'></i> Tap to Speak
                        </button>
                    </div>

                    <div id="result-container" class="result-container fade-in">
                        <!-- AI Analysis Injected Here -->
                    </div>

                    <div style="margin-top: 30px; display: flex; justify-content: center; gap: 15px;">
                        <button id="btn-next" class="btn-secondary" style="padding: 12px 25px; border-radius: 50px; font-weight: 600;">
                            Next Lesson <i class='bx bx-right-arrow-alt'></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    updatePhraseUI() {
        const item = this.practiceItems[this.currentIndex];
        const phraseEl = document.getElementById('target-phrase');
        const meaningEl = document.getElementById('target-meaning');
        
        if (phraseEl) phraseEl.innerText = item.german;
        if (meaningEl) meaningEl.innerText = item.english;
        
        document.getElementById('result-container').style.display = 'none';
    }

    afterRender() {
        this.updatePhraseUI();

        document.getElementById('btn-listen').addEventListener('click', (e) => {
            const item = this.practiceItems[this.currentIndex];
            window.playGermanAudio(item.german, e);
        });

        document.getElementById('btn-record').addEventListener('click', () => {
            if (!this.recognition) return;
            
            if (this.isRecording) {
                this.recognition.stop();
            } else {
                try {
                    this.recognition.start();
                } catch(e) {
                    console.error("Recognition already started or error:", e);
                }
            }
        });

        document.getElementById('btn-next').addEventListener('click', () => {
            this.currentIndex = (this.currentIndex + 1) % this.practiceItems.length;
            this.updatePhraseUI();
        });
    }
}
