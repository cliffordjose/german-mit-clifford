class HomeView {
    constructor() {
        this.greeting = this.getGreeting();
        this.wordOfTheDay = this.getWordOfTheDay();
    }

    getGreeting() {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return "Guten Morgen!";
        if (hour >= 12 && hour < 18) return "Guten Tag!";
        if (hour >= 18 && hour < 22) return "Guten Abend!";
        return "Gute Nacht!";
    }

    getWordOfTheDay() {
        // Fallback word if vocabularyData is not loaded yet
        let word = { de: "fantastisch", en: "fantastic", article: null, type: "adjective" };
        
        try {
            if (typeof getAllWords === 'function') {
                const words = getAllWords();
                if (words.length > 0) {
                    // Seeded random based on date to keep it consistent for the day
                    const dateStr = new Date().toISOString().split('T')[0];
                    let hash = 0;
                    for (let i = 0; i < dateStr.length; i++) {
                        hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
                    }
                    const index = Math.abs(hash) % words.length;
                    word = words[index];
                }
            }
        } catch (e) {
            console.error("Error loading word of the day:", e);
        }
        return word;
    }

    render() {
        const state = (typeof AppState !== 'undefined' && AppState.get()) ? AppState.get() : {
            profileName: 'Learner',
            level: 'A1',
            wordsMastered: 0,
            streak: 0,
            highestScore: 0
        };
        const firstName = state.profileName ? state.profileName.split(' ')[0] : 'Learner';
        const wodArticle = this.wordOfTheDay.article ? `<span style="color:rgba(255,255,255,0.6);font-size:16px;">${this.wordOfTheDay.article}</span> ` : '';
        const wodType = this.wordOfTheDay.type ? `<span class="badge ${this.wordOfTheDay.type === 'noun' ? 'badge-a1' : 'badge-b1'}" style="margin-left:8px; background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); color: #fff;">${this.wordOfTheDay.type}</span>` : '';

        return `
            <style>
                .home-hero-card { 
                    display: flex; 
                    flex-direction: row; 
                    align-items: center; 
                    justify-content: space-between; 
                    padding: 48px !important; 
                    background: linear-gradient(135deg, rgba(255,107,18,0.1) 0%, rgba(255,204,0,0.05) 100%); 
                    border: 1px solid rgba(255,107,18,0.2) !important;
                }
                .hero-progress-ring { width: 160px; height: 160px; flex-shrink: 0; }
                
                @media (max-width: 900px) {
                    .home-hero-card { flex-direction: column; text-align: center; padding: 32px 24px !important; gap: 32px; }
                    .home-hero-card .btn-primary { width: 100%; justify-content: center; }
                    .dash-grammar-card { flex-direction: column; text-align: center; gap: 24px; }
                    .dash-grammar-card div { padding-right: 0 !important; }
                    .dash-grammar-action { width: 100%; }
                    .dash-grammar-action .btn-secondary { width: 100%; justify-content: center; }
                }
                
                @media (max-width: 600px) {
                    .grid-cards { grid-template-columns: 1fr !important; gap: 16px !important; }
                    .stat-card { padding: 16px !important; }
                    .stat-value { font-size: 24px !important; }
                }
            </style>
            <div class="page-header fade-in" style="margin-bottom: 48px;">
                <h1 class="page-title" style="font-size: clamp(40px, 6vw, 64px); background: linear-gradient(to right, #ffffff, var(--accent-gold), var(--accent-red)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -2px;">${this.greeting} ${firstName}!</h1>
                <p class="page-desc" style="font-size: 20px; color: var(--accent-gold); font-weight: 600; letter-spacing: 0.5px; opacity: 0.9;">Ready to conquer your goals today?</p>
            </div>

            <div class="grid-cards fade-in" style="animation-delay: 0.1s; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); gap: 32px;">
                
                <!-- Gamified Focus Hero Card (Spans 2 columns on larger screens) -->
                <div class="glass-card col-span-2 premium-hover home-hero-card" style="position: relative; overflow: hidden;">
                    <div style="position: absolute; right: -50px; bottom: -50px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(255,204,0,0.2) 0%, transparent 70%); filter: blur(20px); z-index: 0;"></div>
                    <div style="position: relative; z-index: 1; flex: 1;">
                        <span style="display:inline-block; padding: 6px 12px; background: rgba(255,215,0,0.15); color: var(--accent-gold); border-radius: 100px; font-size:12px; font-weight:800; letter-spacing:1px; margin-bottom: 16px; text-transform:uppercase;">Daily Objective</span>
                        <h2 style="font-size: clamp(24px, 4vw, 36px); margin: 0 0 12px 0; color: white;">Continue mastering <span style="color: var(--accent-gold);">${state.level}</span></h2>
                        <p style="font-size: 16px; color: var(--text-secondary); margin-bottom: 24px; max-width: 400px; line-height: 1.6;">Don't break your streak! Jump right back into your personalized learning path.</p>
                        <a href="#/vocabulary" class="btn-primary" style="padding: 18px 36px; border-radius: 100px; background: var(--gradient-brand); box-shadow: 0 10px 25px rgba(255, 107, 18, 0.3);">Resume Lesson <i class='bx bx-play-circle' style="font-size: 22px;"></i></a>
                    </div>
                    <div class="hero-progress-ring" style="position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 160px; height: 160px; border-radius: 50%; border: 6px solid rgba(255,204,0,0.1); border-top-color: var(--accent-gold); box-shadow: inset 0 0 30px rgba(255,204,0,0.1), 0 0 30px rgba(255,204,0,0.15);">
                        <div style="font-size: 32px; font-weight: 800; color: white;">${Math.min(100, Math.floor(state.wordsMastered/20))}%</div>
                        <div style="font-size: 12px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-top: 4px;">Mastery</div>
                    </div>
                </div>

                <!-- Gamification Widget: Streak -->
                <div class="glass-card premium-hover stat-card" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; padding: 24px !important; gap: 20px;">
                    <div class="stat-icon-wrapper" style="width: 64px; height: 64px; border-radius: 20px; background: rgba(255, 107, 59, 0.1); display: flex; align-items: center; justify-content: center; font-size: 32px; color: #ff6b3b; box-shadow: 0 8px 16px rgba(255, 107, 59, 0.2);">
                        <i class='bx bxs-flame'></i>
                    </div>
                    <div>
                        <div class="stat-value" id="streak-val" style="font-size: 28px; line-height: 1.2;">${state.streak} Days</div>
                        <div class="stat-label">Current Streak</div>
                    </div>
                </div>

                <!-- Gamification Widget: Words Mastered -->
                <div class="glass-card premium-hover stat-card" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; padding: 24px !important; gap: 20px;">
                    <div class="stat-icon-wrapper" style="width: 64px; height: 64px; border-radius: 20px; background: rgba(34, 197, 94, 0.1); display: flex; align-items: center; justify-content: center; font-size: 32px; color: var(--accent-green); box-shadow: 0 8px 16px rgba(34, 197, 94, 0.2);">
                        <i class='bx bx-brain'></i>
                    </div>
                    <div>
                        <div class="stat-value" id="words-mastered-val" style="font-size: 28px; line-height: 1.2;">${state.wordsMastered}</div>
                        <div class="stat-label">Words Mastered</div>
                    </div>
                </div>

                <!-- Word of the Day -->
                <div class="glass-card premium-hover" style="background: var(--gradient-brand); border: none; position: relative; overflow: hidden; display:flex; flex-direction:column; justify-content:center; padding: 40px !important; box-shadow: 0 15px 40px rgba(255,107,18,0.35);">
                    <div style="position: absolute; right: -20px; bottom: -20px; width: 150px; height: 150px; opacity: 0.1; filter: grayscale(1);">
                        <img src="assets/logo.png" alt="Logo" style="width: 100%; height: 100%; border-radius: 50%;">
                    </div>
                    <div style="position: relative; z-index: 1;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
                            <span style="text-transform:uppercase; font-size:12px; font-weight:800; letter-spacing:2px; opacity:0.9; color: white;">Word of the Day</span>
                            <i class='bx bxs-star' style="color: var(--accent-gold); font-size: 20px; filter: drop-shadow(0 0 4px rgba(255,215,0,0.5));"></i>
                        </div>
                        <h2 style="font-size: 36px; margin: 0 0 8px 0; color: white; display:flex; align-items:center; line-height: 1.2;">
                            ${wodArticle}${this.wordOfTheDay.de} ${wodType}
                        </h2>
                        <p style="font-size: 16px; color: rgba(255,255,255,0.9); margin-bottom: 0;">Meaning: <strong>${this.wordOfTheDay.en}</strong></p>
                    </div>
                </div>

                <!-- Randomized Quiz -->
                <div class="glass-card premium-hover" style="position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; padding: 32px !important;">
                    <div style="position: absolute; right: -10px; top: -10px; width: 100px; height: 100px; background: radial-gradient(circle, rgba(51,153,255,0.2) 0%, transparent 70%); filter: blur(20px); z-index: 0;"></div>
                    <div style="position: relative; z-index: 1;">
                        <div style="font-size: 36px; color: #3399ff; margin-bottom: 16px; filter: drop-shadow(0 0 8px rgba(51,153,255,0.4));"><i class='bx bx-joystick'></i></div>
                        <h3 style="margin-bottom: 8px; font-size: 20px;">Quick Quiz Session</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 24px; font-size:14px; line-height: 1.5;">Test your reflexes with randomized questions across all your mastered topics.</p>
                    </div>
                    <a href="#/quizzes" class="btn-secondary" style="width:100%; justify-content:center; position: relative; z-index: 1; border-color: rgba(51,153,255,0.3); color: white;">Start Quiz <i class='bx bx-right-arrow-alt'></i></a>
                </div>

                <!-- Grammar Modules -->
                <div class="glass-card premium-hover col-span-2 dash-grammar-card" style="position: relative; overflow: hidden; display: flex; align-items: center; justify-content: space-between; padding: 32px !important;">
                    <div style="position: absolute; right: 0; top: 0; width: 300px; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.02)); z-index: 0;"></div>
                    <div style="position: relative; z-index: 1; flex: 1; padding-right: 24px;">
                        <div style="display:flex; align-items:center; gap: 12px; margin-bottom: 12px;">
                            <div style="font-size: 32px; color: var(--accent-red); filter: drop-shadow(0 0 8px rgba(255,51,102,0.4));"><i class='bx bx-text'></i></div>
                            <span class="badge badge-c1">A1-C2 Library</span>
                        </div>
                        <h3 style="margin-bottom: 8px; font-size: 24px;">Grammar Masterclass</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 0; font-size:15px; max-width: 400px; line-height: 1.5;">Deep dive into sentence structure, conjugations, and rules with crystal clear English explanations.</p>
                    </div>
                    <div class="dash-grammar-action" style="position: relative; z-index: 1;">
                        <a href="#/grammar" class="btn-secondary" style="padding: 16px 32px; border-radius: 100px;">Explore Modules <i class='bx bx-right-arrow-alt'></i></a>
                    </div>
                </div>

            </div>
        `;
    }
}
