// ai_tutor.js — High-Level LLM AI German Tutor
// Powered by Claude via Anthropic API

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
- When the user writes in German, respond to their German and also provide feedback
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
        <div class="ai-tutor-wrapper">
            <!-- Header -->
            <div class="tutor-header glass-card" style="margin-bottom:20px; padding: 24px 28px;">
                <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px;">
                    <div style="display:flex; align-items:center; gap:16px;">
                        <div class="tutor-avatar-pulse">
                            <div class="tutor-avatar-inner">
                                <i class='bx bx-bot'></i>
                            </div>
                        </div>
                        <div>
                            <h2 style="font-size:22px; margin:0; display:flex; align-items:center; gap:8px;">
                                AI German Tutor
                                <span class="tutor-live-badge">● LIVE</span>
                            </h2>
                            <p style="color:var(--text-secondary); font-size:13px; margin:2px 0 0;">
                                Powered by Claude · Your personal A1–C2 language coach
                            </p>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span style="font-size:13px; color:var(--text-muted);">Level:</span>
                        <select id="tutor-level-select" class="tutor-select" onchange="window._tutorView && window._tutorView.setLevel(this.value)">
                            ${['A1','A2','B1','B2','C1','C2'].map(l => `<option value="${l}" ${l === this.currentLevel ? 'selected' : ''}>${l}</option>`).join('')}
                        </select>
                        <button class="tutor-clear-btn" onclick="window._tutorView && window._tutorView.clearChat()" title="Clear chat">
                            <i class='bx bx-trash'></i>
                        </button>
                    </div>
                </div>

                <!-- Mode Selector -->
                <div class="tutor-mode-bar" style="margin-top:20px;">
                    ${Object.entries(this.modes).map(([key, m]) => `
                        <button class="tutor-mode-btn ${key === this.currentMode ? 'active' : ''}"
                            onclick="window._tutorView && window._tutorView.setMode('${key}')">
                            <i class='bx ${m.icon}'></i>
                            <span>${m.label}</span>
                        </button>
                    `).join('')}
                </div>
            </div>

            <!-- Chat Area -->
            <div class="glass-card" style="padding:0; overflow:hidden; display:flex; flex-direction:column; height: calc(100vh - 340px); min-height: 400px;">
                
                <!-- Messages -->
                <div id="tutor-messages" class="tutor-messages-area">
                    ${this.messages.length === 0 ? this.renderWelcome() : this.messages.map(m => this.renderMessage(m)).join('')}
                </div>

                <!-- Starter Prompts (only when empty) -->
                ${this.messages.length === 0 ? `
                <div id="tutor-starters" class="tutor-starters">
                    ${(this.starterPrompts[this.currentMode] || []).map(p => `
                        <button class="tutor-starter-chip" onclick="window._tutorView && window._tutorView.sendStarter('${p.replace(/'/g, "\\'")}')">
                            ${p}
                        </button>
                    `).join('')}
                </div>` : ''}

                <!-- Input Area -->
                <div class="tutor-input-area">
                    <div class="tutor-input-row">
                        <textarea 
                            id="tutor-input" 
                            class="tutor-textarea" 
                            placeholder="${this.getPlaceholder()}"
                            rows="1"
                            onkeydown="window._tutorView && window._tutorView.handleKey(event)"
                            oninput="this.style.height='auto'; this.style.height=Math.min(this.scrollHeight,120)+'px'"
                        ></textarea>
                        <button id="tutor-send-btn" class="tutor-send-btn" onclick="window._tutorView && window._tutorView.sendMessage()">
                            <i class='bx bx-send'></i>
                        </button>
                    </div>
                    <div class="tutor-input-hint">
                        <span><kbd>Enter</kbd> to send · <kbd>Shift+Enter</kbd> for new line</span>
                        <span style="color:var(--accent-gold);">✨ Ask anything about German</span>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    renderWelcome() {
        const mode = this.modes[this.currentMode];
        return `
        <div class="tutor-welcome">
            <div class="tutor-welcome-icon">
                <i class='bx bx-bot'></i>
            </div>
            <h3>Hallo! Ich bin Clifford 👋</h3>
            <p>Your AI German tutor, ready for <strong>${mode.label}</strong>.</p>
            <p style="font-size:13px; color:var(--text-muted); margin-top:4px;">${mode.desc} — ask me anything or pick a starter below.</p>
        </div>
        `;
    }

    renderMessage(msg) {
        const isUser = msg.role === 'user';
        return `
        <div class="tutor-msg ${isUser ? 'tutor-msg-user' : 'tutor-msg-ai'}">
            ${!isUser ? `<div class="tutor-msg-avatar"><i class='bx bx-bot'></i></div>` : ''}
            <div class="tutor-msg-bubble">
                ${this.formatContent(msg.content)}
                <div class="tutor-msg-time">${msg.time || ''}</div>
            </div>
            ${isUser ? `<div class="tutor-msg-avatar user-avatar-msg"><i class='bx bx-user'></i></div>` : ''}
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
            this.bindAfterRender();
        }
    }

    clearChat() {
        this.messages = [];
        this.conversationHistory = [];
        const area = document.getElementById('content-area');
        if (area) {
            area.innerHTML = this.render();
            this.bindAfterRender();
        }
    }

    bindAfterRender() {
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

    async sendMessage() {
        const input = document.getElementById('tutor-input');
        if (!input) return;
        const text = input.value.trim();
        if (!text || this.isLoading) return;

        input.value = '';
        input.style.height = 'auto';

        const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        this.messages.push({ role: 'user', content: text, time: now });
        this.conversationHistory.push({ role: 'user', content: text });

        this.rerenderMessages();
        this.showTypingIndicator();
        this.isLoading = true;
        this.updateSendBtn(true);

        try {
            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'claude-sonnet-4-20250514',
                    max_tokens: 1000,
                    system: this.getSystemPrompt(),
                    messages: this.conversationHistory,
                })
            });

            const data = await response.json();
            const reply = data.content?.map(b => b.text || '').join('') || 'Entschuldigung, something went wrong. Please try again.';

            this.removeTypingIndicator();
            const aiTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            this.messages.push({ role: 'assistant', content: reply, time: aiTime });
            this.conversationHistory.push({ role: 'assistant', content: reply });
            this.rerenderMessages();

        } catch (err) {
            this.removeTypingIndicator();
            this.messages.push({ 
                role: 'assistant', 
                content: '⚠️ Connection error. Please check your internet connection and try again.', 
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
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
}

// Register with app router
if (typeof AppRouter !== 'undefined') {
    AppRouter.register('/ai-tutor', () => {
        const view = new AITutorView();
        window._tutorView = view;
        return view.render();
    });
}
