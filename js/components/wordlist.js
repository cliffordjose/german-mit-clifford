// wordlist.js — Beautiful searchable, filterable word list component

class WordListView {
    constructor() {
        this.allWords = [];
        this.filtered = [];
        this.currentPage = 1;
        this.perPage = 50;
        this.activeLevel = 'All';
        this.activeType = 'All';
        this.searchTerm = '';
    }

    render() {
        this.allWords = getAllWords();
        this.filtered = [...this.allWords];
        return `
            <div class="page-header fade-in">
                <h1 class="page-title">German Word List</h1>
                <p class="page-desc">Browse curated German words with English meanings across all CEFR levels.</p>
            </div>

            <!-- Search & Filter Bar -->
            <div class="glass-card fade-in wl-toolbar" style="animation-delay:0.1s; padding: 20px 24px; margin-bottom:24px;">
                <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center;">
                    <!-- Level Filter -->
                    <div style="display:flex; gap:6px; flex-wrap:wrap;" id="wl-level-filters">
                        ${['All','A1','A2','B1','B2','C1','C2'].map(l => `
                            <button onclick="wordListView.filterLevel('${l}')" id="wl-lvl-${l}"
                                class="wl-filter-btn ${l === 'All' ? 'active' : ''}"
                                style="padding:7px 14px; border-radius:20px; border:var(--border-glass); cursor:pointer; font-size:13px; font-weight:600; background:${l === 'All' ? 'var(--primary)' : 'rgba(255,255,255,0.05)'}; color:${l === 'All' ? 'white' : 'var(--text-secondary)'}; transition:all 0.2s;">
                                ${l}
                            </button>
                        `).join('')}
                    </div>

                    <!-- Type Filter -->
                    <div style="display:flex; gap:6px; flex-wrap:wrap;" id="wl-type-filters">
                        ${['All','noun','verb','adjective','adverb','phrase'].map(t => `
                            <button onclick="wordListView.filterType('${t}')" id="wl-type-${t}"
                                class="wl-filter-btn ${t === 'All' ? 'active' : ''}"
                                style="padding:7px 14px; border-radius:20px; border:var(--border-glass); cursor:pointer; font-size:13px; background:${t === 'All' ? 'rgba(139,92,246,0.6)' : 'rgba(255,255,255,0.05)'}; color:${t === 'All' ? 'white' : 'var(--text-secondary)'}; transition:all 0.2s;">
                                ${t === 'All' ? 'All Types' : t.charAt(0).toUpperCase() + t.slice(1)}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div id="wl-stats" style="margin-top:12px; color:var(--text-muted); font-size:13px;">
                    Perfect your German vocabulary at your own pace.
                </div>
            </div>

            <!-- Word Table -->
            <div class="glass-card fade-in" style="animation-delay:0.2s; padding:0; overflow:hidden;">
                <div style="overflow-x:auto; width:100%;">
                    <table style="width:100%; min-width:650px; border-collapse:collapse;" id="wl-table">
                        <thead>
                        <tr style="background:rgba(255,255,255,0.04); border-bottom:var(--border-glass);">
                            <th style="padding:14px 20px; text-align:left; font-size:12px; color:var(--text-muted); font-weight:600; text-transform:uppercase; letter-spacing:0.05em; width:40px;">#</th>
                            <th style="padding:14px 20px; text-align:left; font-size:12px; color:var(--text-muted); font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">German</th>
                            <th style="padding:14px 20px; text-align:left; font-size:12px; color:var(--text-muted); font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Article</th>
                            <th style="padding:14px 20px; text-align:left; font-size:12px; color:var(--text-muted); font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">English Meaning</th>
                            <th style="padding:14px 20px; text-align:left; font-size:12px; color:var(--text-muted); font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Type</th>
                            <th style="padding:14px 20px; text-align:left; font-size:12px; color:var(--text-muted); font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Level</th>
                        </tr>
                    </thead>
                    <tbody id="wl-tbody"></tbody>
                </table>
                </div>
                <!-- Pagination -->
                <div id="wl-pagination" style="padding:16px 20px; display:flex; align-items:center; justify-content:space-between; border-top:var(--border-glass); flex-wrap:wrap; gap:12px;"></div>
            </div>

            <style>
                @media (max-width: 600px) {
                    .wl-toolbar > div { flex-direction: column !important; align-items: stretch !important; }
                    #wl-level-filters, #wl-type-filters { justify-content: flex-start; }
                }
                .wl-row:hover { background: rgba(255,255,255,0.04) !important; }
                .wl-row:hover .wl-de { color: var(--primary) !important; }
                .wl-lvl-badge {
                    display:inline-block; padding:3px 9px; border-radius:10px; font-size:11px; font-weight:700;
                }
                .wl-type-badge {
                    display:inline-block; padding:2px 8px; border-radius:8px; font-size:11px;
                    background:rgba(255,255,255,0.06); color:var(--text-secondary);
                }
                #wl-search:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }
            </style>
        `;
    }

    afterRender() {
        this.applyFilters();
    }

    onSearch(val) {
        this.searchTerm = val.toLowerCase();
        this.currentPage = 1;
        this.applyFilters();
    }

    filterLevel(level) {
        this.activeLevel = level;
        this.currentPage = 1;
        // Update button styles
        ['All','A1','A2','B1','B2','C1','C2'].forEach(l => {
            const b = document.getElementById('wl-lvl-' + l);
            if (b) {
                b.style.background = l === level ? 'var(--primary)' : 'rgba(255,255,255,0.05)';
                b.style.color = l === level ? 'white' : 'var(--text-secondary)';
            }
        });
        this.applyFilters();
    }

    filterType(type) {
        this.activeType = type;
        this.currentPage = 1;
        ['All','noun','verb','adjective','adverb','phrase'].forEach(t => {
            const b = document.getElementById('wl-type-' + t);
            if (b) {
                b.style.background = t === type ? 'rgba(139,92,246,0.6)' : 'rgba(255,255,255,0.05)';
                b.style.color = t === type ? 'white' : 'var(--text-secondary)';
            }
        });
        this.applyFilters();
    }

    applyFilters() {
        this.filtered = this.allWords.filter(w => {
            const levelMatch = this.activeLevel === 'All' || w.level === this.activeLevel;
            const typeMatch = this.activeType === 'All' || w.type === this.activeType;
            const searchMatch = !this.searchTerm ||
                w.de.toLowerCase().includes(this.searchTerm) ||
                w.en.toLowerCase().includes(this.searchTerm);
            return levelMatch && typeMatch && searchMatch;
        });

        // Update stats
        const stats = document.getElementById('wl-stats');
        if (stats) {
            stats.innerHTML = `Exploration and mastery in progress...`;
        }

        this.renderTable();
        this.renderPagination();
    }

    renderTable() {
        const tbody = document.getElementById('wl-tbody');
        if (!tbody) return;

        const start = (this.currentPage - 1) * this.perPage;
        const pageWords = this.filtered.slice(start, start + this.perPage);

        const levelColors = {
            A1: '#22c55e', A2: '#84cc16', B1: '#f59e0b', B2: '#f97316', C1: '#ef4444', C2: '#a855f7'
        };

        if (pageWords.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="padding:40px; text-align:center; color:var(--text-muted);">No words match your filter.</td></tr>`;
            return;
        }

