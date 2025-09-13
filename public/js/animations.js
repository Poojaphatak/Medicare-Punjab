// Advanced Animation Controller for MediCare Plus
class AnimationController {
    constructor() {
        this.animatedElements = new Set();
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.initializeCounterAnimations();
        this.setupParallaxEffects();
        this.initializeFloatingElements();
        this.setupHoverAnimations();
    }
    
    // Intersection Observer for scroll-triggered animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: [0.1, 0.3, 0.7],
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => this.handleIntersection(entry));
        }, observerOptions);
        
        // Observe all animatable elements
        this.observeElements();
    }
    
    observeElements() {
        const selectors = [
            '.hero-content',
            '.hero-image',
            '.feature-card',
            '.service-node',
            '.stat-item',
            '.section-title',
            '.services-diagram',
            '.central-hub'
        ];
        
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                this.observer.observe(element);
            });
        });
    }
    
    handleIntersection(entry) {
        const { target, isIntersecting, intersectionRatio } = entry;
        
        if (isIntersecting && !this.animatedElements.has(target)) {
            this.triggerAnimation(target, intersectionRatio);
            this.animatedElements.add(target);
        }
    }
    
    triggerAnimation(element, ratio) {
        const animationType = this.getAnimationType(element);
        
        switch (animationType) {
            case 'slideUp':
                this.animateSlideUp(element);
                break;
            case 'slideInLeft':
                this.animateSlideInLeft(element);
                break;
            case 'slideInRight':
                this.animateSlideInRight(element);
                break;
            case 'scaleIn':
                this.animateScaleIn(element);
                break;
            case 'fadeIn':
                this.animateFadeIn(element);
                break;
            case 'staggerIn':
                this.animateStaggerIn(element);
                break;
            default:
                this.animateFadeIn(element);
        }
    }
    
    getAnimationType(element) {
        if (element.classList.contains('hero-content')) return 'slideInLeft';
        if (element.classList.contains('hero-image')) return 'slideInRight';
        if (element.classList.contains('feature-card')) return 'staggerIn';
        if (element.classList.contains('service-node')) return 'scaleIn';
        if (element.classList.contains('stat-item')) return 'slideUp';
        if (element.classList.contains('central-hub')) return 'scaleIn';
        return 'fadeIn';
    }
    
    // Animation Methods
    animateSlideUp(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }
    
    animateSlideInLeft(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-50px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }
    
    animateSlideInRight(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(50px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }
    
    animateScaleIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        });
    }
    
    animateFadeIn(element) {
        element.style.opacity = '0';
        element.style.transition = 'opacity 0.6s ease';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
        });
    }
    
    animateStaggerIn(element) {
        const cards = document.querySelectorAll('.feature-card');
        const index = Array.from(cards).indexOf(element);
        
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }
    
    // Counter Animations for Statistics
    initializeCounterAnimations() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
            const suffix = counter.textContent.replace(/[\d]/g, '');
            
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounter(counter, 0, target, suffix);
                        counterObserver.unobserve(counter);
                    }
                });
            });
            
            counterObserver.observe(counter);
        });
    }
    
    animateCounter(element, start, end, suffix) {
        const duration = 2000;
        const increment = (end - start) / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= end) {
                element.textContent = end + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    }
    
    // Parallax Effects
    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.hero::before');
        
        window.addEventListener('scroll', this.throttle(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${rate}px)`;
            });
        }, 10));
    }
    
    // Floating Elements Animation
    initializeFloatingElements() {
        const floatingCards = document.querySelectorAll('.floating-card');
        
        floatingCards.forEach((card, index) => {
            const delay = index * 0.5;
            const duration = 3 + (index * 0.5);
            
            card.style.animation = `floatCard ${duration}s ease-in-out ${delay}s infinite`;
        });
    }
    
    // Hover Animations
    setupHoverAnimations() {
        // Feature Cards Hover Effect
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.addHoverEffect(card, 'feature-card');
            });
            
            card.addEventListener('mouseleave', () => {
                this.removeHoverEffect(card, 'feature-card');
            });
        });
        
        // Service Nodes Hover Effect
        document.querySelectorAll('.service-node').forEach(node => {
            node.addEventListener('mouseenter', () => {
                this.addHoverEffect(node, 'service-node');
                this.pulseConnectedLines(node);
            });
            
            node.addEventListener('mouseleave', () => {
                this.removeHoverEffect(node, 'service-node');
                this.stopPulseConnectedLines(node);
            });
        });
        
        // Button Hover Effects
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mouseenter', () => {
                this.addButtonHoverEffect(button);
            });
            
            button.addEventListener('mouseleave', () => {
                this.removeButtonHoverEffect(button);
            });
        });
    }
    
    addHoverEffect(element, type) {
        switch (type) {
            case 'feature-card':
                element.style.transform = 'translateY(-10px) scale(1.02)';
                element.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                break;
            case 'service-node':
                element.style.transform = 'translateY(-5px) scale(1.05)';
                element.style.boxShadow = '0 15px 35px rgba(37, 99, 235, 0.2)';
                break;
        }
    }
    
    removeHoverEffect(element, type) {
        element.style.transform = '';
        element.style.boxShadow = '';
    }
    
    addButtonHoverEffect(button) {
        if (!button.classList.contains('no-hover')) {
            button.style.transform = 'translateY(-2px)';
            button.style.transition = 'all 0.3s ease';
        }
    }
    
    removeButtonHoverEffect(button) {
        button.style.transform = '';
    }
    
    // Service Node Connection Lines Animation
    pulseConnectedLines(node) {
        const line = node.querySelector('.service-line');
        if (line) {
            line.style.background = 'linear-gradient(to bottom, #2563eb, #60a5fa, transparent)';
            line.style.animation = 'linePulse 1s ease-in-out infinite';
        }
    }
    
    stopPulseConnectedLines(node) {
        const line = node.querySelector('.service-line');
        if (line) {
            line.style.background = 'linear-gradient(to bottom, #2563eb, transparent)';
            line.style.animation = '';
        }
    }
    
    // Loading Animation
    showLoadingAnimation(element) {
        const loader = document.createElement('div');
        loader.className = 'loading-spinner';
        loader.innerHTML = '<div class="spinner"></div>';
        
        element.appendChild(loader);
        
        return () => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        };
    }
    
    // Page Transition Effects
    initPageTransition() {
        document.body.classList.add('page-transition');
        
        setTimeout(() => {
            document.body.classList.remove('page-transition');
        }, 500);
    }
    
    // Notification Animation
    animateNotification(element) {
        element.style.transform = 'translateX(100%)';
        element.style.transition = 'transform 0.3s ease';
        
        requestAnimationFrame(() => {
            element.style.transform = 'translateX(0)';
        });
        
        // Auto-hide animation
        setTimeout(() => {
            element.style.transform = 'translateX(100%)';
            
            setTimeout(() => {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            }, 300);
        }, 4000);
    }
    
    // Modal Animation
    animateModalOpen(modal) {
        modal.style.display = 'block';
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.3s ease';
        
        const content = modal.querySelector('.modal-content');
        if (content) {
            content.style.transform = 'scale(0.9) translateY(-20px)';
            content.style.transition = 'transform 0.3s ease';
        }
        
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
            if (content) {
                content.style.transform = 'scale(1) translateY(0)';
            }
        });
    }
    
    animateModalClose(modal) {
        modal.style.opacity = '0';
        
        const content = modal.querySelector('.modal-content');
        if (content) {
            content.style.transform = 'scale(0.9) translateY(-20px)';
        }
        
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
    
    // Utility Methods
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    
    // Add custom keyframes to document
    addCustomKeyframes() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes linePulse {
                0% { opacity: 0.5; }
                50% { opacity: 1; }
                100% { opacity: 0.5; }
            }
            
            @keyframes modalBounce {
                0% { transform: scale(0.3) translateY(-50px); }
                50% { transform: scale(1.05) translateY(-10px); }
                70% { transform: scale(0.9) translateY(-5px); }
                100% { transform: scale(1) translateY(0); }
            }
            
            @keyframes notificationSlide {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes buttonPress {
                0% { transform: scale(1); }
                50% { transform: scale(0.95); }
                100% { transform: scale(1); }
            }
            
            .page-transition {
                opacity: 0;
                transition: opacity 0.5s ease;
            }
            
            .loading-spinner {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            
            .spinner {
                width: 40px;
                height: 40px;
                border: 4px solid #f3f3f3;
                border-top: 4px solid #2563eb;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
        `;
        
        document.head.appendChild(style);
    }
}

// Initialize Animation Controller when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const animationController = new AnimationController();
    animationController.addCustomKeyframes();
    
    // Make it globally available
    window.AnimationController = animationController;
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimationController;
}