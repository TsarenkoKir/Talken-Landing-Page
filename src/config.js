// Configuration file for all links and URLs
const CONFIG = {
    // Internal navigation links (anchors)
    navigation: {
        blog: '#blog',
        resources: '#resources',
        help: './support.html',
        features: '#features',
        howItWorks: '#how-it-works',
        ecosystem: '#ecosystem',
        platforms: '#platforms',
        download: '#download',
        learnMore: '#learn-more',
        comingSoon: '#coming-soon'
    },

    // External social media links
    social: {
        discord: 'https://discord.com/invite/URutACbPzQ',
        x: 'https://x.com/0xTalken',
        twitter: 'https://x.com/0xTalken'
    },

    // Ecosystem links
    ecosystem: {
        quaiNetwork: 'https://qu.ai/',
        pelagusWallet: 'https://pelaguswallet.io/',
        kipperMoney: 'https://kipper.money'
    },

    // Resource links
    resources: {
        blog: 'https://medium.com/@talken.me',
        privacy: 'https://talken.com/privacy',
        disclaimer: 'public/disclaimer.pdf'
    },

    // Asset paths
    assets: {
        logo: 'public/Talken_logo.svg',
        macMockup: 'public/Mac_Talken.svg',
        pfp: 'public/PFP_X.png',
        talkenLogo: 'public/Talken.png'
    },

    // PDF documents
    documents: {
        disclaimer: 'assets/Talken — Disclaimer.pdf',
        privacy: 'assets/Talken — Privacy Policy.pdf'
    },

    // Company information
    company: {
        name: 'Join Discord and access Talken App',
        tagline: 'Privacy the way it should be.',
        copyright: `${new Date().getFullYear()} Talken. All rights reserved.`,
        email: 'talken.me@protonmail.com',
        support: 'talken.me@protonmail.com'
    },

    // Feature descriptions
    features: {
        encryption: 'AES-256 Encryption',
        security: 'Blockchain Secured'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG };
} else {
    // For browser usage
    window.CONFIG = CONFIG;
    console.log('CONFIG loaded:', CONFIG);
    console.log('Help link:', CONFIG.navigation.help);
}
