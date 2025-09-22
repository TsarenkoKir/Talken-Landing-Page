// Header Component
function createHeader() {
    console.log('Creating header, CONFIG:', typeof CONFIG !== 'undefined' ? CONFIG : 'undefined');
    console.log('Help link:', typeof CONFIG !== 'undefined' ? CONFIG.navigation.help : 'undefined');
    return `
        <header class="header">
            <nav class="nav">
                <div class="nav-brand">
                    <a href="index.html" class="logo-link" onclick="handleLogoClick(event)">
                        <img src="${CONFIG.assets.logo}" alt="${CONFIG.company.name}" class="logo-image">
                    </a>
                </div>
                <div class="nav-menu">
                    <div class="nav-dropdown">
                        <a href="#" class="nav-link dropdown-toggle">
                            Resources <i class="fas fa-chevron-down"></i>
                        </a>
                        <div class="dropdown-menu">
                            <a href="${CONFIG.resources.blog}" class="dropdown-item" target="_blank" rel="noopener noreferrer">
                                <img src="public/medium-icon.png" alt="Medium" class="dropdown-icon-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
                                <i class="fab fa-medium" style="display: none;"></i> Blog
                            </a>
                            <a href="${CONFIG.social.discord}" class="dropdown-item" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-discord"></i> Discord
                            </a>
                            <a href="${CONFIG.social.x}" class="dropdown-item" target="_blank" rel="noopener noreferrer">
                                <svg class="dropdown-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                                X / Twitter
                            </a>
                        </div>
                    </div>
                    <div class="nav-dropdown">
                        <a href="#" class="nav-link dropdown-toggle">
                            Ecosystem <i class="fas fa-chevron-down"></i>
                        </a>
                        <div class="dropdown-menu">
                            <a href="${CONFIG.ecosystem.quaiNetwork}" class="dropdown-item" target="_blank" rel="noopener noreferrer">
                                <img src="public/quai-icon.png" alt="Quai Network" class="dropdown-icon-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
                                <i class="fas fa-network-wired" style="display: none;"></i> Quai Network
                            </a>
                            <a href="${CONFIG.ecosystem.pelagusWallet}" class="dropdown-item" target="_blank" rel="noopener noreferrer">
                                <img src="public/Pelagus.png" alt="Pelagus Wallet" class="dropdown-icon-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
                                <i class="fas fa-wallet" style="display: none;"></i> Pelagus Wallet
                            </a>
                            <a href="${CONFIG.ecosystem.kipperMoney}" class="dropdown-item" target="_blank" rel="noopener noreferrer">
                                <img src="public/Kipper.png" alt="Kipper Money" class="dropdown-icon-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
                                <i class="fas fa-coins" style="display: none;"></i> Kipper Money
                            </a>
                        </div>
                    </div>
                    <a href="${CONFIG.navigation.help}" class="nav-link" onclick="console.log('Support Us clicked, href:', this.href); return true;">Support Us</a>
                </div>
                <div class="nav-actions">
                    <a href="${CONFIG.social.discord}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">${CONFIG.company.name}</a>
                </div>
            </nav>
        </header>
    `;
}

// Handle logo click - redirect to home if not already there
function handleLogoClick(event) {
    const currentPage = window.location.pathname;
    const isHomePage = currentPage === '/' || currentPage === '/index.html' || currentPage.endsWith('index.html');
    
    if (!isHomePage) {
        // Allow normal navigation to home page
        return true;
    } else {
        // If already on home page, prevent navigation and scroll to top
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        return false;
    }
}

// Export for use in components.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createHeader, handleLogoClick };
} else {
    // Make function available globally
    window.handleLogoClick = handleLogoClick;
}
