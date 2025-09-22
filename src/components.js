// Component Loader for Talken Landing Page
console.log('ComponentLoader class defined!');

class ComponentLoader {
    constructor() {
        console.log('ComponentLoader constructor called!');
        this.components = {};
        this.loadedComponents = new Set();
        this.initialized = false;
        this.loading = false;
    }

    // Load a component from file
    async loadComponent(name, selector) {
        if (this.loadedComponents.has(name)) {
            console.log(`Component ${name} already loaded, skipping...`);
            return;
        }
        
        console.log(`Loading component: ${name}`);

        try {
            let html;
            
            // Use JavaScript-generated content for all components
            switch(name) {
                case 'header':
                    html = this.createHeader();
                    break;
                case 'hero':
                    html = this.createHeroContent();
                    break;
                case 'features':
                    html = this.createFeatures();
                    break;
                case 'how-it-works':
                    html = this.createHowItWorks();
                    break;
                case 'ecosystem':
                    html = this.createEcosystem();
                    break;
                // case 'blog':
                //     html = this.createBlog();
                //     break;
                case 'platforms':
                    html = this.createPlatforms();
                    break;

                case 'cta':
                    html = this.createCTA();
                    break;
                case 'footer':
                    html = this.createFooter();
                    break;
                default:
                    throw new Error(`Unknown component: ${name}`);
            }
            
            this.components[name] = html;
            
            // Insert component into DOM
            if (selector) {
                const container = document.querySelector(selector);
                if (container) {
                    // Clear container first to prevent duplication
                    container.innerHTML = '';
                    container.innerHTML = html;
                    this.loadedComponents.add(name);
                    console.log(`Component ${name} loaded successfully into ${selector}`);
                } else {
                    console.error(`Container not found for ${name}: ${selector}`);
                }
            }
            
            return html;
        } catch (error) {
            console.error(`Error loading component ${name}:`, error);
            return null;
        }
    }

    // Load all components
    async loadAllComponents() {
        if (this.loading) {
            console.log('Components already loading, skipping...');
            return;
        }
        
        this.loading = true;
        console.log('Starting to load all components...');
        
        const componentMap = {
            'header': '#header-container',
            'hero': '#hero-container',
            'how-it-works': '#how-it-works-container',
            'features': '#features-container',
            'platforms': '#platforms-container',
            'ecosystem': '#ecosystem-container',
            // 'blog': '#blog-container',
            'cta': '#cta-container',
            'footer': '#footer-container'
        };

        const loadPromises = Object.entries(componentMap).map(([name, selector]) => 
            this.loadComponent(name, selector)
        );

        await Promise.all(loadPromises);
        
        this.loading = false;
        console.log('All components loaded, initializing...');
        
        // Initialize components after loading
        this.initializeComponents();
    }

    // Create header content dynamically
    createHeader() {
        if (typeof createHeader === 'function') {
            return createHeader();
        }
        return '<div>Header loading...</div>';
    }

    // Create hero content dynamically
    createHeroContent() {
        if (typeof createHero === 'function') {
            return createHero();
        }
        return '<div>Hero loading...</div>';
    }

