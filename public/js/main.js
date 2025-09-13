// Main JavaScript functionality for MediCare Plus
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    initializeAnimations();
    setupModals();
    initializeServices();
    setupMobileMenu();
    initializeNavbar();
}

// Event Listeners Setup
function setupEventListeners() {
    // Language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', handleLanguageChange);
    }
    
    // Login buttons
    document.querySelectorAll('[data-login]').forEach(btn => {
        btn.addEventListener('click', handleLoginClick);
    });
    
    // Emergency button
    const emergencyBtn = document.getElementById('emergencyBtn');
    if (emergencyBtn) {
        emergencyBtn.addEventListener('click', showEmergencyModal);
    }
    
    // Book consultation button
    const bookConsultationBtn = document.getElementById('bookConsultationBtn');
    if (bookConsultationBtn) {
        bookConsultationBtn.addEventListener('click', handleBookConsultation);
    }
    
    // Quick guide button
    const quickGuideBtn = document.getElementById('quickGuideBtn');
    if (quickGuideBtn) {
        quickGuideBtn.addEventListener('click', showQuickGuide);
    }
    
    // Help center button
    const helpCenterBtn = document.getElementById('helpCenterBtn');
    if (helpCenterBtn) {
        helpCenterBtn.addEventListener('click', showHelpCenter);
    }
    
    // Service nodes
    document.querySelectorAll('.service-node').forEach(node => {
        node.addEventListener('click', handleServiceClick);
    });
    
    // Feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', handleFeatureCardClick);
    });
}

// Language Change Handler
function handleLanguageChange(event) {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
    
    // Dispatch custom event for chatbot
    document.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language: selectedLanguage }
    }));
}

// Login Click Handler
function handleLoginClick(event) {
    const loginType = event.target.getAttribute('data-login');
    showLoginModal(loginType);
}

// Show Login Modal
function showLoginModal(type) {
    const modal = document.getElementById('loginModal');
    const title = document.getElementById('loginTitle');
    
    if (modal && title) {
        const titleText = {
            'patient': 'Patient Login',
            'doctor': 'Doctor Login', 
            'admin': 'Admin Login'
        };
        
        title.textContent = titleText[type] || 'Login';
        modal.style.display = 'block';
        modal.classList.add('fade-in');
    }
}

// Emergency Modal
function showEmergencyModal() {
    const modal = document.getElementById('emergencyModal');
    if (modal) {
        modal.style.display = 'block';
        modal.classList.add('fade-in');
    }
}

// Book Consultation Handler
function handleBookConsultation() {
    // In a real implementation, this would connect to 100ms.live
    showNotification('Redirecting to video consultation...', 'info');
    
    // Simulate booking process
    setTimeout(() => {
        showNotification('Please login first to book consultation', 'warning');
        showLoginModal('patient');
    }, 1500);
}

