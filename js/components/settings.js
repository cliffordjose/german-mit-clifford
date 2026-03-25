class SettingsView {
    constructor() {
        this.state = (typeof AppState !== 'undefined' && AppState.get()) ? AppState.get() : {};
        // Default settings if not present
        this.settings = this.state.settings || {
            dailyGoal: 20,
            soundEnabled: true,
            theme: 'dark'
        };
    }

    saveSettings() {
        if (typeof AppState !== 'undefined') {
            AppState.update({ settings: this.settings });
            // Flash a quick toast or alert
            const btn = document.getElementById('save-settings-btn');
            if(btn) {
                const originalText = btn.innerHTML;
                btn.innerHTML = "<i class='bx bx-check'></i> Saved!";
                btn.style.background = "#2ecc71";
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = "";
                }, 2000);
            }
        }
    }

    reRender() {
        const contentArea = document.getElementById('content-area') || document.querySelector('.content-area');
        if (contentArea) {
            contentArea.innerHTML = this.render();
        }
    }

    updateSetting(key, value) {
        this.settings[key] = value;
        this.saveSettings();
        if (key === 'theme') {
            if (value === 'light') document.body.classList.add('theme-light');
            else document.body.classList.remove('theme-light');
        }
        this.reRender();
    }

    resetProgress() {
        if (confirm("Are you absolutely sure you want to reset ALL your progress? This will reset your streak, words mastered, and quizzes taken to 0. This action cannot be undone.")) {
            if (typeof AppState !== 'undefined') {
                AppState.update({
                    level: 'A1',
                    wordsMastered: 0,
                    streak: 0,
                    lastActive: null,
                    quizzesTaken: 0,
                    highestScore: 0
                });
                alert("Progress has been reset.");
                if (typeof app !== 'undefined') app.updateHeaderStats();
                this.reRender();
            }
        }
    }

    render() {
        window.SettingsController = this;

        return `
            <div class="page-header fade-in">
                <h1 class="page-title">Settings</h1>
                <p class="page-desc">Customize your learning experience and manage your data.</p>
            </div>

            <div class="fade-in" style="animation-delay: 0.1s; max-width: 800px;">
                
                <!-- Section: Learning Preferences -->
                <div class="glass-card" style="margin-bottom: 24px;">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px; border-bottom: var(--border-glass); padding-bottom: 16px;">
                        <div style="font-size: 24px; color: var(--accent-gold);"><i class='bx bx-target-lock'></i></div>
                        <h2 style="font-size: 20px;">Learning Goals</h2>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <div>
                            <h3 style="font-size: 16px; margin-bottom: 4px;">Daily Vocabulary Goal</h3>
                            <p style="color: var(--text-secondary); font-size: 14px;">How many words do you want to master per day?</p>
                        </div>
                        <select 
                            onchange="SettingsController.updateSetting('dailyGoal', parseInt(this.value))" 
                            style="background: rgba(0,0,0,0.3); color: white; border: 1px solid rgba(255,255,255,0.1); padding: 10px 16px; border-radius: 8px; font-size: 16px; cursor: pointer;">
                            <option value="10" ${this.settings.dailyGoal === 10 ? 'selected' : ''}>10 Words</option>
                            <option value="20" ${this.settings.dailyGoal === 20 ? 'selected' : ''}>20 Words</option>
                            <option value="50" ${this.settings.dailyGoal === 50 ? 'selected' : ''}>50 Words</option>
                            <option value="100" ${this.settings.dailyGoal === 100 ? 'selected' : ''}>100 Words</option>
                        </select>
                    </div>
                </div>

                <!-- Section: App Preferences -->
                <div class="glass-card" style="margin-bottom: 24px;">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px; border-bottom: var(--border-glass); padding-bottom: 16px;">
                        <div style="font-size: 24px; color: var(--text-primary);"><i class='bx bx-mobile-alt'></i></div>
                        <h2 style="font-size: 20px;">App Preferences</h2>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <div>
                            <h3 style="font-size: 16px; margin-bottom: 4px;">Sound Effects</h3>
                            <p style="color: var(--text-secondary); font-size: 14px;">Play sounds for correct/incorrect answers in quizzes.</p>
                        </div>
                        <div style="display: flex; gap: 8px;">
                            <button onclick="SettingsController.updateSetting('soundEnabled', true)" style="padding: 8px 16px; border-radius: 8px; border: ${this.settings.soundEnabled === true ? '2px solid #2ecc71' : '2px solid transparent'}; background: rgba(46, 204, 113, 0.2); color: white; cursor: pointer;"><i class='bx bx-volume-full'></i> On</button>
                            <button onclick="SettingsController.updateSetting('soundEnabled', false)" style="padding: 8px 16px; border-radius: 8px; border: ${this.settings.soundEnabled === false ? '2px solid #e74c3c' : '2px solid transparent'}; background: rgba(231, 76, 60, 0.2); color: white; cursor: pointer;"><i class='bx bx-volume-mute'></i> Off</button>
                        </div>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h3 style="font-size: 16px; margin-bottom: 4px;">Theme</h3>
                            <p style="color: var(--text-secondary); font-size: 14px;">Toggle between Light and Dark mode.</p>
                        </div>
                        <div style="display: flex; gap: 8px;">
                            <button onclick="SettingsController.updateSetting('theme', 'dark')" style="padding: 8px 16px; border-radius: 8px; border: ${this.settings.theme === 'dark' ? '2px solid var(--accent-gold)' : '2px solid transparent'}; background: rgba(0,0,0,0.3); color: white; cursor: pointer;"><i class='bx bx-moon'></i> Dark</button>
                            <button onclick="SettingsController.updateSetting('theme', 'light')" style="padding: 8px 16px; border-radius: 8px; border: ${this.settings.theme === 'light' ? '2px solid var(--accent-gold)' : '2px solid transparent'}; background: rgba(255,255,255,0.1); color: white; cursor: pointer;"><i class='bx bx-sun'></i> Light</button>
                        </div>
                    </div>
                </div>

                <!-- Section: Data Management -->
                <div class="glass-card" style="margin-bottom: 24px; border: 1px solid rgba(231, 76, 60, 0.3);">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px; border-bottom: 1px solid rgba(231, 76, 60, 0.3); padding-bottom: 16px;">
                        <div style="font-size: 24px; color: #e74c3c;"><i class='bx bx-data'></i></div>
                        <h2 style="font-size: 20px;">Data Management</h2>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h3 style="font-size: 16px; margin-bottom: 4px;">Reset Progress</h3>
                            <p style="color: var(--text-secondary); font-size: 14px;">Permanently wipe your streak, mastered words, and level data.</p>
                        </div>
                        <button class="btn-primary" style="background: rgba(231, 76, 60, 0.2); border: 1px solid #e74c3c; color: #ffcccc;" onclick="SettingsController.resetProgress()">
                            <i class='bx bx-reset'></i> Hard Reset
                        </button>
                    </div>
                </div>

                <!-- Save Action -->
                <div style="display: flex; justify-content: flex-end;">
                    <button id="save-settings-btn" class="btn-primary" onclick="SettingsController.saveSettings()">Save Preferences</button>
                </div>
            </div>
        `;
    }
}
