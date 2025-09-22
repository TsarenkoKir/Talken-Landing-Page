// Main JavaScript for Talken Landing Page
// This file handles additional functionality not covered by components.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded in script.js!');
    

    
    // Create and initialize component loader
    if (typeof ComponentLoader !== 'undefined') {
        console.log('ComponentLoader found, initializing...');
        window.componentLoader = new ComponentLoader();
        window.componentLoader.loadAllComponents().then(() => {
            console.log('Components loaded, initializing additional features...');
            initializeAdditionalFeatures();
        }).catch(error => {
            console.error('Error loading components:', error);
            initializeAdditionalFeatures();
        });
    } else {
        console.log('ComponentLoader not found, using fallback...');
        // Fallback if component loader is not available
        initializeAdditionalFeatures();
    }
});

function initializeAdditionalFeatures() {
    // Header background change on scroll
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(15, 23, 42, 0.9)';
                header.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.3)';
            } else {
                header.style.background = 'rgba(15, 23, 42, 0.75)';
                header.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.2)';
            }
        });
    }

    // Mac image animation
    const macImage = document.querySelector('.mac-image');
    if (macImage) {
        macImage.style.opacity = '0';
        macImage.style.transform = 'translateX(50px) scale(0.9)';
        macImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            macImage.style.opacity = '1';
            macImage.style.transform = 'translateX(0) scale(1)';
        }, 500);
    }

    // Hero text animation
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        const elements = heroText.querySelectorAll('h1, p, .hero-actions, .security-info');
        
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 200 * (index + 1));
        });
    }

    // Add hover effects for buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click ripple effect for buttons
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.feature-card, .step, .ecosystem-item, .blog-card, .resource-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    console.log('Additional features initialized!');
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add CSS for loading animation
    const style = document.createElement('style');
    style.textContent = `
        body:not(.loaded) {
            opacity: 0;
        }
        
        body.loaded {
            opacity: 1;
            transition: opacity 0.5s ease;
        }
        
        .loading-spinner {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            z-index: 9999;
        }
        
        @keyframes spin {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        body.loaded .loading-spinner {
            display: none;
        }
    `;
    document.head.appendChild(style);
    
    // Remove loading spinner
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
        spinner.remove();
    }
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: var(--primary-color);
    z-index: 1001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', function() {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
});