    // Create features content dynamically
    createFeatures() {
        return `
            <section class="features" id="features">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Why Talken?</h2>
                    </div>
                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <h3>End-to-End Encryption</h3>
                            <p>Your messages are encrypted with AES-256 and can only be read by you and your intended recipient.</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-link"></i>
                            </div>
                            <h3>Blockchain Security</h3>
                            <p>All messages are encrypted and stored on-chain, guaranteeing privacy and security.</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-globe"></i>
                            </div>
                            <h3>Decentralized</h3>
                            <p>Built on Quai Network, Talken is truly decentralized and censorship-resistant.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Create how-it-works content dynamically
    createHowItWorks() {
        return `
            <section class="how-it-works" id="how-it-works">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Start Using Talken in 3 Steps</h2>
                    </div>
                    <div class="steps">
                        <div class="step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h3>Connect</h3>
                                <p>Set up your <a href="https://pelaguswallet.io/" target="_blank" rel="noopener noreferrer" class="step-link">Pelagus Wallet</a>, get testnet $QUAI from the <a href="https://orchard.faucet.quai.network/" target="_blank" rel="noopener noreferrer" class="step-link">faucet</a>, and connect to Talken.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h3>Add Friends</h3>
                                <p>Invite a friend, show them how to protect their chat privacy, and send a friend request via Talken.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h3>Chat Securely</h3>
                                <p>Send and receive encrypted messages — only you and your friend can decrypt them.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Create ecosystem content dynamically
    createEcosystem() {
        return `
            <section class="ecosystem" id="ecosystem">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Ecosystem</h2>

                    </div>
                    <div class="ecosystem-grid">
                        <div class="ecosystem-item">
                            <div class="ecosystem-icon">
                                <img src="public/quai-icon.png" alt="Quai Network" class="ecosystem-icon-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                <i class="fas fa-network-wired" style="display: none;"></i>
                            </div>
                            <h3>Quai Network</h3>
                            <p>High-performance blockchain infrastructure for decentralized applications.</p>
                        </div>
                        <div class="ecosystem-item">
                            <div class="ecosystem-icon">
                                <img src="public/Pelagus.png" alt="Pelagus Wallet" class="ecosystem-icon-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                <i class="fas fa-users" style="display: none;"></i>
                            </div>
                            <h3>Pelagus Wallet</h3>
                            <p>Pelagus Wallet is your secure gateway to Talken — generating the private keys that keep your chats encrypted and yours alone.</p>
                        </div>
                        <div class="ecosystem-item">
                            <div class="ecosystem-icon">
                                <img src="public/Kipper.png" alt="Kipper Money" class="ecosystem-icon-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                <i class="fas fa-coins" style="display: none;"></i>
                            </div>
                            <h3>Kipper Money</h3>
                            <p>Kipper allows creators and audiences to tip in crypto like SOL, QUAI, and USDC directly on X with more platforms coming soon.</p>
                        </div>

                    </div>
                </div>
            </section>
        `;
    }

    // Create blog content dynamically
    // createBlog() {
    //     return `
    //         <section class="blog" id="blog">
    //             <div class="container">
    //                 <div class="section-header">
    //                     <h2 class="section-title">Latest Updates</h2>
    //                 </div>
    //                 <div class="blog-grid">
    //                     <article class="blog-card">
    //                         <div class="blog-image">
    //                             <i class="fas fa-shield-alt"></i>
    //                         </div>
    //                         <div class="blog-content">
    //                             <div class="blog-meta">
    //                                 <span class="blog-date">August 27, 2024</span>
    //                                 <span class="blog-category">Security</span>
    //                             </div>
    //                             <h3>End-to-End Encryption Implementation</h3>
    //                             <p>Learn about the advanced encryption protocols that keep your messages secure.</p>
    //                             <a href="#" class="blog-link">Read More</a>
    //                         </div>
    //                     </article>
    //                     <article class="blog-card">
    //                         <div class="blog-image">
    //                             <i class="fas fa-link"></i>
    //                         </div>
    //                         <div class="blog-content">
    //                             <div class="blog-meta">
    //                                 <span class="blog-date">August 25, 2024</span>
    //                                 <span class="blog-category">Technology</span>
    //                             </div>
    //                             <h3>Blockchain Integration Progress</h3>
    //                             <p>Updates on our blockchain integration and zero-knowledge proof implementation.</p>
    //                             <a href="#" class="blog-link">Read More</a>
    //                         </div>
    //                     </article>
    //                 </div>
    //             </div>
    //         </section>
    //     `;
    // }







    // Create platforms content dynamically
    createPlatforms() {
        return `
            <section class="platforms" id="platforms">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Available across all your devices</h2>
                    </div>
                    <div class="platforms-grid">
                        <div class="platform-card">
                            <div class="platform-icon">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <h3>iOS / Android</h3>
                            <p class="platform-status dev">Development in Progress</p>
                            <p class="platform-description">Native mobile apps for iPhone and Android devices</p>
                        </div>
                        <div class="platform-card">
                            <div class="platform-icon">
                                <i class="fas fa-desktop"></i>
                            </div>
                            <h3>PC</h3>
                            <p class="platform-status dev">Development in Progress</p>
                            <p class="platform-description">Desktop application for Windows, macOS, and Linux</p>
                        </div>
                        <div class="platform-card">
                            <div class="platform-icon">
                                <i class="fas fa-globe"></i>
                            </div>
                            <h3>Web App</h3>
                            <p class="platform-status live">Live for Whitelisted</p>
                            <p class="platform-description">Access Talken from any browser, no installation required</p>
                            <a href="${CONFIG.social.discord}" class="btn btn-primary btn-small" target="_blank" rel="noopener noreferrer">
                                Join Discord and try Web Version
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }



    // Create CTA content dynamically
    createCTA() {
        return `
            <section class="cta" id="cta">
                <div class="container">
                    <div class="cta-content">
                        <h2>Ready to Experience Secure Communication?</h2>
                        <p>Join the future of decentralized, encrypted messaging.</p>
                        <div class="cta-actions">
                            <a href="${CONFIG.social.discord}" class="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
                                <svg class="btn-logo discord-logo" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                                </svg>
                                Discord
                            </a>
                            <a href="${CONFIG.social.x}" class="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
                                <svg class="btn-logo x-logo" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                                X / Twitter
                            </a>
                            <a href="${CONFIG.resources.blog}" class="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
                                <svg class="btn-logo blog-logo" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19.09H5V4.91h14v14.18zM6 15h12v2H6zm0-4h12v2H6zm0-4h12v2H6z"/>
                                </svg>
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Create footer content dynamically
    createFooter() {
        if (typeof createFooter === 'function') {
            return createFooter();
        }
        return '<div>Footer loading...</div>';
    }

    // Initialize components after loading
    initializeComponents() {
        // Check if already initialized
        if (this.initialized) {
            console.log('Components already initialized, skipping...');
            return;
        }
        
        // Add mobile menu toggle functionality
        this.initMobileMenu();
        
        // Add smooth scrolling for existing sections
        this.initSmoothScrolling();
        
        // Add scroll animations
        this.initScrollAnimations();
        
        // Mark as initialized
        this.initialized = true;
        console.log('Components initialized successfully!');
    }

    // Initialize mobile menu
    initMobileMenu() {
        // Mobile menu functionality can be added here
        console.log('Mobile menu initialized');
    }

    // Initialize smooth scrolling
    initSmoothScrolling() {
        // Smooth scrolling functionality can be added here
        console.log('Smooth scrolling initialized');
    }

    // Initialize scroll animations
    initScrollAnimations() {
        // Scroll animations can be added here
        console.log('Scroll animations initialized');
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ComponentLoader };
}
