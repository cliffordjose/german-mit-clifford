class StateManager {
    constructor() {
        this.storeKey = 'germanApp_users';
        this.activeUserKey = 'germanApp_activeUser';
        this.users = {};
        this.activeUserId = null;
        this.load();
    }

    load() {
        const storedUsers = localStorage.getItem(this.storeKey);
        if (storedUsers) {
            try {
                this.users = JSON.parse(storedUsers);
            } catch (e) {
                this.users = {};
            }
        }
        const active = localStorage.getItem(this.activeUserKey);
        if (active && this.users[active]) {
            this.activeUserId = active;
        }

        // Backward-compat migration: ensure each user has a stable profile name.
        Object.keys(this.users).forEach((loginId) => {
            const user = this.users[loginId];
            if (!user || typeof user !== 'object') return;
            if (!user.profileName) user.profileName = loginId;
            if (!user.loginId) user.loginId = loginId;
        });
    }

    save() {
        localStorage.setItem(this.storeKey, JSON.stringify(this.users));
        if (this.activeUserId) {
            localStorage.setItem(this.activeUserKey, this.activeUserId);
        } else {
            localStorage.removeItem(this.activeUserKey);
        }
    }

    loginUser(loginId, profileData = {}) {
        const cleanLoginId = String(loginId || '').trim();
        if (!cleanLoginId) return;

        if (!this.users[cleanLoginId]) {
            // Create new profile defaults
            this.users[cleanLoginId] = {
                loginId: cleanLoginId,
                profileName: String(profileData.profileName || cleanLoginId).trim(),
                birthday: String(profileData.birthday || '').trim(),
                location: String(profileData.location || '').trim(),
                level: 'A1',
                wordsMastered: 0,
                streak: 0,
                lastActive: new Date().toISOString(),
                quizzesTaken: 0,
                highestScore: 0,
                hearts: 5,
                lastHeartRefresh: new Date().toISOString(),
                avatar: profileData.avatar || '👤',
                settings: {
                    dailyGoal: 20,
                    soundEnabled: true,
                    theme: 'dark'
                }
            };
        } else {
            // Keep existing data, but allow profile display fields to refresh.
            this.users[cleanLoginId] = {
                ...this.users[cleanLoginId],
                loginId: cleanLoginId,
                profileName: String(profileData.profileName || this.users[cleanLoginId].profileName || cleanLoginId).trim(),
                birthday: String(profileData.birthday || this.users[cleanLoginId].birthday || '').trim(),
                location: String(profileData.location || this.users[cleanLoginId].location || '').trim()
            };
        }
        this.activeUserId = cleanLoginId;
        this.save();
        this.trackDailyStreak();
        this.checkHearts();
    }

    logoutUser() {
        this.activeUserId = null;
        this.save();
    }

    get() {
        if (!this.activeUserId) return null;
        return this.users[this.activeUserId];
    }

    update(newData) {
        if (!this.activeUserId) return;
        this.users[this.activeUserId] = { ...this.users[this.activeUserId], ...newData };
        this.save();
    }

    incrementVal(key, amount = 1) {
        if (!this.activeUserId) return;
        if (typeof this.users[this.activeUserId][key] === 'number') {
            this.users[this.activeUserId][key] += amount;
            this.save();
        }
    }

    trackDailyStreak() {
        if (!this.activeUserId) return;
        const user = this.users[this.activeUserId];
        if (!user.lastActive) {
            user.lastActive = new Date().toISOString();
            user.streak = 1;
            this.save();
            return;
        }

        const lastDate = new Date(user.lastActive);
        const today = new Date();
        
        // Normalize to beginning of day
        lastDate.setHours(0,0,0,0);
        today.setHours(0,0,0,0);
        
        const diffTime = Math.abs(today - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            // Consecutive day
            user.streak += 1;
            user.lastActive = new Date().toISOString();
            this.save();
        } else if (diffDays > 1) {
            // Streak broken
            user.streak = 1;
            user.lastActive = new Date().toISOString();
            this.save();
        }
        // If 0, it's the same day, do nothing to streak.
    }

    checkHearts() {
        if (!this.activeUserId) return;
        const user = this.users[this.activeUserId];
        
        // Setup schema for existing users
        if (typeof user.hearts !== 'number') {
            user.hearts = 5;
            user.lastHeartRefresh = new Date().toISOString();
            this.save();
            return;
        }
        
        const lastDate = new Date(user.lastHeartRefresh);
        const today = new Date();
        lastDate.setHours(0,0,0,0);
        today.setHours(0,0,0,0);
        
        // Restore 5 hearts every day automatically
        if (today > lastDate && user.hearts < 5) {
            user.hearts = 5;
            user.lastHeartRefresh = new Date().toISOString();
            this.save();
        }
    }
}

// Initialize global state
const AppState = new StateManager();
AppState.trackDailyStreak();
AppState.checkHearts();
