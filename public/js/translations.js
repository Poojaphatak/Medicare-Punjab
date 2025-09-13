// Multi-language translation system
const translations = {
    en: {
        // Hero Section
        'hero.title': 'Your Health, Our Priority',
        'hero.subtitle': 'Connect with certified doctors anytime, anywhere. Get expert medical consultation from the comfort of your home.',
        
        // Services
        'services.title': 'Our Services',
        'services.video': 'Video Consultation',
        'services.prescription': 'Digital Prescription',
        'services.firstaid': 'First Aid Videos',
        'services.remedies': 'Home Remedies',
        'services.emergency': 'Emergency Services',
        'services.hospitals': 'Hospital Directory',
        
        // Feature Cards
        'cards.consultation.title': 'Video Consultation',
        'cards.consultation.desc': 'Connect with experienced doctors through secure video calls. Get professional medical advice from anywhere.',
        'cards.prescription.title': 'Digital Prescriptions',
        'cards.prescription.desc': 'Receive digital prescriptions directly on your device. Easy to store, share, and use at pharmacies.',
        'cards.firstaid.title': 'First Aid Guide',
        'cards.firstaid.desc': 'Learn essential first aid techniques through our comprehensive video library and step-by-step guides.',
        'cards.remedies.title': 'Home Remedies',
        'cards.remedies.desc': 'Discover natural home remedies for common health issues. Time-tested solutions for minor ailments.',
        'cards.emergency.title': 'Emergency Helplines',
        'cards.emergency.desc': 'Quick access to emergency services, ambulance contacts, and hospital directories across Punjab.',
        'cards.rating.title': 'Rating & Reviews',
        'cards.rating.desc': 'Rate your experience and help others choose the best healthcare services. Transparent feedback system.',
        
        // Stats
        'stats.doctors': 'Certified Doctors',
        'stats.patients': 'Happy Patients',
        'stats.availability': 'Available',
        'stats.rating': 'User Rating',
        
        // Footer
        'footer.description': 'Your trusted healthcare companion providing quality medical services anytime, anywhere.',
        'footer.services.title': 'Services',
        'footer.services.video': 'Video Consultation',
        'footer.services.prescription': 'Digital Prescription',
        'footer.services.firstaid': 'First Aid Guide',
        'footer.services.emergency': 'Emergency Services',
        'footer.support.title': 'Support',
        'footer.support.help': 'Help Center',
        'footer.support.contact': 'Contact Us',
        'footer.support.privacy': 'Privacy Policy',
        'footer.support.terms': 'Terms of Service',
        'footer.contact.title': 'Contact Info',
        
        // Chatbot
        'chatbot.title': 'MediBot Assistant',
        'chatbot.status': 'Online',
        'chatbot.welcome': 'Hello! I\'m MediBot. How can I help you today?',
        'chatbot.placeholder': 'Type your message...',
    },
    
    hi: {
        // Hero Section
        'hero.title': 'आपका स्वास्थ्य, हमारी प्राथमिकता',
        'hero.subtitle': 'कहीं भी, कभी भी प्रमाणित डॉक्टरों से जुड़ें। अपने घर के आराम से विशेषज्ञ चिकित्सा सलाह प्राप्त करें।',
        
        // Services
        'services.title': 'हमारी सेवाएं',
        'services.video': 'वीडियो परामर्श',
        'services.prescription': 'डिजिटल नुस्खा',
        'services.firstaid': 'प्राथमिक चिकित्सा वीडियो',
        'services.remedies': 'घरेलू उपचार',
        'services.emergency': 'आपातकालीन सेवाएं',
        'services.hospitals': 'अस्पताल निर्देशिका',
        
        // Feature Cards
        'cards.consultation.title': 'वीडियो परामर्श',
        'cards.consultation.desc': 'सुरक्षित वीडियो कॉल के माध्यम से अनुभवी डॉक्टरों से जुड़ें। कहीं से भी पेशेवर चिकित्सा सलाह प्राप्त करें।',
        'cards.prescription.title': 'डिजिटल नुस्खे',
        'cards.prescription.desc': 'सीधे अपने डिवाइस पर डिजिटल नुस्खे प्राप्त करें। स्टोर करना, साझा करना और फार्मेसियों में उपयोग करना आसान।',
        'cards.firstaid.title': 'प्राथमिक चिकित्सा गाइड',
        'cards.firstaid.desc': 'हमारी व्यापक वीडियो लाइब्रेरी और चरणबद्ध गाइड के माध्यम से आवश्यक प्राथमिक चिकित्सा तकनीकें सीखें।',
        'cards.remedies.title': 'घरेलू उपचार',
        'cards.remedies.desc': 'सामान्य स्वास्थ्य समस्याओं के लिए प्राकृतिक घरेलू उपचार खोजें। मामूली बीमारियों के लिए समय-परीक्षित समाधान।',
        'cards.emergency.title': 'आपातकालीन हेल्पलाइन',
        'cards.emergency.desc': 'पंजाब भर में आपातकालीन सेवाओं, एम्बुलेंस संपर्कों और अस्पताल निर्देशिकाओं तक त्वरित पहुंच।',
        'cards.rating.title': 'रेटिंग और समीक्षा',
        'cards.rating.desc': 'अपने अनुभव को रेट करें और दूसरों को सर्वोत्तम स्वास्थ्य सेवाएं चुनने में मदद करें। पारदर्शी फीडबैक सिस्टम।',
        
        // Stats
        'stats.doctors': 'प्रमाणित डॉक्टर',
        'stats.patients': 'खुश मरीज',
        'stats.availability': 'उपलब्ध',
        'stats.rating': 'उपयोगकर्ता रेटिंग',
        
        // Footer
        'footer.description': 'आपका विश्वसनीय स्वास्थ्य साथी जो कभी भी, कहीं भी गुणवत्तापूर्ण चिकित्सा सेवाएं प्रदान करता है।',
        'footer.services.title': 'सेवाएं',
        'footer.services.video': 'वीडियो परामर्श',
        'footer.services.prescription': 'डिजिटल नुस्खा',
        'footer.services.firstaid': 'प्राथमिक चिकित्सा गाइड',
        'footer.services.emergency': 'आपातकालीन सेवाएं',
        'footer.support.title': 'सहायता',
        'footer.support.help': 'सहायता केंद्र',
        'footer.support.contact': 'हमसे संपर्क करें',
        'footer.support.privacy': 'गोपनीयता नीति',
        'footer.support.terms': 'सेवा की शर्तें',
        'footer.contact.title': 'संपर्क जानकारी',
        
        // Chatbot
        'chatbot.title': 'मेडिबॉट सहायक',
        'chatbot.status': 'ऑनलाइन',
        'chatbot.welcome': 'नमस्ते! मैं मेडिबॉट हूं। आज मैं आपकी कैसे मदद कर सकता हूं?',
        'chatbot.placeholder': 'अपना संदेश टाइप करें...',
    },
    
    pa: {
        // Hero Section
        'hero.title': 'ਤੁਹਾਡੀ ਸਿਹਤ, ਸਾਡੀ ਤਰਜੀਹ',
        'hero.subtitle': 'ਕਿਤੇ ਵੀ, ਕਦੇ ਵੀ ਪ੍ਰਮਾਣਿਤ ਡਾਕਟਰਾਂ ਨਾਲ ਜੁੜੋ। ਆਪਣੇ ਘਰ ਦੇ ਆਰਾਮ ਤੋਂ ਮਾਹਰ ਮੈਡੀਕਲ ਸਲਾਹ ਲਓ।',
        
        // Services
        'services.title': 'ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ',
        'services.video': 'ਵੀਡੀਓ ਸਲਾਹ',
        'services.prescription': 'ਡਿਜਿਟਲ ਨੁਸਖ਼ਾ',
        'services.firstaid': 'ਪਹਿਲੀ ਸਹਾਇਤਾ ਵੀਡੀਓ',
        'services.remedies': 'ਘਰੇਲੂ ਇਲਾਜ',
        'services.emergency': 'ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ',
        'services.hospitals': 'ਹਸਪਤਾਲ ਡਾਇਰੈਕਟਰੀ',
        
        // Feature Cards
        'cards.consultation.title': 'ਵੀਡੀਓ ਸਲਾਹ',
        'cards.consultation.desc': 'ਸੁਰੱਖਿਤ ਵੀਡੀਓ ਕਾਲਾਂ ਰਾਹੀਂ ਤਜਰਬੇਕਾਰ ਡਾਕਟਰਾਂ ਨਾਲ ਜੁੜੋ। ਕਿਤੇ ਤੋਂ ਵੀ ਪੇਸ਼ੇਵਰ ਮੈਡੀਕਲ ਸਲਾਹ ਲਓ।',
        'cards.prescription.title': 'ਡਿਜਿਟਲ ਨੁਸਖ਼ੇ',
        'cards.prescription.desc': 'ਸਿੱਧੇ ਆਪਣੇ ਡਿਵਾਈਸ ਉੱਤੇ ਡਿਜਿਟਲ ਨੁਸਖ਼ੇ ਪ੍ਰਾਪਤ ਕਰੋ। ਸਟੋਰ ਕਰਨਾ, ਸਾਂਝਾ ਕਰਨਾ ਅਤੇ ਦਵਾਖਾਨਿਆਂ ਵਿੱਚ ਵਰਤਣਾ ਆਸਾਨ।',
        'cards.firstaid.title': 'ਪਹਿਲੀ ਸਹਾਇਤਾ ਗਾਈਡ',
        'cards.firstaid.desc': 'ਸਾਡੀ ਵਿਆਪਕ ਵੀਡੀਓ ਲਾਇਬ੍ਰੇਰੀ ਅਤੇ ਕਦਮ-ਦਰ-ਕਦਮ ਗਾਈਡਾਂ ਰਾਹੀਂ ਜ਼ਰੂਰੀ ਪਹਿਲੀ ਸਹਾਇਤਾ ਤਕਨੀਕਾਂ ਸਿੱਖੋ।',
        'cards.remedies.title': 'ਘਰੇਲੂ ਇਲਾਜ',
        'cards.remedies.desc': 'ਆਮ ਸਿਹਤ ਦੀਆਂ ਸਮੱਸਿਆਵਾਂ ਲਈ ਕੁਦਰਤੀ ਘਰੇਲੂ ਇਲਾਜ ਖੋਜੋ। ਮਾਮੂਲੀ ਬਿਮਾਰੀਆਂ ਲਈ ਸਮੇਂ-ਪਰਖੇ ਹੱਲ।',
        'cards.emergency.title': 'ਐਮਰਜੈਂਸੀ ਹੈਲਪਲਾਈਨ',
        'cards.emergency.desc': 'ਪੰਜਾਬ ਭਰ ਵਿੱਚ ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ, ਐਂਬੂਲੈਂਸ ਸੰਪਰਕਾਂ ਅਤੇ ਹਸਪਤਾਲ ਡਾਇਰੈਕਟਰੀਆਂ ਤੱਕ ਤੇਜ਼ ਪਹੁੰਚ।',
        'cards.rating.title': 'ਰੇਟਿੰਗ ਅਤੇ ਸਮੀਖਿਆਵਾਂ',
        'cards.rating.desc': 'ਆਪਣੇ ਅਨੁਭਵ ਨੂੰ ਰੇਟ ਕਰੋ ਅਤੇ ਦੂਜਿਆਂ ਨੂੰ ਸਭ ਤੋਂ ਵਧੀਆ ਸਿਹਤ ਸੇਵਾਵਾਂ ਚੁਣਨ ਵਿੱਚ ਮਦਦ ਕਰੋ। ਪਾਰਦਰਸ਼ੀ ਫੀਡਬੈਕ ਸਿਸਟਮ।',
        
        // Stats
        'stats.doctors': 'ਪ੍ਰਮਾਣਿਤ ਡਾਕਟਰ',
        'stats.patients': 'ਖੁਸ਼ ਮਰੀਜ਼',
        'stats.availability': 'ਉਪਲਬਧ',
        'stats.rating': 'ਉਪਭੋਗਤਾ ਰੇਟਿੰਗ',
        
        // Footer
        'footer.description': 'ਤੁਹਾਡਾ ਭਰੋਸੇਮੰਦ ਸਿਹਤ ਸਾਥੀ ਜੋ ਕਦੇ ਵੀ, ਕਿਤੇ ਵੀ ਗੁਣਵੱਤਾ ਭਰਪੂਰ ਮੈਡੀਕਲ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।',
        'footer.services.title': 'ਸੇਵਾਵਾਂ',
        'footer.services.video': 'ਵੀਡੀਓ ਸਲਾਹ',
        'footer.services.prescription': 'ਡਿਜਿਟਲ ਨੁਸਖ਼ਾ',
        'footer.services.firstaid': 'ਪਹਿਲੀ ਸਹਾਇਤਾ ਗਾਈਡ',
        'footer.services.emergency': 'ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ',
        'footer.support.title': 'ਸਹਾਇਤਾ',
        'footer.support.help': 'ਸਹਾਇਤਾ ਕੇਂਦਰ',
        'footer.support.contact': 'ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ',
        'footer.support.privacy': 'ਪ੍ਰਾਈਵੇਸੀ ਨੀਤੀ',
        'footer.support.terms': 'ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ',
        'footer.contact.title': 'ਸੰਪਰਕ ਜਾਣਕਾਰੀ',
        
        // Chatbot
        'chatbot.title': 'ਮੈਡੀਬਾਟ ਸਹਾਇਕ',
        'chatbot.status': 'ਆਨਲਾਈਨ',
        'chatbot.welcome': 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਮੈਡੀਬਾਟ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
        'chatbot.placeholder': 'ਆਪਣਾ ਸੰਦੇਸ਼ ਟਾਈਪ ਕਰੋ...',
    }
};

// Translation function
function translate(key, lang = 'en') {
    return translations[lang]?.[key] || translations.en[key] || key;
}

// Initialize translation system
function initTranslations() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLang);
    
    // Set language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = savedLang;
        languageSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }
}

// Change language function
function changeLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('selectedLanguage', language);
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translatedText = translate(key, language);
        element.textContent = translatedText;
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const translatedText = translate(key, language);
        element.placeholder = translatedText;
    });
    
    // Update language selector if it exists
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = language;
    }
}

// Current language variable
let currentLanguage = 'en';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initTranslations);