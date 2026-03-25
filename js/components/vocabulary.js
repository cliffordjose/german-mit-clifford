class VocabularyView {
    constructor() {
        this.currentCards = [];
        this.currentIndex = 0;
        this.showingEnglish = false;
    }

    render() {
        return `
            <div class="page-header fade-in">
                <h1 class="page-title">10k Vocabulary Builder</h1>
                <p class="page-desc">Expand your lexicon. Select a category to start practicing with flashcards.</p>
            </div>

            <div class="vocab-layout fade-in" style="animation-delay: 0.1s; display: grid; grid-template-columns: 300px 1fr; gap: 32px; align-items: start;">
                
                <!-- Sidebar Categories -->
                <div class="glass-card" style="padding: 0; overflow: hidden;">
                    <div style="padding: 20px; border-bottom: var(--border-glass); background: rgba(255,255,255,0.02);">
                        <h3 style="margin: 0;">Categories</h3>
                    </div>
                    <div class="category-list" style="max-height: 60vh; overflow-y: auto;">
                        ${this.renderCategoryList()}
                    </div>
                </div>

                <!-- Flashcard Area -->
                <div class="flashcard-container" id="flashcard-area">
                    <div class="glass-card" style="text-align: center; padding: 60px 20px;">
                        <i class='bx bx-layer' style="font-size: 64px; color: var(--text-muted); margin-bottom: 24px;"></i>
                        <h2 style="margin-bottom: 12px;">Select a Category</h2>
                        <p style="color: var(--text-secondary);">Choose a vocabulary category from the list to begin your flashcard session.</p>
                    </div>
                </div>
            </div>

            <style>
                @media (max-width: 900px) {
                    .vocab-layout { grid-template-columns: 1fr !important; }
                    .category-list { max-height: 220px !important; }
                }
                @media (max-width: 600px) {
                    .fc-word { font-size: 32px !important; word-wrap: break-word; }
                    .fc-word-en { font-size: 28px !important; word-wrap: break-word; }
                    .flashcard-front, .flashcard-back { padding: 24px !important; }
                }
                .cat-btn { display: block; width: 100%; border: none; background: none; color: var(--text-secondary); padding: 16px 20px; text-align: left; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.03); transition: all 0.2s; font-family: var(--font-body); font-size: 15px;}
                .cat-btn:hover { background: rgba(255,255,255,0.05); color: white; }
                .cat-btn.active { background: rgba(255,51,102,0.1); color: var(--accent-red); border-left: 3px solid var(--accent-red); }
                .cat-level { font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-right: 8px;}
                
                /* Flashcard Styles */
                .flashcard-wrapper { perspective: 1000px; width: 100%; max-width: 500px; margin: 0 auto; min-height: 300px; cursor: pointer; }
                .flashcard-inner { position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1); transform-style: preserve-3d; }
                .flashcard-wrapper.flipped .flashcard-inner { transform: rotateY(180deg); }
                .flashcard-front, .flashcard-back { position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 15px 35px rgba(0,0,0,0.5); }
                .flashcard-front { background: linear-gradient(145deg, rgba(40,40,55,0.95), rgba(20,20,30,0.95)); }
                .flashcard-back { background: var(--gradient-brand); transform: rotateY(180deg); box-shadow: var(--shadow-glow); }
                
                .fc-article { font-size: 20px; font-weight: 500; color: var(--accent-gold); margin-bottom: 8px; font-family: var(--font-heading); }
                .fc-word { font-size: 48px; font-weight: 800; font-family: var(--font-heading); line-height: 1.2; margin-bottom: 16px; }
                .fc-word-en { font-size: 40px; font-weight: 700; font-family: var(--font-heading); }
                .fc-hint { color: rgba(255,255,255,0.5); font-size: 14px; margin-top: auto; }
                
                .fc-controls { display: flex; justify-content: center; gap: 16px; margin-top: 32px; }
                .fc-btn { background: rgba(255,255,255,0.1); border: var(--border-glass); color: white; width: 50px; height: 50px; border-radius: 50%; font-size: 24px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }
                .fc-btn:hover { background: rgba(255,255,255,0.2); transform: scale(1.1); }
                .fc-btn:disabled { opacity: 0.3; cursor: not-allowed; transform: none; }
            </style>
        `;
    }

    renderCategoryList() {
        let html = '';
        for (const [level, categories] of Object.entries(vocabularyData)) {
            categories.forEach(cat => {
                html += `
                    <button class="cat-btn" data-level="${level}" data-cat="${cat.category}">
                        <span class="cat-level">${level}</span> ${cat.category}
                    </button>
                `;
            });
        }
        return html;
    }

    mount() {
        // Handle category clicks
        const buttons = document.querySelectorAll('.cat-btn');
        const area = document.getElementById('flashcard-area');

        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const level = btn.getAttribute('data-level');
                const catName = btn.getAttribute('data-cat');
                
                const catData = vocabularyData[level].find(c => c.category === catName);
                if (catData && catData.words.length > 0) {
                    this.currentCards = catData.words;
                    this.currentIndex = 0;
                    this.renderFlashcardUI(area, catName);
                }
            });
        });
    }

    renderFlashcardUI(container, catName) {
        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <h2 style="margin: 0;">${catName}</h2>
                <span class="badge" style="background: rgba(255,255,255,0.1);">Card <span id="fc-counter">1 / ${this.currentCards.length}</span></span>
            </div>
            
            <div class="flashcard-wrapper" id="flashcard">
                <div class="flashcard-inner">
                    <div class="flashcard-front">
                        ${this.getFrontHTML()}
                    </div>
                    <div class="flashcard-back">
                        ${this.getBackHTML()}
                    </div>
                </div>
            </div>

            <div class="fc-controls">
                <button class="fc-btn" id="fc-prev" disabled><i class='bx bx-chevron-left'></i></button>
                <button class="fc-btn" id="fc-flip" style="background: var(--gradient-brand); border: none;"><i class='bx bx-refresh'></i></button>
                <button class="fc-btn" id="fc-next" ${this.currentCards.length > 1 ? '' : 'disabled'}><i class='bx bx-chevron-right'></i></button>
            </div>
        `;

        this.attachFlashcardListeners(container);
    }

    getFrontHTML() {
        const word = this.currentCards[this.currentIndex];
        const safeDe = word.de.replace(/'/g, "\\'");
        const articleHtml = word.article ? `<div class="fc-article">${word.article}</div>` : '';
        return `
            <button onclick="playGermanAudio('${safeDe}', event)" style="position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.05); border: var(--border-glass); color: rgba(255,255,255,0.8); width: 44px; height: 44px; border-radius: 50%; font-size: 22px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; z-index: 10; box-shadow: 0 4px 10px rgba(0,0,0,0.2);" onmouseover="this.style.background='rgba(255,255,255,0.15)'; this.style.color='#fff';" onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.color='rgba(255,255,255,0.8)';">
                <i class='bx bx-volume-full'></i>
            </button>
            ${articleHtml}
            <div class="fc-word">${word.de}</div>
            <div class="fc-hint">Tap or Click to reveal translation</div>
        `;
    }

    getBackHTML() {
        const word = this.currentCards[this.currentIndex];
        return `
            <div class="fc-word-en">${word.en}</div>
            <div class="fc-hint" style="color: rgba(255,255,255,0.8); margin-top: 24px;">Type: ${word.type}</div>
        `;
    }

    attachFlashcardListeners(container) {
        const card = document.getElementById('flashcard');
        const prevBtn = document.getElementById('fc-prev');
        const nextBtn = document.getElementById('fc-next');
        const flipBtn = document.getElementById('fc-flip');
        const counter = document.getElementById('fc-counter');

        const updateCard = () => {
            card.classList.remove('flipped');
            setTimeout(() => {
                document.querySelector('.flashcard-front').innerHTML = this.getFrontHTML();
                document.querySelector('.flashcard-back').innerHTML = this.getBackHTML();
                counter.innerText = `${this.currentIndex + 1} / ${this.currentCards.length}`;
                prevBtn.disabled = this.currentIndex === 0;
                nextBtn.disabled = this.currentIndex === this.currentCards.length - 1;
            }, 150); // wait for flip animation to clear before changing content
        };

        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        flipBtn.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        prevBtn.addEventListener('click', () => {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                updateCard();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (this.currentIndex < this.currentCards.length - 1) {
                this.currentIndex++;
                updateCard();
            }
        });
    }
}