        tbody.innerHTML = pageWords.map((w, i) => {
            const num = start + i + 1;
            const lvlColor = levelColors[w.level] || '#888';
            const articleDisplay = w.article ? `<span style="color:${w.article === 'der' ? '#60a5fa' : w.article === 'die' ? '#f472b6' : '#4ade80'}; font-weight:600;">${w.article}</span>` : '<span style="color:var(--text-muted);">—</span>';
            return `
                <tr class="wl-row" style="border-bottom:1px solid rgba(255,255,255,0.04); transition:background 0.15s; cursor:default;">
                    <td style="padding:12px 20px; color:var(--text-muted); font-size:12px;">${num}</td>
                    <td style="padding:12px 20px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span class="wl-de" style="font-size:15px; font-weight:600; color:var(--text-primary); transition:color 0.15s;">${w.de}</span>
                            <button onclick="playGermanAudio('${w.de.replace(/'/g, "\\'")}', event)" style="background: none; border: none; color: var(--accent-gold); cursor: pointer; font-size: 16px; display: flex; align-items: center; opacity: 0.8; transition: opacity 0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'" title="Listen to pronunciation">
                                <i class='bx bx-volume-full'></i>
                            </button>
                        </div>
                    </td>
                    <td style="padding:12px 20px; font-size:14px;">${articleDisplay}</td>
                    <td style="padding:12px 20px; color:var(--text-secondary); font-size:14px;">${w.en}</td>
                    <td style="padding:12px 20px;"><span class="wl-type-badge">${w.type || '—'}</span></td>
                    <td style="padding:12px 20px;">
                        <span class="wl-lvl-badge" style="background:${lvlColor}22; color:${lvlColor};">${w.level}</span>
                    </td>
                </tr>
            `;
        }).join('');
    }

    renderPagination() {
        const pag = document.getElementById('wl-pagination');
        if (!pag) return;

        const totalPages = Math.ceil(this.filtered.length / this.perPage);
        if (totalPages <= 1) { pag.innerHTML = ''; return; }

        const start = (this.currentPage - 1) * this.perPage + 1;
        const end = Math.min(this.currentPage * this.perPage, this.filtered.length);

        // Page numbers to show
        let pages = [];
        if (totalPages <= 7) {
            pages = Array.from({length: totalPages}, (_, i) => i + 1);
        } else {
            pages = [1, 2];
            if (this.currentPage > 3) pages.push('...');
            for (let p = Math.max(3, this.currentPage - 1); p <= Math.min(totalPages - 2, this.currentPage + 1); p++) pages.push(p);
            if (this.currentPage < totalPages - 2) pages.push('...');
            pages.push(totalPages - 1, totalPages);
        }

        pag.innerHTML = `
            <span style="color:var(--text-muted); font-size:13px;">Navigation</span>
            <div style="display:flex; gap:6px; align-items:center;">
                <button onclick="wordListView.goPage(${this.currentPage - 1})" ${this.currentPage === 1 ? 'disabled' : ''}
                    style="padding:6px 12px; border-radius:8px; border:var(--border-glass); background:rgba(255,255,255,0.05); color:var(--text-secondary); cursor:pointer; ${this.currentPage === 1 ? 'opacity:0.4;cursor:not-allowed;' : ''}">
                    ‹ Prev
                </button>
                ${pages.map(p => p === '...' ? 
                    `<span style="color:var(--text-muted); padding:0 4px;">…</span>` :
                    `<button onclick="wordListView.goPage(${p})"
                        style="padding:6px 12px; border-radius:8px; border:var(--border-glass); cursor:pointer; background:${p === this.currentPage ? 'var(--primary)' : 'rgba(255,255,255,0.05)'}; color:${p === this.currentPage ? 'white' : 'var(--text-secondary)'};">
                        ${p}
                    </button>`
                ).join('')}
                <button onclick="wordListView.goPage(${this.currentPage + 1})" ${this.currentPage === totalPages ? 'disabled' : ''}
                    style="padding:6px 12px; border-radius:8px; border:var(--border-glass); background:rgba(255,255,255,0.05); color:var(--text-secondary); cursor:pointer; ${this.currentPage === totalPages ? 'opacity:0.4;cursor:not-allowed;' : ''}">
                    Next ›
                </button>
            </div>
        `;
    }

    goPage(p) {
        const totalPages = Math.ceil(this.filtered.length / this.perPage);
        if (p < 1 || p > totalPages) return;
        this.currentPage = p;
        this.renderTable();
        this.renderPagination();
        document.getElementById('wl-table')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

const wordListView = new WordListView();
