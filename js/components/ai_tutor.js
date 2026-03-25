// ai_tutor.js — Heavy LLM AI German Tutor
// Powered by Google Gemini 2.0 Flash

class AITutorView {
    constructor() {
        this.messages = [];
        this.isLoading = false;
        this.conversationHistory = [];
        this.currentLevel = 'B1';
        this.currentMode = 'conversation';
        this.streamController = null;

        this.systemPrompt = `You are "Clifford", an elite German language tutor with deep expertise across all CEFR levels (A1 to C2). You combine the warmth of a personal coach with the precision of a linguist.

Your personality: encouraging, witty, and patient. You celebrate progress, gently correct mistakes, and explain the *why* behind grammar rules — not just the rules themselves.

Your capabilities:
- Full grammar explanations with examples (A1-C2)
- Vocabulary building with context and mnemonics
- Sentence correction with detailed feedback
- Conversational practice in German (responding to the user in German when they write in German)
- Cultural insights about German-speaking countries
- Exam prep (Goethe, TestDaF, TELC)
- Custom exercises and drills on any topic
- Pronunciation tips (phonetic hints in text)

Formatting rules:
- Use **bold** for German words/phrases
- Use *italics* for translations
- Use → for corrections: **wrong** → **correct**
- Add 💡 for grammar tips, 🇩🇪 for cultural notes, ✅ for corrections
- Keep responses focused and punchy — not walls of text
- STRICT LANGUAGE RULE: If the user speaks/types in English, you MUST reply entirely in English. If the user speaks/types in German, you MUST reply entirely in German. Do not mix them unless explicitly translating.
- Always end with a follow-up question or mini exercise to keep engagement

Current user level: {{LEVEL}}
Current mode: {{MODE}}`;
    }

    getSystemPrompt() {
        return this.systemPrompt
            .replace('{{LEVEL}}', this.currentLevel)
            .replace('{{MODE}}', this.modes[this.currentMode]?.label || this.currentMode);
    }

    get modes() {
        return {
            conversation: { label: 'Free Conversation', icon: 'bx-chat', desc: 'Chat naturally in German or English' },
            grammar: { label: 'Grammar Deep-Dive', icon: 'bx-book-open', desc: 'Explain any grammar rule in detail' },
            correction: { label: 'Sentence Correction', icon: 'bx-edit', desc: 'Paste German text for detailed feedback' },
            vocab: { label: 'Vocabulary Coach', icon: 'bx-layer', desc: 'Learn words with context & mnemonics' },
            exercise: { label: 'Custom Exercises', icon: 'bx-joystick', desc: 'Generate drills on any topic' },
        };
    }

    get starterPrompts() {
        return {
            conversation: [
                'Lass uns über Hobbys sprechen! 🎸',
                'Erkläre mir den Unterschied zwischen "doch" und "ja"',
                'How do I say "I\'ve been waiting for hours"?',
                'Was ist typisch deutsch? 🇩🇪',
            ],
            grammar: [
                'Explain Konjunktiv II with examples',
                'When do I use Perfekt vs. Präteritum?',
                'Teach me all about Adjektivdeklination',
                'How does Passiv voice work?',
            ],
            correction: [
                'Ich habe gestern ins Kino gegangen',
                'Er ist sehr groß als sein Bruder',
                'Wir müssen das Problem lösen können',
                'Ich freue mich auf dich sehen',
            ],
            vocab: [
                'Teach me 5 ways to say "very" in German',
                'What are common Redemittel for presentations?',
                'False friends: German vs English words',
                'Modal particles: doch, mal, halt, eben',
            ],
            exercise: [
                'Give me 5 fill-in-the-blank Dativ exercises',
                'Create a dialogue practice for ordering food',
                'Test my Trennbare Verben knowledge',
                'Make a mini Konjunktiv II quiz',
            ],
        };
    }

