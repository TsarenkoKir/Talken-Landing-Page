// Support Page JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Support page loaded');
    
    // Initialize header and footer first
    initHeaderAndFooter();
    
    // Initialize support page functionality
    initCopyButtons();
    initBackButton();
});

// Initialize header and footer
function initHeaderAndFooter() {
    // Load header
    if (typeof createHeader === 'function') {
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            headerContainer.innerHTML = createHeader();
            console.log('Header loaded on support page');
            
            // Initialize header functionality after it's loaded
            setTimeout(() => {
                initHeaderFunctionality();
            }, 100);
        }
    }
    
    // Load footer
    if (typeof createFooter === 'function') {
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = createFooter();
            console.log('Footer loaded on support page');
        }
    }
}

// Initialize header functionality (mobile menu, etc.)
function initHeaderFunctionality() {
    // Add mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Add dropdown functionality
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.nextElementSibling;
            if (dropdown) {
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            const activeDropdowns = document.querySelectorAll('.dropdown-menu.active');
            activeDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Add header scroll effect
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
}

// Initialize copy buttons functionality
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const addressId = this.getAttribute('data-address');
            const networkName = this.getAttribute('data-network');
            const addressElement = document.getElementById(addressId);
            
            if (addressElement) {
                const address = addressElement.textContent.trim();
                copyToClipboard(address, networkName, this);
            }
        });
    });
}

// Copy text to clipboard and show feedback
function copyToClipboard(text, networkName, button) {
    // Use modern clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showCopySuccess(button, networkName);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            fallbackCopyToClipboard(text, networkName, button);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyToClipboard(text, networkName, button);
    }
}

// Fallback copy method for older browsers
function fallbackCopyToClipboard(text, networkName, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccess(button, networkName);
        } else {
            showCopyError(button, networkName);
        }
    } catch (err) {
        console.error('Fallback copy failed: ', err);
        showCopyError(button, networkName);
    } finally {
        document.body.removeChild(textArea);
    }
}

// Show copy success feedback
function showCopySuccess(button, networkName) {
    // Add copied class to button
    button.classList.add('copied');
    
    // Change icon to checkmark
    const icon = button.querySelector('i');
    if (icon) {
        icon.className = 'fas fa-check';
    }
    
    // Address copied successfully
    
    // Reset button after 2 seconds
    setTimeout(() => {
        button.classList.remove('copied');
        if (icon) {
            icon.className = 'fas fa-copy';
        }
    }, 2000);
}

// Show copy error feedback
function showCopyError(button, networkName) {
    console.error(`Failed to copy ${networkName} address`);
}


// Initialize back button functionality
function initBackButton() {
    const backButton = document.querySelector('.back-btn');
    if (backButton) {
        backButton.addEventListener('click', goBack);
    }
}

// Go back to previous page or home
function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
    }
}

// Smooth scroll to top when page loads
window.addEventListener('load', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add loading animation for better UX
function showLoadingState() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loading-overlay';
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(15, 23, 42, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        backdrop-filter: blur(4px);
    `;
    
    const loadingSpinner = document.createElement('div');
    loadingSpinner.style.cssText = `
        width: 40px;
        height: 40px;
        border: 3px solid var(--border-color);
        border-top: 3px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;
    
    // Add spin animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    loadingOverlay.appendChild(loadingSpinner);
    document.body.appendChild(loadingOverlay);
    
    return loadingOverlay;
}

// Remove loading state
function hideLoadingState() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.remove();
    }
}

// Add click animation to buttons
function addButtonAnimations() {
    const buttons = document.querySelectorAll('.copy-btn, .contact-btn, .back-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addButtonAnimations();
});

// Add keyboard accessibility
function addKeyboardAccessibility() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Add tabindex for keyboard navigation
        button.setAttribute('tabindex', '0');
    });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', function() {
    addKeyboardAccessibility();
});

// Add focus management for better UX
function addFocusManagement() {
    const focusableElements = document.querySelectorAll('button, a, input, textarea, [tabindex]:not([tabindex="-1"])');
    
    // Add focus styles
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

// Initialize focus management
document.addEventListener('DOMContentLoaded', function() {
    addFocusManagement();
});

// Export functions for global use
window.goBack = goBack;
window.copyToClipboard = copyToClipboard;
