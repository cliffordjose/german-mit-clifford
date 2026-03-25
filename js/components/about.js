class AboutView {
    constructor() {}

    render() {
        return `
            <style>
                .about-container { max-width: 1200px; margin: 0 auto; }
                .founder-name { font-size: 42px; margin-bottom: 8px; font-family: var(--font-heading); font-weight: 800; letter-spacing: -1px; }
                .founder-title { font-size: 16px; color: var(--accent-gold); margin-bottom: 24px; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; }
                .founder-bio { font-size: 17px; color: var(--text-secondary); line-height: 1.8; margin-bottom: 24px; }
                .founder-photo-wrapper { position: relative; width: 220px; height: 220px; flex-shrink: 0; }
                .founder-photo { width: 100%; height: 100%; border-radius: 24px; background: #12121c; overflow: hidden; display: flex; justify-content: center; align-items: center; border: 1px solid rgba(255,255,255,0.1); transition: all 0.5s var(--transition-main); }
                .about-card:hover .founder-photo { transform: scale(1.02); border-color: var(--accent-gold); }
                
                .about-card { display: flex; flex-direction: row; gap: 48px; align-items: center; margin-bottom: 48px; padding: 48px !important; overflow: hidden; position: relative; text-align: left; }
                
                .three-pillars-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
                .pillar-card { text-align: left; padding: 32px !important; height: 100%; }
                .pillar-icon { font-size: 40px; margin-bottom: 20px; background: var(--gradient-brand); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

                @media (max-width: 900px) {
                    .about-card { flex-direction: column; text-align: center; padding: 40px 24px !important; gap: 32px; }
                    .founder-name { font-size: 32px; }
                    .founder-photo-wrapper { width: 180px; height: 180px; }
                    .three-pillars-grid { grid-template-columns: 1fr; }
                    .pillar-card { text-align: center; }
                }

                @media (max-width: 600px) {
                    .founder-name { font-size: 22px; line-height: 1.2; word-break: break-word; }
                    .founder-title { font-size: 13px; letter-spacing: 2px; margin-bottom: 16px; }
                    .founder-bio { font-size: 15px; line-height: 1.6; }
                    .format-dedication { padding: 32px 20px !important; }
                }
                @media (max-width: 400px) {
                    .founder-name { font-size: 19px; }
                    .founder-title { font-size: 12px; letter-spacing: 1.5px; }
                }
            </style>
            <div class="page-header fade-in">
                <h1 class="page-title" style="font-size: clamp(32px, 5vw, 48px);">About Us</h1>
                <p class="page-desc" style="color: var(--accent-gold); font-weight: 600;">The vision and heart behind German mit Clifford application</p>
            </div>

            <div class="about-container fade-in" style="animation-delay: 0.1s;">
                
                <!-- Founder Spotlight -->
                <div class="glass-card about-card premium-hover">
                    <div class="founder-photo-wrapper">
                        </div>
                    </div>
                    
                    <div style="flex: 1;">
                        <h2 class="founder-name">Clifford Jose Nediyaparambil</h2>
                        <h3 class="founder-title">Founder & Lead Architect</h3>
                        
                        <p class="founder-bio">
                            Clifford built his linguistic foundation at the Goethe Zentrum in Trivandrum (A1-B2) and mastered C1 at the Mumbai Goethe Institute. His professional transition into <strong>high-level technical architecture</strong> has shaped a disciplined, profound approach to systemic language engineering and structural design.
                        </p>
                        <p class="founder-bio">
                            By architecting a <strong>neural feedback loop</strong> that integrates real-time AI inference with a high-performance gamification engine, he created a low-latency environment for authentic linguistic acquisition. This procedural interface is designed to achieve maximum cerebral retention of the 10,000-word CEFR spectrum through algorithmic spaced repetition and immersive UI/UX protocols.
                        </p>
                        <div style="margin-top: 32px;">
                            <a href="https://cliffordjose.github.io/clifford-website/" target="_blank" class="btn-secondary" style="border-radius: 100px; padding: 14px 28px; font-weight: 700;">
                                <i class='bx bxl-github' style="font-size: 18px;"></i> More about the creator
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Dedication -->
                <div class="glass-card format-dedication premium-hover" style="text-align: center; padding: 60px 40px; margin-bottom: 48px; background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,51,102,0.03) 100%); border: 1px solid rgba(255,51,102,0.1); position: relative; overflow: hidden;">
                    <i class='bx bxs-heart' style="position: absolute; right: -30px; bottom: -30px; font-size: 200px; color: rgba(255, 51, 102, 0.05); pointer-events: none;"></i>
                    <h3 style="font-size: 28px; color: var(--text-primary); margin-bottom: 8px; font-family: var(--font-heading); font-weight: 800;">In Loving Memory</h3>
                    <h4 style="font-size: 16px; color: var(--accent-red); margin-bottom: 32px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700;">Abhishek Nandhakumar</h4>
                    <p style="font-size: 17px; color: var(--text-secondary); line-height: 1.8; max-width: 800px; margin: 0 auto; font-style: italic; opacity: 0.9;">
                        "German mit Clifford is dedicated to the memory of my brother and dearest friend, Abhishek Nandhakumar. He had a profound dream to master the German language and build a life in Germany—a dream cut tragically short. This application lives on as a tribute to his legacy, opening doors for others to achieve the goals he once held so dear through advanced technological tutelage."
                    </p>
                </div>

                <!-- Three Pillars -->
                <div class="three-pillars-grid">
                    <div class="glass-card pillar-card premium-hover">
                        <div class="pillar-icon"><i class='bx bx-rocket'></i></div>
                        <h3 style="font-size: 20px; margin-bottom: 12px; font-weight: 700;">Strategic Roadmap</h3>
                        <p style="color: var(--text-secondary); font-size: 15px; line-height: 1.6;">Democratizing high-level linguistic protocols through a procedurally generated 10,000-word trajectory for optimized cognitive mastery.</p>
                    </div>

                    <div class="glass-card pillar-card premium-hover">
                        <div class="pillar-icon"><i class='bx bx-brain'></i></div>
                        <h3 style="font-size: 20px; margin-bottom: 12px; font-weight: 700;">Neural Informatics</h3>
                        <p style="color: var(--text-secondary); font-size: 15px; line-height: 1.6;">Leveraging deep-learning feedback loops and personalized algorithmic repetition to guarantee high-fidelity long-term cerebral retention.</p>
                    </div>

                    <div class="glass-card pillar-card premium-hover">
                        <div class="pillar-icon"><i class='bx bx-code-alt'></i></div>
                        <h3 style="font-size: 20px; margin-bottom: 12px; font-weight: 700;">Performance Core</h3>
                        <p style="color: var(--text-secondary); font-size: 15px; line-height: 1.6;">Developed using a low-overhead, vanilla architectural stack to deliver a premium, zero-latency interface with maximum computational efficiency.</p>
                    </div>
                </div>

            </div>
        `;
    }
}
