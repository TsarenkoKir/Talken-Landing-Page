// Hero Component
function createHero() {
    return `
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="hero-title">
                            Your keys, Your chats. <span class="glow-text"></span>
                        </h1>
                        <p class="hero-subtitle">
                            ${CONFIG.company.name} is decentralized, end-to-end encrypted messenger designed to protect your personal and private data.
                        </p>
                        <div class="hero-actions">
                            <a href="${CONFIG.social.discord}" class="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-shield-alt"></i>
                                Join Discord
                            </a>
                            <a href="${CONFIG.social.x}" class="btn btn-secondary btn-large" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-code"></i>
                                Follow on X
                            </a>
                        </div>

                    </div>
                    <div class="hero-visual">
                        <div class="mac-mockup">
                            <img src="${CONFIG.assets.macMockup}" alt="${CONFIG.company.name} App Interface" class="mac-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <div class="mac-fallback" style="display: none; text-align: center; padding: 2rem; color: var(--text-secondary);">
                                <i class="fas fa-desktop" style="font-size: 4rem; margin-bottom: 1rem; color: var(--primary-color);"></i>
                                <h3>${CONFIG.company.name} App</h3>
                                <p>Secure End-to-End Encrypted Chat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Export for use in components.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createHero };
}
