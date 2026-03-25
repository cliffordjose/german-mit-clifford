// Global Audio Helper for German Pronunciation
window.playGermanAudio = function(text, event) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        console.warn("Text-to-speech not supported by this browser.");
    }
};

// Global PRO Freemium Modal (Now disabled, everything is free)
window.showProModal = function(featureName = 'this feature') {
    console.log(`Access granted to ${featureName} automatically (payment removed).`);
};

class AppRouter {
    constructor() {
        this.routes = {
            '': HomeView,
            '#/': HomeView,
            '#/grammar': GrammarView,
            '#/vocabulary': VocabularyView,
            '#/wordlist': WordListView,
            '#/quizzes': QuizView,
            '#/pronunciation': PronunciationView,
            '#/ai-tutor': AITutorView,
            '#/about': AboutView,
            '#/profile': ProfileView,
            '#/settings': SettingsView,
            '#/login': LoginView
        };
        
        this.contentArea = document.getElementById('content-area');
        this.applyTheme();
        this.init();
    }

    applyTheme() {
        if (typeof AppState !== 'undefined') {
            const state = AppState.get();
            if (state && state.settings && state.settings.theme === 'light') {
                document.body.classList.add('theme-light');
            } else {
                document.body.classList.remove('theme-light');
            }
        }
    }

    init() {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileCloseBtn = document.getElementById('mobile-toggle');
        const sidebar = document.getElementById('sidebar');

        if (mobileMenuBtn && sidebar) {
            mobileMenuBtn.addEventListener('click', () => {
                sidebar.classList.add('open');
            });
        }

        if (mobileCloseBtn && sidebar) {
            mobileCloseBtn.addEventListener('click', () => {
                sidebar.classList.remove('open');
            });
        }

        // Close sidebar when clicking a nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    sidebar.classList.remove('open');
                }
            });
        });

        // Handle hash changes
        window.addEventListener('hashchange', () => {
            this.router();
        });

        // Initial route
        this.router();
    }

    router() {
        // Enforce Login
        if (typeof AppState !== 'undefined' && !AppState.activeUserId && location.hash !== '#/login') {
            location.hash = '#/login';
            return;
        }

        // Removed payment gating logic. Every user gets full access.

        const hash = location.hash || '#/';
        let ViewClass = this.routes[hash];

        // Basic dynamic routing fallback (e.g. #/grammar/a1-1)
        if (!ViewClass && hash.startsWith('#/grammar/')) {
            ViewClass = GrammarLessonView;
        }

        if (!ViewClass) {
            ViewClass = HomeView; // Default 404 behavior
        }

        this.updateActiveNav(hash);
        this.updateGlobalUI();
        
        // Add fade out effect
        this.contentArea.style.opacity = '0';
        
        setTimeout(() => {
            let view;
            if (ViewClass === WordListView) {
                view = wordListView;
                wordListView.currentPage = 1;
                wordListView.searchTerm = '';
                wordListView.activeLevel = 'All';
                wordListView.activeType = 'All';
            } else {
                view = new ViewClass();
            }
            this.contentArea.innerHTML = view.render();
            if (view.afterRender) {
                view.afterRender();
            }
            if (view.mount) {
                view.mount();
            }
            
            // Add fade in effect
            this.contentArea.style.opacity = '1';
            this.contentArea.classList.add('fade-in');
            setTimeout(() => this.contentArea.classList.remove('fade-in'), 400);
        }, 150);
    }

    updateActiveNav(hash) {
        document.querySelectorAll('.nav-link, .bottom-nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === hash || 
               (hash.startsWith(href) && href !== '#/')) {
                link.classList.add('active');
            } else if (hash === '#/' && href === '#/') {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    updateGlobalUI() {
        // Handle Global Feature Title Visibility & Browser Tab Sync
        const globalTitle = document.getElementById('global-feature-title');
        const isAITutor = (location.hash === '#/ai-tutor');
        if (globalTitle) {
            globalTitle.style.display = isAITutor ? 'flex' : 'none';
        }
        
        // Sync Browser Tab (tap) as requested
        document.title = isAITutor ? 'Clifford AI Tutor | Master German A1-C2' : 'German mit Clifford | Master German A1-C2';

        if (typeof AppState !== 'undefined' && AppState.activeUserId) {
            // Update Header Stats
            AppState.checkHearts();
            const streakEl = document.getElementById('header-streak-val');
            if (streakEl) streakEl.textContent = AppState.get().streak;
            
            const heartEl = document.getElementById('header-heart-val');
            if (heartEl) {
                const s = AppState.get();
                heartEl.innerHTML = s.isPro ? '&infin;' : s.hearts;
            }
            
            const avatarEl = document.getElementById('header-avatar');
            if (avatarEl) {
                const s = AppState.get();
                avatarEl.textContent = s.avatar || '👤';
            }
            
            // Show header tools
            const headerActions = document.querySelector('.header-actions');
            if (headerActions) headerActions.style.display = 'flex';

            // Show Sidebar
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.style.display = 'flex';

            // Show Bottom Nav (letting CSS manage the flex state vs none)
            const bottomNav = document.getElementById('bottom-nav');
            if (bottomNav) bottomNav.style.display = '';

            // Update Sidebar Progress
            const state = AppState.get();
            const sidebarLevel = document.querySelector('.progress-text');
            const sidebarFill = document.querySelector('.progress-bar-fill');
            if (sidebarLevel && sidebarFill) {
                const totalWordsToMaster = 10000;
                const pct = ((state.wordsMastered / totalWordsToMaster) * 100).toFixed(1);
                sidebarLevel.textContent = `Level ${state.level} (${pct}%)`;
                sidebarFill.style.width = `${pct}%`;
            }

        } else {
            // Hide private header items if logged out
            const headerActions = document.querySelector('.header-actions');
            if (headerActions) headerActions.style.display = 'none';

            // Sidebar and navigation should remain structurally available for About Us and mobile access
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.style.display = 'flex'; 
        }
    }
}

// Ensure the app initializes when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new AppRouter();
});