    render() {
        return `
        <style>
            .ai-tutor-wrapper { 
                display: flex; 
                flex-direction: column; 
                gap: 0; 
                animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1); 
                max-width: 1400px; 
                margin: 0 auto; 
                height: calc(100vh - 160px); 
                padding-top: 5px;
                background: transparent;
                overflow: hidden;
            }
            .tutor-header { 
                border-radius: var(--border-radius); 
                background: rgba(15, 15, 20, 0.4); 
                backdrop-filter: blur(24px) saturate(180%); 
                -webkit-backdrop-filter: blur(24px) saturate(180%); 
                border: var(--border-glass); 
                box-shadow: var(--shadow-card); 
                padding: 24px 32px;
            }
            .tutor-avatar-pulse { position: relative; width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; }
            .tutor-avatar-pulse::before { content: ''; position: absolute; inset: -4px; border-radius: 50%; background: var(--gradient-brand); opacity: 0.3; filter: blur(8px); animation: pulse-avatar 2.5s infinite ease-in-out; }
            .tutor-avatar-inner { width: 56px; height: 56px; background: var(--gradient-brand); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; color: #fff; z-index: 2; position: relative; box-shadow: 0 8px 20px rgba(0,0,0,0.3); }
            @keyframes pulse-avatar { 0% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.4); opacity: 0; } 100% { transform: scale(1); opacity: 0; } }
            
            .tutor-live-badge { font-size: 11px; font-weight: 800; color: #fff; background: var(--accent-red); padding: 4px 10px; border-radius: 100px; letter-spacing: 1.5px; animation: blink 2.5s infinite; box-shadow: 0 0 15px rgba(255, 107, 18, 0.4); }
            @keyframes blink { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(0.95); } }
            
            .tutor-select { background: rgba(255,255,255,0.08); color: white; border: 1px solid rgba(255,255,255,0.15); padding: 8px 16px; border-radius: 12px; font-family: inherit; font-size: 14px; cursor: pointer; outline: none; transition: all 0.3s; }
            .tutor-select:focus { border-color: var(--accent-gold); box-shadow: 0 0 0 3px rgba(255, 211, 42, 0.2); }
            
            .tutor-clear-btn { background: rgba(255, 71, 87, 0.15); color: var(--accent-red); border: 1px solid rgba(255,71,87,0.2); width: 44px; height: 44px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 20px; cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
            .tutor-clear-btn:hover { background: var(--accent-red); color: #fff; transform: rotate(15deg) scale(1.1); box-shadow: 0 8px 20px rgba(255, 71, 87, 0.3); }

            .tutor-mode-bar { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 16px; }
            .tutor-mode-btn { background: rgba(255,255,255,0.05); border: var(--border-glass); color: var(--text-secondary); padding: 10px 20px; border-radius: 100px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); display: flex; align-items: center; gap: 8px; }
            .tutor-mode-btn:hover { background: rgba(255,255,255,0.1); color: white; transform: translateY(-2px); }
            .tutor-mode-btn.active { background: var(--gradient-gold); border-color: transparent; color: #000; box-shadow: 0 10px 20px rgba(255, 211, 42, 0.3); }

            .tutor-messages-area { flex: 1; min-height: 0; overflow-y: auto; padding: 32px; display: flex; flex-direction: column; gap: 24px; scroll-behavior: smooth; }
            .tutor-messages-area::-webkit-scrollbar { width: 8px; }
            .tutor-messages-area::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 10px; }

            .tutor-welcome { text-align: center; margin: auto; max-width: 500px; padding: 40px 24px; animation: fadeIn 1s ease; }
            .tutor-welcome-icon { font-size: 64px; background: var(--gradient-brand); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 20px; filter: drop-shadow(0 10px 20px rgba(255, 107, 18, 0.3)); }
            .tutor-welcome h3 { font-size: 26px; margin-bottom: 12px; font-weight: 800; color: white; }
            .tutor-welcome p { color: var(--text-secondary); line-height: 1.6; font-size: 16px; }

            .tutor-msg { display: flex; gap: 12px; align-items: flex-end; max-width: 90%; animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
            @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            .tutor-msg-user { align-self: flex-end; justify-content: flex-end; }
            .tutor-msg-ai { align-self: flex-start; }
            .tutor-msg-avatar { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
            .tutor-msg-ai .tutor-msg-avatar { background: var(--gradient-brand); color: #fff; }
            .user-avatar-msg { background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); color: white; border: 1px solid rgba(255,255,255,0.1); }

            .tutor-msg-bubble { padding: 16px 20px; border-radius: 20px; font-size: 15px; line-height: 1.7; position: relative; backdrop-filter: blur(10px); }
            .tutor-msg-ai .tutor-msg-bubble { background: rgba(255,255,255,0.06); color: white; border-bottom-left-radius: 6px; border: var(--border-glass); }
            .tutor-msg-user .tutor-msg-bubble { background: var(--gradient-brand); color: #fff; border-bottom-right-radius: 6px; box-shadow: 0 10px 25px rgba(255, 107, 18, 0.3); }

            .tutor-msg-time { font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 8px; text-align: right; font-weight: 600; }
            .tutor-msg-ai .tutor-msg-time { color: var(--text-muted); }

            .inline-code { background: rgba(255,211,42,0.15); padding: 4px 8px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--accent-gold); border: 1px solid rgba(255,211,42,0.2); }

            .tutor-starters { padding: 0 24px 20px; display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
            .tutor-starter-chip { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: var(--text-secondary); padding: 8px 16px; border-radius: 100px; font-size: 13px; cursor: pointer; transition: all 0.3s ease; white-space: normal; text-align: center; }
            .tutor-starter-chip:hover { border-color: var(--accent-gold); color: white; background: rgba(255, 211, 42, 0.1); transform: translateY(-2px); }

            .tutor-input-area { padding: 16px 24px; border-top: var(--border-glass); background: rgba(10, 10, 15, 0.4); backdrop-filter: blur(20px); flex-shrink: 0; }
            .tutor-input-row { display: flex; gap: 12px; align-items: flex-end; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 8px 8px 8px 20px; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
            .tutor-input-row:focus-within { border-color: var(--accent-gold); background: rgba(255,255,255,0.07); box-shadow: 0 15px 40px rgba(0,0,0,0.4); transform: translateY(-2px); }

            .tutor-textarea { flex: 1; background: transparent; border: none; color: white; font-family: inherit; font-size: 15px; resize: none; padding: 12px 0; outline: none; max-height: 120px; line-height: 1.6; }
            .tutor-textarea::placeholder { color: var(--text-muted); }

            .tutor-send-btn { background: var(--gradient-brand); color: #fff; border: none; width: 46px; height: 46px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 22px; cursor: pointer; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); flex-shrink: 0; box-shadow: 0 8px 20px rgba(255, 107, 18, 0.3); }
            .tutor-send-btn:hover { transform: scale(1.1) rotate(5deg); box-shadow: 0 12px 30px rgba(255, 71, 87, 0.4); }
            .tutor-send-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
            
            .tutor-mic-btn { background: rgba(255,255,255,0.08); color: var(--text-secondary); border: 1px solid rgba(255,255,255,0.1); width: 46px; height: 46px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 22px; cursor: pointer; transition: all 0.3s; flex-shrink: 0; }
            .tutor-mic-btn:hover { background: rgba(255,255,255,0.15); color: white; transform: scale(1.05); }
            .tutor-mic-btn.listening { background: rgba(255, 71, 87, 0.15); color: var(--accent-red); border-color: var(--accent-red); animation: micPulse 1.5s infinite; }
            @keyframes micPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(255,71,87,0.4); } 50% { box-shadow: 0 0 0 10px rgba(255,71,87,0); } }

            .tutor-input-hint { display: flex; justify-content: space-between; padding: 10px 8px 0; font-size: 12px; color: var(--text-muted); font-weight: 500; }
            kbd { background: rgba(255,255,255,0.15); padding: 3px 8px; border-radius: 6px; border-bottom: 2px solid rgba(255,255,255,0.2); font-family: inherit; font-size: 11px; color: white; }

            /* Typing indicator dots */
            .typing-bubble { display: flex; gap: 6px; align-items: center; padding: 16px 24px !important; }
            .typing-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--text-secondary); animation: typingBounce 1.4s infinite ease-in-out; }
            .typing-dot:nth-child(2) { animation-delay: 0.2s; }
            .typing-dot:nth-child(3) { animation-delay: 0.4s; }
            @keyframes typingBounce { 0%, 60%, 100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-8px); opacity: 1; } }

            .tutor-chat-card {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
                border-radius: var(--border-radius);
                overflow: hidden;
            }

            @media (max-width: 768px) {
                .ai-tutor-wrapper { height: calc(100vh - 150px); padding-bottom: 70px; }
                .tutor-header { padding: 16px; border-radius: 0; }
                .tutor-messages-area { padding: 12px; gap: 16px; }
                .tutor-msg { max-width: 95%; gap: 8px; }
                .tutor-msg-avatar { width: 32px; height: 32px; font-size: 16px; }
                .tutor-msg-bubble { padding: 12px 16px; font-size: 14px; border-radius: 16px; }
                .tutor-input-area { position: sticky; bottom: 0; z-index: 1000; padding: 10px 12px; background: rgba(10, 10, 15, 0.98); }
                .tutor-input-row { padding-left: 16px; border-radius: 30px; gap: 6px; }
                .tutor-textarea { font-size: 16px; padding: 10px 0; }
                .tutor-send-btn, .tutor-mic-btn { width: 42px; height: 42px; font-size: 20px; border-radius: 50%; }
                .tutor-welcome h3 { font-size: 22px !important; }
                .tutor-welcome p { font-size: 14px !important; }
                .tutor-starters { padding: 0 10px 10px; gap: 6px; }
                .tutor-starter-chip { padding: 6px 12px; font-size: 12px; }
                .tutor-input-hint { display: none; }
            }
            
            @media (max-width: 600px) {
                .ai-tutor-wrapper { padding-top: 0; height: calc(100vh - 140px); }
                .tutor-chat-card { border-radius: 0 !important; }
            }
        </style>
        <div class="ai-tutor-wrapper fade-in">
            <!-- Chat Card (Now standalone as requested) -->
            <div class="glass-card tutor-chat-card" style="padding:0; overflow:hidden;">
                <div style="padding: 12px 24px; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: flex-end; align-items: center; background: rgba(0,0,0,0.15);">
                    <button class="tutor-clear-btn" onclick="window._tutorView && window._tutorView.clearChat()" title="Reset session" style="width: 32px; height: 32px; font-size: 16px; border-radius: 8px;">
                        <i class='bx bx-refresh'></i>
                    </button>
                </div>
                
                <!-- Messages -->
                <div id="tutor-messages" class="tutor-messages-area">
                    ${this.messages.length === 0 ? this.renderWelcome() : this.messages.map(m => this.renderMessage(m)).join('')}
                </div>

                </div>

                <!-- Input Area -->
                <div class="tutor-input-area" style="position: relative; z-index: 100;">
                    <div class="tutor-input-row" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);">
                        <textarea 
                            id="tutor-input" 
                            class="tutor-textarea" 
                            placeholder="${this.getPlaceholder()}"
                            rows="1"
                            onkeydown="window._tutorView && window._tutorView.handleKey(event)"
                            oninput="this.style.height='auto'; this.style.height=Math.min(this.scrollHeight,120)+'px'"
                            style="pointer-events: auto; position: relative; z-index: 2;"
                        ></textarea>
                        <div style="display: flex; gap: 8px; align-items: center; padding-right: 4px;">
                            <button id="tutor-mic-btn" class="tutor-mic-btn" onclick="window._tutorView && window._tutorView.toggleSpeech()" title="Voice Input" style="position: relative; z-index: 3;">
                                <i class='bx bx-microphone'></i>
                            </button>
                            <button id="tutor-send-btn" class="tutor-send-btn" onclick="window._tutorView && window._tutorView.sendMessage()" title="Send Message" style="position: relative; z-index: 3;">
                                <i class='bx bx-send'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    renderWelcome() {
        return `
        <div class="tutor-welcome">
            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 20px;">hallo! ich bin clifford ai tutor</h3>
            <p style="font-size: 18px; color: var(--text-secondary);">your ai german tutor. how can i help you</p>
        </div>
        `;
    }

    renderMessage(msg) {
        const isUser = msg.role === 'user';
        const userAvatar = (typeof AppState !== 'undefined' && AppState.get()?.avatar) || '👤';
        return `
        <div class="tutor-msg ${isUser ? 'tutor-msg-user' : 'tutor-msg-ai'}">
            ${!isUser ? `<div class="tutor-msg-avatar"><i class='bx bx-bot'></i></div>` : ''}
            <div class="tutor-msg-bubble">
                ${this.formatContent(msg.content)}
                <div class="tutor-msg-time">${msg.time || ''}</div>
            </div>
            ${isUser ? `<div class="tutor-msg-avatar user-avatar-msg">${userAvatar}</div>` : ''}
        </div>
        `;
    }

    formatContent(text) {
        // Convert markdown-like to HTML
        return text
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/`(.+?)`/g, '<code class="inline-code">$1</code>')
            .replace(/^### (.+)$/gm, '<h4 style="margin:12px 0 4px; color:var(--accent-gold);">$1</h4>')
            .replace(/^## (.+)$/gm, '<h3 style="margin:12px 0 6px;">$1</h3>')
            .replace(/^---$/gm, '<hr style="border:none; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;">')
            .replace(/\n/g, '<br>');
    }

    getPlaceholder() {
        const placeholders = {
            conversation: 'Schreib auf Deutsch oder English...',
            grammar: 'Ask about any grammar rule, e.g. "Explain Dativ prepositions"',
            correction: 'Paste your German text here for feedback...',
            vocab: 'Ask about any word or phrase...',
            exercise: 'Request an exercise, e.g. "Give me Accusative practice"',
        };
        return placeholders[this.currentMode] || 'Ask your German tutor anything...';
    }

    setLevel(level) {
        this.currentLevel = level;
    }

    setMode(mode) {
        this.currentMode = mode;
        // Re-render
        const area = document.getElementById('content-area');
        if (area) {
            area.innerHTML = this.render();
            this.afterRender();
        }
    }

    clearChat() {
        this.messages = [];
        this.conversationHistory = [];
        const area = document.getElementById('content-area');
        if (area) {
            area.innerHTML = this.render();
            this.afterRender();
        }
    }

    afterRender() {
        window._tutorView = this;
        const input = document.getElementById('tutor-input');
        if (input) input.focus();
    }

    handleKey(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            this.sendMessage();
        }
    }

    sendStarter(text) {
        const input = document.getElementById('tutor-input');
        if (input) input.value = text;
        this.sendMessage();
    }

    async sendMessage(fromVoice = false) {
        const input = document.getElementById('tutor-input');
        if (!input) return;
        const text = input.value.trim();
        if (!text || this.isLoading) return;

        this.voiceMode = fromVoice;

        input.value = '';
        input.style.height = 'auto';

        // Always push to conversation history (this is what Groq sees)
        const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        this.conversationHistory.push({ role: 'user', content: text });

        if (this.voiceMode) {
            this.messages.push({ role: 'user', content: `🎤 ${text}`, time: now });
        } else {
            this.messages.push({ role: 'user', content: text, time: now });
        }
        this.rerenderMessages();

        this.showTypingIndicator();
        this.isLoading = true;
        this.updateSendBtn(true);
        if (window.speechSynthesis) window.speechSynthesis.cancel();

        try {
            // Decode obfuscated key
            const apiKey = window.GROQ_API_KEY_ENC ? atob(window.GROQ_API_KEY_ENC) : null;
            if (!apiKey) throw new Error("API Key missing");

            const apiUrl = 'https://api.groq.com/openai/v1/chat/completions';

            const groqMessages = [
                { role: 'system', content: this.getSystemPrompt() },
                ...this.conversationHistory.map(msg => ({
                    role: msg.role,
                    content: msg.content
                }))
            ];

            const payload = {
                model: 'llama-3.3-70b-versatile',
                messages: groqMessages,
                max_tokens: 1200,
                temperature: 0.7
            };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                console.error("Groq API Error:", errData);
                if (response.status === 429) {
                    throw new Error("RATE_LIMIT");
                }
                throw new Error("API request failed");
            }

            const data = await response.json();
            const reply = data.choices?.[0]?.message?.content || 'Entschuldigung, something went wrong. Please try again.';

            this.removeTypingIndicator();
            const aiTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            this.messages.push({ role: 'assistant', content: reply, time: aiTime });
            this.conversationHistory.push({ role: 'assistant', content: reply });
            this.rerenderMessages();

            // AI speaks back the answer automatically
            this.speakText(reply);

        } catch (err) {
            console.error("Chat error:", err);
            this.removeTypingIndicator();

            // Revert history state so it doesn't break future requests
            if (this.conversationHistory.length > 0 && this.conversationHistory[this.conversationHistory.length - 1].role === 'user') {
                this.conversationHistory.pop();
            }

            let responseContent;
            if (err.message === "RATE_LIMIT") {
                responseContent = "🤖 *(Simulated Response)* Hallo! Dein Groq API-Limit wurde erreicht, aber das Interface funktioniert einwandfrei! Ich bin Clifford und freue mich, dir zu helfen. Bitte warte einen Moment.";
            } else if (err.message === "API Key missing") {
                responseContent = '⚠️ Groq API Key is not set. Please add your API key in index.html to enable the AI Tutor.';
            } else {
                responseContent = '⚠️ Connection error. Please check your internet connection and try again.';
            }

            this.messages.push({
                role: 'assistant',
                content: responseContent,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
            this.conversationHistory.push({ role: 'assistant', content: responseContent });
            this.rerenderMessages();
        }

        this.isLoading = false;
        this.updateSendBtn(false);
        if (input) input.focus();
    }

    showTypingIndicator() {
        const area = document.getElementById('tutor-messages');
        if (!area) return;
        const el = document.createElement('div');
        el.id = 'tutor-typing';
        el.className = 'tutor-msg tutor-msg-ai';
        el.innerHTML = `
            <div class="tutor-msg-avatar"><i class='bx bx-bot'></i></div>
            <div class="tutor-msg-bubble typing-bubble">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </div>
        `;
        area.appendChild(el);
        area.scrollTop = area.scrollHeight;
    }

    removeTypingIndicator() {
        const el = document.getElementById('tutor-typing');
        if (el) el.remove();
    }

    rerenderMessages() {
        const area = document.getElementById('tutor-messages');
        if (!area) return;
        const starters = document.getElementById('tutor-starters');
        if (starters) starters.remove();
        area.innerHTML = this.messages.map(m => this.renderMessage(m)).join('');
        area.scrollTop = area.scrollHeight;
    }

    updateSendBtn(loading) {
        const btn = document.getElementById('tutor-send-btn');
        if (!btn) return;
        btn.disabled = loading;
        btn.innerHTML = loading
            ? `<i class='bx bx-loader-alt bx-spin'></i>`
            : `<i class='bx bx-send'></i>`;
    }

    speakText(text) {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();

        // Remove markdown formatting before speaking so it reads naturally
        const cleanText = text.replace(/[*_`]/g, '').replace(/<[^>]+>/g, '').trim();
        if (!cleanText) return;

        const msg = new SpeechSynthesisUtterance(cleanText);

        // Auto-detect if response is mostly English or German so the voice doesn't sound completely broken
        const englishWords = [' the ', ' to ', ' is ', ' and ', ' you ', ' it ', ' in ', ' that ', ' for ', ' with ', ' are '];
        const germanWords = [' der ', ' die ', ' das ', ' und ', ' ist ', ' in ', ' zu ', ' den ', ' auf ', ' von ', ' mit '];

        let engCount = 0; let gerCount = 0;
        const normalized = ' ' + cleanText.toLowerCase() + ' ';
        englishWords.forEach(w => { if (normalized.includes(w)) engCount++; });
        germanWords.forEach(w => { if (normalized.includes(w)) gerCount++; });

        msg.lang = (engCount > gerCount) ? 'en-US' : 'de-DE'; // Switch accent automatically
        msg.rate = 0.95;
        window.speechSynthesis.speak(msg);
    }

    toggleSpeech() {
        // As soon as the user tries to talk, immediately silence whatever the AI is currently saying!
        if (window.speechSynthesis) window.speechSynthesis.cancel();

        if (this.isListening && this.recognition) {
            this.recognition.stop();
            return;
        }

        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRec) {
            alert("Sorry, your browser doesn't support the Speech Recognition feature. Please try Chrome or Edge.");
            return;
        }

        if (!this.recognition) {
            this.recognition = new SpeechRec();
            this.recognition.lang = 'de-DE'; // Listen exactly for German
            this.recognition.continuous = false;
            this.recognition.interimResults = true;

            this.recognition.onstart = () => {
                this.isListening = true;
                const btn = document.getElementById('tutor-mic-btn');
                if (btn) btn.classList.add('listening');
            };

            this.recognition.onresult = (event) => {
                const input = document.getElementById('tutor-input');
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript;
                    }
                }
                if (finalTranscript && input) {
                    input.value = (input.value + (input.value.endsWith(' ') ? '' : ' ') + finalTranscript).trim();
                    input.style.height = 'auto';
                    input.style.height = Math.min(input.scrollHeight, 120) + 'px';
                    // Auto-send immediately when speech recognition returns a final result
                    this.sendMessage(true); // pass true to indicate voice mode
                }
            };

            this.recognition.onerror = (event) => console.error("Speech Error:", event.error);
            this.recognition.onend = () => {
                this.isListening = false;
                const btn = document.getElementById('tutor-mic-btn');
                if (btn) btn.classList.remove('listening');
            };
        }

        this.recognition.start();
    }
}

// Register with app router
if (typeof AppRouter !== 'undefined') {
    AppRouter.register('/ai-tutor', () => {
        const view = new AITutorView();
        window._tutorView = view;
        return view.render();
    });
}
