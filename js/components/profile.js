class ProfileView {
    constructor() {
        this.state = (typeof AppState !== 'undefined' && AppState.get()) ? AppState.get() : {
            level: 'A1',
            wordsMastered: 0,
            streak: 0,
            quizzesTaken: 0,
            lastActive: new Date().toISOString()
        };
    }

    logout() {
        if (typeof AppState !== 'undefined') {
            AppState.logoutUser();
            location.hash = '#/login';
            if (typeof app !== 'undefined') app.updateGlobalUI();
        }
    }

    render() {
        window.ProfileController = this;
        
        // Calculate dynamic stats
        const totalWordsToMaster = 10000;
        const masteryPercentage = ((this.state.wordsMastered / totalWordsToMaster) * 100).toFixed(2);
        const joinDate = this.state.lastActive ? new Date(this.state.lastActive).toLocaleDateString() : 'Today';

        return `
            <div class="page-header fade-in">
                <h1 class="page-title">User Profile</h1>
                <p class="page-desc">Track your overall language acquisition journey.</p>
            </div>

            <div class="fade-in" style="animation-delay: 0.1s; max-width: 900px;">
                
                <!-- Profile Header Card -->
                <div class="glass-card" style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center; margin-bottom: 32px; background: var(--gradient-brand); border: none;">
                    <div style="width: 120px; height: 120px; border-radius: 50%; background: white; display: flex; justify-content: center; align-items: center; font-size: 64px; font-weight: 800; color: #ff6b3b; box-shadow: 0 10px 30px rgba(0,0,0,0.2); overflow: hidden;">
                        ${this.state.avatar || '👤'}
                    </div>
                    <div style="flex: 1; min-width: 250px;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div>
                                <h2 style="font-size: 36px; color: white; margin-bottom: 8px;">${(typeof AppState !== 'undefined' && AppState.get() && AppState.get().profileName) ? AppState.get().profileName : (typeof AppState !== 'undefined' ? AppState.activeUserId : 'Learner')}</h2>
                                <div style="font-size: 13px; color: rgba(255,255,255,0.85); margin-bottom: 10px;">ID: ${typeof AppState !== 'undefined' ? AppState.activeUserId : ''}</div>
                                <div style="display: flex; gap: 16px; margin-bottom: 16px;">
                                    <span class="badge" style="background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.5);"><i class='bx bx-calendar'></i> Joined ${joinDate}</span>
                                </div>
                            </div>
                            <button class="btn-secondary" onclick="ProfileController.logout()" style="background: rgba(231, 76, 60, 0.2); color: white; border-color: rgba(231, 76, 60, 0.5);"><i class='bx bx-log-out'></i> Log Out</button>
                        </div>
                        <p style="color: rgba(255,255,255,0.9); font-size: 16px;">"Language is the road map of a culture. It tells you where its people come from and where they are going."</p>
                    </div>
                </div>

                <!-- Stats Grid -->
                <h2 style="margin-bottom: 24px; font-size: 24px; display:flex; align-items:center; gap:12px;">
                    <i class='bx bx-bar-chart-alt-2' style="color: var(--accent-gold);"></i> Learning Analytics
                </h2>
                
                <div class="grid-cards" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); margin-bottom: 32px;">
                    
                    <div class="glass-card" style="text-align: center;">
                        <div style="font-size: 32px; color: #ff6b3b; margin-bottom: 8px;"><i class='bx bxs-flame'></i></div>
                        <div style="font-size: 36px; font-weight: 800; font-family: var(--font-heading); margin-bottom: 4px;">${this.state.streak}</div>
                        <div style="color: var(--text-secondary); font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Day Streak</div>
                    </div>

                    <div class="glass-card" style="text-align: center;">
                        <div style="font-size: 32px; color: #2ecc71; margin-bottom: 8px;"><i class='bx bx-brain'></i></div>
                        <div style="font-size: 36px; font-weight: 800; font-family: var(--font-heading); margin-bottom: 4px;">${this.state.wordsMastered}</div>
                        <div style="color: var(--text-secondary); font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Words Mastered</div>
                    </div>

                    <div class="glass-card" style="text-align: center;">
                        <div style="font-size: 32px; color: #3498db; margin-bottom: 8px;"><i class='bx bx-joystick'></i></div>
                        <div style="font-size: 36px; font-weight: 800; font-family: var(--font-heading); margin-bottom: 4px;">${this.state.quizzesTaken || 0}</div>
                        <div style="color: var(--text-secondary); font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Quizzes Passed</div>
                    </div>

                    <div class="glass-card" style="text-align: center;">
                        <div style="font-size: 32px; color: var(--accent-gold); margin-bottom: 8px;"><i class='bx bx-medal'></i></div>
                        <div style="font-size: 36px; font-weight: 800; font-family: var(--font-heading); margin-bottom: 4px;">${this.state.level}</div>
                        <div style="color: var(--text-secondary); font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Current Level</div>
                    </div>
                </div>

                <!-- Proficiency Card -->
                <div class="glass-card">
                    <div style="display: flex; justify-content: space-between; align-items:flex-end; margin-bottom: 16px;">
                        <div>
                            <h3 style="font-size: 20px; margin-bottom: 4px;">Overall Language Proficiency</h3>
                            <p style="color: var(--text-secondary); font-size: 14px;">Towards full 10,000 Word C2 Mastery.</p>
                        </div>
                        <div style="font-size: 24px; font-weight: 800; color: var(--accent-gold);">${masteryPercentage}%</div>
                    </div>
                    
                    <div class="progress-bar-bg" style="height: 12px; margin-bottom: 24px;">
                        <div class="progress-bar-fill" style="width: ${masteryPercentage}%; background: var(--gradient-gold);"></div>
                    </div>

                    <a href="#/vocabulary" class="btn-primary" style="justify-content: center;">Continue Learning <i class='bx bx-right-arrow-alt'></i></a>
                </div>

            </div>
        `;
    }
}
