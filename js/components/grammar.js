class GrammarView {
    render() {
        let html = `
            <div class="page-header fade-in">
                <h1 class="page-title">Grammar Modules</h1>
                <p class="page-desc">Master German grammar from structural basics to native-level nuances.</p>
            </div>
            <div class="grammar-levels fade-in" style="animation-delay: 0.1s;">
        `;

        for (const [level, lessons] of Object.entries(grammarData)) {
            html += `
                <div class="glass-card" style="margin-bottom: 32px;">
                    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
                        <span class="badge badge-${level.toLowerCase()}">${level}</span>
                        <h2 style="margin: 0;">${this.getLevelTitle(level)}</h2>
                    </div>
                    <div class="grid-cards" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));">
            `;
            
            if (lessons.length === 0) {
                html += `<p style="color: var(--text-muted); grid-column: 1/-1;">Modules under construction...</p>`;
            } else {
                const isProNode = level === 'C1' || level === 'C2';
                
                lessons.forEach(lesson => {
                    html += `
                        <a href="#/grammar/${lesson.id}" class="lesson-card" style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; transition: all 0.2s; display: block; text-decoration: none;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                <h4 style="color: white; margin-bottom: 8px;">${lesson.title}</h4>
                                <i class='bx bx-check-double' style="color: var(--accent-green); font-size: 20px;"></i>
                            </div>
                            <p style="color: var(--text-secondary); font-size: 14px; margin: 0;">${lesson.desc}</p>
                        </a>
                    `;
                });
            }
            
            html += `
                    </div>
                </div>
            `;
        }
        
        html += `</div>`;
        return html;
    }

    getLevelTitle(level) {
        const titles = {
            'A1': 'Beginner (Breakthrough)',
            'A2': 'Elementary (Waystage)',
            'B1': 'Intermediate (Threshold)',
            'B2': 'Upper Intermediate (Vantage)',
            'C1': 'Advanced (Effective Operational Proficiency)',
            'C2': 'Mastery (Native-level)'
        };
        return titles[level] || 'Level';
    }
}

class GrammarLessonView {
    render() {
        const hash = location.hash; // e.g. #/grammar/a1-1
        const lessonId = hash.split('/').pop();
        
        let lesson = null;
        let lessonLevel = '';
        
        for (const [level, lessons] of Object.entries(grammarData)) {
            const found = lessons.find(l => l.id === lessonId);
            if (found) {
                lesson = found;
                lessonLevel = level;
                break;
            }
        }

        if (!lesson) {
            return `
                <div class="page-header fade-in">
                    <a href="#/grammar" style="color: var(--text-secondary); margin-bottom: 16px; display: inline-block;">&larr; Back to Modules</a>
                    <h1 class="page-title">Lesson not found</h1>
                    <p>The grammar lesson you are looking for does not exist.</p>
                </div>
            `;
        }

        return `
            <div class="page-header fade-in" style="max-width: 800px; margin: 0 auto 32px;">
                <a href="#/grammar" style="color: var(--accent-gold); margin-bottom: 16px; display: inline-block; font-weight: 600; text-decoration: none;">&larr; Back to Modules</a>
                <div style="margin-bottom: 16px;"><span class="badge badge-${lessonLevel.toLowerCase()}">${lessonLevel}</span></div>
                <h1 class="page-title" style="font-size: 42px;">${lesson.title}</h1>
                <p class="page-desc" style="font-size: 18px;">${lesson.desc}</p>
            </div>
            
            <div class="glass-card fade-in lesson-content" style="animation-delay: 0.1s; max-width: 800px; margin: 0 auto; padding: 40px;">
                ${lesson.content}
            </div>

            <style>
                .lesson-card:hover { transform: translateY(-3px); border-color: rgba(255,255,255,0.2) !important; background: rgba(255,255,255,0.05) !important;}
                .lesson-content h3 { margin-top: 32px; margin-bottom: 16px; color: var(--accent-red); font-size: 24px; }
                .lesson-content h3:first-child { margin-top: 0; }
                .lesson-content p { color: #d0d0e0; font-size: 16px; margin-bottom: 24px; line-height: 1.8; }
                .grammar-table { overflow-x: auto; margin: 32px 0; border-radius: 12px; border: var(--border-glass); background: rgba(0,0,0,0.2); }
                .grammar-table table { width: 100%; border-collapse: collapse; text-align: left; }
                .grammar-table th, .grammar-table td { padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.05); }
                .grammar-table th { background: rgba(255,51,102,0.1); color: var(--accent-red); font-family: var(--font-heading); font-weight: 600; }
                .grammar-table tr:last-child td { border-bottom: none; }
                .grammar-notes { background: rgba(255, 204, 0, 0.05); border-left: 4px solid var(--accent-gold); padding: 20px; border-radius: 0 8px 8px 0; margin-top: 32px; }
                .grammar-notes h4 { color: var(--accent-gold); margin-bottom: 8px; }
                .grammar-notes p { margin: 0; color: #d0d0e0; }
            </style>
        `;
    }
}
