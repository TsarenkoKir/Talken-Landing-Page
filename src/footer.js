// Footer Component
function createFooter() {
    return `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-brand">
                        <div class="logo">
                            <img src="${CONFIG.assets.logo}" alt="${CONFIG.company.name}" style="height: 32px; width: auto;">
                        </div>
                        <p>${CONFIG.company.tagline}</p>
                    </div>
                    <div class="footer-section">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="${CONFIG.navigation.howItWorks}">How It Works</a></li>
                            <li><a href="${CONFIG.navigation.features}">Features</a></li>
                            <li><a href="${CONFIG.navigation.platforms}">Platforms</a></li>
                            <li><a href="${CONFIG.navigation.ecosystem}">Ecosystem</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="${CONFIG.documents.disclaimer}" target="_blank" rel="noopener noreferrer">Disclaimer</a></li>
                            <li><a href="${CONFIG.documents.privacy}" target="_blank" rel="noopener noreferrer">Privacy</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Community</h4>
                        <ul>
                            <li><a href="${CONFIG.social.discord}" target="_blank" rel="noopener noreferrer">Discord</a></li>
                            <li><a href="${CONFIG.social.x}" target="_blank" rel="noopener noreferrer">X / Twitter</a></li>
                            <li><a href="${CONFIG.resources.blog}" target="_blank" rel="noopener noreferrer">Blog</a></li>
                            <li><a href="mailto:${CONFIG.company.support}">Support</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p style="text-align: center; width: 100%;">&copy; ${new Date().getFullYear()} Talken. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
}

// Export for use in components.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createFooter };
}
