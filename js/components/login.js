class LoginView {
    constructor() {}

    normalizeIdentity(value) {
        return String(value || '').trim().toLowerCase();
    }

    async registerNewUser() {
        const nameInput = document.getElementById('new-username-input');
        const bdayInput = document.getElementById('new-bday-input');
        const locInput = document.getElementById('new-loc-input');
        const btn = document.getElementById('register-btn');

        const name = nameInput ? nameInput.value.trim() : '';
        const birthday = bdayInput ? bdayInput.value.trim() : '';
        const locationStr = locInput ? locInput.value.trim() : '';

        if (!name) { 
            if (nameInput) {
                nameInput.style.borderColor = 'rgba(255,80,80,0.8)';
                nameInput.focus();
            }
            alert("Please enter your name to continue."); 
            return; 
        }

        const loginId = this.normalizeIdentity(name);

        if (btn) { btn.innerHTML = "Creating Profile... <i class='bx bx-loader-alt bx-spin'></i>"; btn.disabled = true; }

        try {
            // Save member to Firebase Firestore so admin can view all members
            if (typeof saveUserToFirebase === 'function') {
                saveUserToFirebase({ name, dob: birthday, location: locationStr });
            }
        } catch (e) { console.warn('Firebase save failed:', e); }

        if (typeof AppState !== 'undefined' && AppState.users && AppState.users[loginId]) {
            if (btn) { btn.innerHTML = "Start Learning <i class='bx bx-right-arrow-alt'></i>"; btn.disabled = false; }
            alert("This Name already exists in profiles. Logging you in!");
        }

        if (typeof AppState !== 'undefined') {
            AppState.loginUser(loginId, {
                profileName: name,
                birthday,
                location: locationStr,
                avatar: window.selectedAvatar || '👤'
            });
        }
        await this.login(loginId, { profileName: name });
    }

    async login(loginId, profileData = {}) {
        const identity = this.normalizeIdentity(loginId);
        if (!identity) { alert("Please enter a valid Login ID."); return; }

        const cleanLoginId = identity;
        if (typeof AppState !== 'undefined') {
            AppState.loginUser(cleanLoginId, {
                profileName: profileData.profileName || cleanLoginId
            });
            AppState.update({ isPro: true, hearts: "Unlimited" });
            location.hash = '#/';
            if (typeof app !== 'undefined') { app.applyTheme(); app.updateGlobalUI(); }
        }
    }

    showLoginForm() {
        // Form is always visible now
    }

    render() {
        window.LoginController = this;

        let existingUsersHtml = '';
        if (typeof AppState !== 'undefined') {
            const users = Object.entries(AppState.users || {});
            if (users.length > 0) {
                existingUsersHtml = `
                    <div style="margin-bottom: 32px;">
                        <h3 style="font-size: 13px; margin-bottom: 16px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 2px;">Continue Learning</h3>
                        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                            ${users.map(([loginId, user]) => `
                                <button class="btn-secondary" style="flex: 1; padding: 12px 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); justify-content: flex-start; min-width: 140px; transition: all 0.2s;" onclick="LoginController.login('${loginId.replace(/'/g, "\\'")}', { profileName: '${String((user && user.profileName) || loginId).replace(/'/g, "\\'")}' })" onmouseover="this.style.background='rgba(255,255,255,0.08)'; this.style.borderColor='var(--accent-gold)';" onmouseout="this.style.background='rgba(255,255,255,0.03)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                                    <div class="user-avatar" style="width: 32px; height: 32px; font-size: 14px; border: none; margin: 0; background: linear-gradient(135deg, var(--accent-gold), #ff8c00); padding: 0; display: flex; align-items: center; justify-content: center; color: black; font-weight: 800; border-radius: 8px; overflow: hidden;">
                                        ${user.avatar || (String((user && user.profileName) || loginId).charAt(0).toUpperCase())}
                                    </div>
                                    <div style="text-align: left; margin-left: 10px;">
                                        <div style="font-weight: 600; font-size: 14px; color: white; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100px;">${String((user && user.profileName) || loginId)}</div>
                                        <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Level ${user.level || 'A1'}</div>
                                    </div>
                                    <i class='bx bx-right-arrow-alt' style="margin-left: auto; color: var(--text-muted); font-size: 18px;"></i>
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        }

        return `
            <div class="login-wrapper">
                <!-- Left Side: Visual/Branding -->
                <div class="login-branding">
                    <div class="branding-content">
                        <div class="logo-icon-large">
                            <img src="assets/logo.png" alt="Logo" style="width: 100%; height: 100%; border-radius: 50%; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                        </div>
                        <h1 class="branding-title animate-character-reveal">German mit Clifford</h1>
                        <p class="branding-quote">"Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt."</p>
                        <p class="branding-author">— Ludwig Wittgenstein</p>
                    </div>
                    
                    <!-- Ambient background elements -->
                    <div class="ambient-orb orb-1"></div>
                    <div class="ambient-orb orb-2"></div>
                    <div class="ambient-orb orb-3"></div>
                </div>

                <!-- Right Side: Form -->
                <div class="login-form-container">
                    <div class="glass-card login-form-card">
                        <div class="mobile-branding-header">
                            <div class="logo-icon" style="width: 56px; height: 56px; border-radius: 16px; margin: 0 auto 16px auto; box-shadow: var(--shadow-glow); display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); overflow: hidden;">
                                <img src="assets/logo.png" alt="Logo" style="width: 100%; height: 100%; object-fit: cover;">
                            </div>
                            <h2 style="font-size: 28px; margin-bottom: 6px; font-weight: 800; letter-spacing: -0.5px;">German mit Clifford</h2>
                            <p style="color: var(--accent-gold); font-size: 12px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin-bottom: 32px;">Start Your Journey</p>
                        </div>

                        ${existingUsersHtml}

                        <div style="border-top: ${existingUsersHtml ? '1px solid rgba(255,255,255,0.07)' : 'none'}; padding-top: ${existingUsersHtml ? '24px' : '0'};">
                            <h3 style="font-size: 13px; margin-bottom: 24px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 2px;">${existingUsersHtml ? 'Create New Profile' : 'Create Your Profile'}</h3>

                            <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px;">
                                <div class="input-group">
                                    <i class='bx bx-user input-icon'></i>
                                    <input type="text" id="new-username-input" class="modern-input" placeholder="Your Full Name">
                                </div>
                                <div class="input-group">
                                    <i class='bx bx-calendar input-icon'></i>
                                    <input type="date" id="new-bday-input" class="modern-input">
                                </div>
                                <div class="input-group">
                                    <i class='bx bx-map-pin input-icon'></i>
                                    <input type="text" id="new-loc-input" class="modern-input" placeholder="City / Country">
                                </div>
                            </div>

                            <div style="margin-bottom: 32px;">
                                <h3 style="font-size: 11px; margin-bottom: 12px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1.5px;">Choose Your Avatar</h3>
                                <div id="avatar-picker" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
                                    ${['👤', '🧑‍🎓', '🧑‍🏫', '🧔', '🧑‍💼', '👩‍💻', '🥷', '🧑‍🎨'].map((emoji, i) => `
                                        <div class="avatar-option ${i === 0 ? 'active' : ''}" 
                                             onclick="document.querySelectorAll('.avatar-option').forEach(el=>el.classList.remove('active')); this.classList.add('active'); window.selectedAvatar='${emoji}';" 
                                             style="height: 50px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; transition: all 0.2s;">
                                            ${emoji}
                                        </div>
                                    `).join('')}
                                </div>
                                <style>
                                    .avatar-option:hover { background: rgba(255,255,255,0.08) !important; border-color: rgba(255,255,255,0.2) !important; transform: translateY(-2px); }
                                    .avatar-option.active { background: rgba(255, 107, 18, 0.1) !important; border-color: var(--accent-gold) !important; box-shadow: 0 0 15px rgba(255, 107, 18, 0.15); }
                                </style>
                            </div>

                            <button id="register-btn" class="btn-primary" style="width: 100%; justify-content: center; padding: 18px; font-size: 16px; border-radius: 14px; background: var(--gradient-brand); color: #000; box-shadow: 0 8px 24px rgba(255, 107, 18, 0.3); font-weight: 800; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);" onclick="LoginController.registerNewUser()">
                                Create My Account <i class='bx bx-right-arrow-alt' style="font-size: 20px;"></i>
                            </button>
                            
                            <!-- Dedication -->
                            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center;">
                                <i class='bx bxs-heart' style="color: var(--accent-red); font-size: 20px; filter: drop-shadow(0 0 8px rgba(255,51,102,0.4));"></i>
                                <p style="font-size: 12px; color: var(--text-muted); font-style: italic; line-height: 1.6; margin-top: 8px;">
                                    Dedicated in loving memory to Abhishek Nandhakumar.<br>May his dream of learning German live on through you.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}