// Quick Guide
function showQuickGuide() {
    const guideContent = `
        <div class="quick-guide">
            <h3>Quick Start Guide</h3>
            <div class="guide-steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h4>Register/Login</h4>
                        <p>Create your account or login as Patient, Doctor, or Admin</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h4>Choose Service</h4>
                        <p>Select from Video Consultation, First Aid, Home Remedies, etc.</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h4>Get Help</h4>
                        <p>Connect with doctors, access medical resources, or get emergency help</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    showModal('Quick Guide', guideContent);
}

// Help Center
function showHelpCenter() {
    const helpContent = `
        <div class="help-center">
            <h3>Help Center</h3>
            <div class="help-sections">
                <div class="help-section">
                    <h4>Frequently Asked Questions</h4>
                    <div class="faq-item">
                        <strong>Q: How do I book a video consultation?</strong>
                        <p>A: Click on "Book Video Consultation", login to your account, select a doctor, and choose available time slot.</p>
                    </div>
                    <div class="faq-item">
                        <strong>Q: Are digital prescriptions valid?</strong>
                        <p>A: Yes, our digital prescriptions are legally valid and accepted at all major pharmacies across India.</p>
                    </div>
                    <div class="faq-item">
                        <strong>Q: What emergency services do you provide?</strong>
                        <p>A: We provide emergency helpline numbers, ambulance contacts, and hospital directories specific to Punjab.</p>
                    </div>
                </div>
                <div class="help-section">
                    <h4>Contact Support</h4>
                    <p>Email: support@medicareplus.in</p>
                    <p>Phone: +91-1800-123-4567</p>
                    <p>Available 24/7</p>
                </div>
            </div>
        </div>
    `;
    
    showModal('Help Center', helpContent);
}

// Service Click Handler
function handleServiceClick(event) {
    const service = event.currentTarget.getAttribute('data-service');
    
    const serviceHandlers = {
        'video-consultation': () => handleBookConsultation(),
        'digital-prescription': () => showServiceInfo('Digital Prescription', 'Get secure digital prescriptions from certified doctors. Valid at all pharmacies.'),
        'first-aid': () => showFirstAidGuide(),
        'home-remedies': () => showHomeRemedies(),
        'emergency': () => showEmergencyModal(),
        'hospitals': () => showHospitalDirectory()
    };
    
    if (serviceHandlers[service]) {
        serviceHandlers[service]();
    }
}

// First Aid Guide
function showFirstAidGuide() {
    const firstAidContent = `
        <div class="first-aid-guide">
            <h3>First Aid Guide</h3>
            <div class="first-aid-topics">
                <div class="aid-topic">
                    <h4>🩹 Cuts and Wounds</h4>
                    <p>1. Clean hands thoroughly<br>2. Stop bleeding with pressure<br>3. Clean wound gently<br>4. Apply bandage</p>
                </div>
                <div class="aid-topic">
                    <h4>🔥 Burns</h4>
                    <p>1. Cool with running water<br>2. Remove from heat source<br>3. Don't use ice<br>4. Seek medical help if severe</p>
                </div>
                <div class="aid-topic">
                    <h4>💨 Choking</h4>
                    <p>1. Encourage coughing<br>2. Back blows between shoulder blades<br>3. Heimlich maneuver if needed<br>4. Call emergency services</p>
                </div>
                <div class="aid-topic">
                    <h4>🫁 CPR Basics</h4>
                    <p>1. Check responsiveness<br>2. Call for help<br>3. Chest compressions<br>4. Rescue breaths</p>
                </div>
            </div>
            <p><strong>Note:</strong> These are basic guidelines. Always seek professional medical help in emergencies.</p>
        </div>
    `;
    
    showModal('First Aid Guide', firstAidContent);
}

// Home Remedies
function showHomeRemedies() {
    const remediesContent = `
        <div class="home-remedies">
            <h3>Home Remedies</h3>
            <div class="remedy-categories">
                <div class="remedy-category">
                    <h4>🤒 Cold & Flu</h4>
                    <ul>
                        <li>Ginger tea with honey</li>
                        <li>Turmeric milk</li>
                        <li>Steam inhalation</li>
                        <li>Rest and hydration</li>
                    </ul>
                </div>
                <div class="remedy-category">
                    <h4>🤢 Digestive Issues</h4>
                    <ul>
                        <li>Mint tea for nausea</li>
                        <li>Ginger for digestion</li>
                        <li>Cumin water</li>
                        <li>Fennel seeds</li>
                    </ul>
                </div>
                <div class="remedy-category">
                    <h4>😴 Sleep & Stress</h4>
                    <ul>
                        <li>Chamomile tea</li>
                        <li>Warm milk with cardamom</li>
                        <li>Deep breathing exercises</li>
                        <li>Lavender aromatherapy</li>
                    </ul>
                </div>
                <div class="remedy-category">
                    <h4>🦴 Aches & Pains</h4>
                    <ul>
                        <li>Turmeric paste for inflammation</li>
                        <li>Hot/cold compress</li>
                        <li>Gentle stretching</li>
                        <li>Epsom salt bath</li>
                    </ul>
                </div>
            </div>
            <p><strong>Disclaimer:</strong> These remedies are for minor ailments. Consult a doctor for persistent symptoms.</p>
        </div>
    `;
    
    showModal('Home Remedies', remediesContent);
}

// Hospital Directory
function showHospitalDirectory() {
    const hospitalContent = `
        <div class="hospital-directory">
            <h3>Punjab Hospital Directory</h3>
            <div class="hospital-list">
                <div class="hospital-item">
                    <h4>🏥 Chandigarh</h4>
                    <p><strong>PGIMER:</strong> +91-172-2747585</p>
                    <p><strong>Government Medical College:</strong> +91-172-2601023</p>
                    <p><strong>Fortis Hospital:</strong> +91-172-4699000</p>
                </div>
                <div class="hospital-item">
                    <h4>🏥 Ludhiana</h4>
                    <p><strong>Christian Medical College:</strong> +91-161-2302051</p>
                    <p><strong>Dayanand Medical College:</strong> +91-161-4605555</p>
                    <p><strong>Apollo Hospital:</strong> +91-161-5151515</p>
                </div>
                <div class="hospital-item">
                    <h4>🏥 Amritsar</h4>
                    <p><strong>Government Medical College:</strong> +91-183-2258855</p>
                    <p><strong>Amandeep Hospital:</strong> +91-183-5072000</p>
                    <p><strong>Escorts Heart Institute:</strong> +91-183-5027000</p>
                </div>
                <div class="hospital-item">
                    <h4>🏥 Jalandhar</h4>
                    <p><strong>Lovely Professional University Hospital:</strong> +91-1824-517000</p>
                    <p><strong>Baba Jaswant Singh Hospital:</strong> +91-181-2224004</p>
                    <p><strong>Max Super Speciality Hospital:</strong> +91-181-5077777</p>
                </div>
            </div>
        </div>
    `;
    
    showModal('Hospital Directory', hospitalContent);
}

// Feature Card Click Handler
function handleFeatureCardClick(event) {
    const feature = event.currentTarget.getAttribute('data-feature');
    
    if (feature) {
        const featureInfo = {
            'consultation': 'Book video consultations with certified doctors available 24/7',
            'prescription': 'Receive digital prescriptions that are secure and accepted everywhere',
            'firstaid': 'Access comprehensive first aid guides and emergency procedures',
            'remedies': 'Discover natural home remedies for common health issues',
            'emergency': 'Get quick access to emergency services and helpline numbers',
            'rating': 'Rate and review healthcare services to help the community'
        };
        
        if (featureInfo[feature]) {
            showNotification(featureInfo[feature], 'info');
        }
    }
}

// Generic Modal Display
function showModal(title, content) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('genericModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'genericModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <div id="modalTitle"></div>
                <div id="modalContent"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add close event listener
        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    document.getElementById('modalTitle').innerHTML = `<h2>${title}</h2>`;
    document.getElementById('modalContent').innerHTML = content;
    modal.style.display = 'block';
    modal.classList.add('fade-in');
}

// Service Info Display
function showServiceInfo(title, description) {
    showNotification(`${title}: ${description}`, 'info');
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type} notification-slide`;
    
    const icon = {
        'info': '📘',
        'success': '✅', 
        'warning': '⚠️',
        'error': '❌'
    };
    
    notification.innerHTML = `
        <span class="notification-icon">${icon[type] || '📘'}</span>
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Position notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#fee' : type === 'warning' ? '#fff3cd' : type === 'success' ? '#d4edda' : '#cce7ff'};
        color: ${type === 'error' ? '#721c24' : type === 'warning' ? '#856404' : type === 'success' ? '#155724' : '#004085'};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        max-width: 400px;
        border: 1px solid ${type === 'error' ? '#f5c6cb' : type === 'warning' ? '#ffeaa7' : type === 'success' ? '#c3e6cb' : '#a6d2ff'};
    `;
    
    document.body.appendChild(notification);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Initialize Animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Stagger animation for cards
                if (entry.target.classList.contains('feature-card')) {
                    entry.target.classList.add('stagger-item');
                }
                
                // Service nodes animation
                if (entry.target.classList.contains('service-node')) {
                    entry.target.classList.add('scale-in');
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animations
    document.querySelectorAll('.feature-card, .service-node, .stat-item').forEach(el => {
        observer.observe(el);
    });
    
    // Add floating animation to hero cards
    document.querySelectorAll('.floating-card').forEach(card => {
        card.classList.add('float-animation');
    });
}

// Setup Modals
function setupModals() {
    // Close modal when clicking outside or on close button
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
        
        if (event.target.classList.contains('close')) {
            const modal = event.target.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        }
    });
    
    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmit);
    }
}

// Login Form Handler
function handleLoginSubmit(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Simulate login process
    showNotification('Logging in...', 'info');
    
    setTimeout(() => {
        showNotification('Login successful! Welcome to MediCare Plus', 'success');
        document.getElementById('loginModal').style.display = 'none';
        
        // Reset form
        document.getElementById('loginForm').reset();
    }, 2000);
}

// Initialize Services
function initializeServices() {
    // Add hover effects to service nodes
    document.querySelectorAll('.service-node').forEach(node => {
        node.addEventListener('mouseenter', () => {
            node.classList.add('glow');
        });
        
        node.addEventListener('mouseleave', () => {
            node.classList.remove('glow');
        });
    });
    
    // Add pulse animation to emergency button
    const emergencyBtn = document.getElementById('emergencyBtn');
    if (emergencyBtn) {
        emergencyBtn.classList.add('heartbeat');
    }
}

// Mobile Menu Setup
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
}

// Initialize Navbar
function initializeNavbar() {
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for global use
window.MediCareApp = {
    showNotification,
    showModal,
    handleBookConsultation,
    showEmergencyModal,
    showFirstAidGuide,
    showHomeRemedies,
    showHelpCenter
};