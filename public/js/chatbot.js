// Advanced Chatbot with Multi-language Support
class MediBot {
    constructor() {
        this.responses = {
            en: {
                greetings: [
                    "Hello! I'm MediBot, your health assistant. How can I help you today?",
                    "Hi there! I'm here to help with your health questions.",
                    "Welcome to MediCare Plus! How can I assist you?"
                ],
                
                // Common medical queries
                fever: [
                    "For fever, drink plenty of fluids, rest, and take temperature regularly. If fever exceeds 103°F or lasts more than 3 days, consult a doctor immediately.",
                    "Fever symptoms can be managed with rest, hydration, and over-the-counter medications. Seek medical help if symptoms worsen."
                ],
                
                headache: [
                    "For headaches, try resting in a dark room, apply cold compress, stay hydrated. If severe or persistent, book a consultation with our doctors.",
                    "Headache relief: rest, hydration, gentle massage. Avoid screens and loud sounds. Contact us if pain is severe."
                ],
                
                cough: [
                    "For cough relief, drink warm water with honey, avoid cold drinks, use steam inhalation. If cough persists more than a week, see a doctor.",
                    "Persistent cough needs attention. Try warm fluids, honey, and humid air. Book video consultation if symptoms worsen."
                ],
                
                // Emergency responses
                emergency: [
                    "🚨 For medical emergencies, call:\n• Medical Emergency: 102\n• Ambulance: 108\n• Fire: 101\n• Police: 100\n\nOr click Emergency button for Punjab-specific contacts."
                ],
                
                // Service information
                consultation: [
                    "Our video consultation service connects you with certified doctors 24/7. Book through our platform for secure, professional medical advice.",
                    "Video consultations are available with our expert doctors. Click 'Book Video Consultation' to get started."
                ],
                
                prescription: [
                    "Digital prescriptions are sent directly to your device after consultation. They're accepted at all major pharmacies and easy to share.",
                    "Get digital prescriptions from our doctors - secure, convenient, and accepted everywhere."
                ],
                
                // Default responses
                default: [
                    "I understand you need help. Can you please be more specific about your health concern?",
                    "I'm here to help with health-related questions. Could you provide more details?",
                    "For specific medical advice, I recommend booking a video consultation with our doctors."
                ],
                
                thankyou: [
                    "You're welcome! Remember, I'm here 24/7 for any health questions.",
                    "Happy to help! Stay healthy and don't hesitate to reach out anytime."
                ]
            },
            
            hi: {
                greetings: [
                    "नमस्ते! मैं मेडिबॉट हूं, आपका स्वास्थ्य सहायक। आज मैं आपकी कैसे मदद कर सकता हूं?",
                    "हैलो! मैं आपके स्वास्थ्य प्रश्नों में मदद के लिए यहां हूं।",
                    "मेडिकेयर प्लस में आपका स्वागत है! मैं आपकी कैसे सहायता कर सकता हूं?"
                ],
                
                fever: [
                    "बुखार के लिए, पर्याप्त तरल पदार्थ पिएं, आराम करें, और नियमित रूप से तापमान लें। यदि बुखार 103°F से अधिक हो या 3 दिन से ज्यादा रहे तो तुरंत डॉक्टर से संपर्क करें।",
                    "बुखार के लक्षणों को आराम, हाइड्रेशन, और ओवर-द-काउंटर दवाओं से नियंत्रित किया जा सकता है। यदि लक्षण बिगड़ें तो चिकित्सा सहायता लें।"
                ],
                
                headache: [
                    "सिरदर्द के लिए, अंधेरे कमरे में आराम करने की कोशिश करें, ठंडी सिकाई करें, हाइड्रेटेड रहें। यदि गंभीर या लगातार हो तो हमारे डॉक्टरों के साथ परामर्श बुक करें।",
                    "सिरदर्द से राहत: आराम, हाइड्रेशन, हल्की मालिश। स्क्रीन और तेज आवाज से बचें। दर्द गंभीर हो तो हमसे संपर्क करें।"
                ],
                
                cough: [
                    "खांसी से राहत के लिए, शहद के साथ गर्म पानी पिएं, ठंडे पेय से बचें, भाप लें। यदि खांसी एक सप्ताह से अधिक रहे तो डॉक्टर से मिलें।",
                    "लगातार खांसी पर ध्यान की जरूरत है। गर्म तरल पदार्थ, शहद, और नम हवा का सेवन करें। लक्षण बिगड़ने पर वीडियो परामर्श बुक करें।"
                ],
                
                emergency: [
                    "🚨 चिकित्सा आपातकाल के लिए, कॉल करें:\n• मेडिकल इमरजेंसी: 102\n• एम्बुलेंस: 108\n• फायर ब्रिगेड: 101\n• पुलिस: 100\n\nया पंजाब-विशिष्ट संपर्कों के लिए इमरजेंसी बटन पर क्लिक करें।"
                ],
                
                consultation: [
                    "हमारी वीडियो परामर्श सेवा आपको प्रमाणित डॉक्टरों से 24/7 जोड़ती है। सुरक्षित, पेशेवर चिकित्सा सलाह के लिए हमारे प्लेटफॉर्म के माध्यम से बुक करें।",
                    "हमारे विशेषज्ञ डॉक्टरों के साथ वीडियो परामर्श उपलब्ध है। शुरुआत करने के लिए 'वीडियो परामर्श बुक करें' पर क्लिक करें।"
                ],
                
                prescription: [
                    "परामर्श के बाद डिजिटल नुस्खे सीधे आपके डिवाइस पर भेजे जाते हैं। वे सभी प्रमुख फार्मेसियों में स्वीकार किए जाते हैं और साझा करना आसान है।",
                    "हमारे डॉक्टरों से डिजिटल नुस्खे प्राप्त करें - सुरक्षित, सुविधाजनक, और हर जगह स्वीकृत।"
                ],
                
                default: [
                    "मैं समझता हूं कि आपको मदद चाहिए। क्या आप अपनी स्वास्थ्य चिंता के बारे में अधिक विशिष्ट हो सकते हैं?",
                    "मैं स्वास्थ्य संबंधी प्रश्नों में मदद के लिए यहां हूं। क्या आप अधिक विवरण दे सकते हैं?",
                    "विशिष्ट चिकित्सा सलाह के लिए, मैं हमारे डॉक्टरों के साथ वीडियो परामर्श बुक करने की सिफारिश करता हूं।"
                ],
                
                thankyou: [
                    "आपका स्वागत है! याद रखें, मैं किसी भी स्वास्थ्य प्रश्न के लिए 24/7 यहां हूं।",
                    "मदद करके खुशी हुई! स्वस्थ रहें और कभी भी संपर्क करने में झिझक न करें।"
                ]
            },
            
            pa: {
                greetings: [
                    "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਮੈਡੀਬਾਟ ਹਾਂ, ਤੁਹਾਡਾ ਸਿਹਤ ਸਹਾਇਕ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
                    "ਨਮਸਕਾਰ! ਮੈਂ ਤੁਹਾਡੇ ਸਿਹਤ ਸਵਾਲਾਂ ਵਿੱਚ ਮਦਦ ਲਈ ਇੱਥੇ ਹਾਂ।",
                    "ਮੈਡੀਕੇਅਰ ਪਲੱਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ! ਮੈਂ ਤੁਹਾਡੀ ਕਿਸ ਤਰ੍ਹਾਂ ਸਹਾਇਤਾ ਕਰ ਸਕਦਾ ਹਾਂ?"
                ],
                
                fever: [
                    "ਬੁਖ਼ਾਰ ਲਈ, ਬਹੁਤ ਸਾਰਾ ਤਰਲ ਪਦਾਰਥ ਪੀਓ, ਆਰਾਮ ਕਰੋ, ਅਤੇ ਨਿਯਮਿਤ ਤਾਪਮਾਨ ਲਓ। ਜੇ ਬੁਖ਼ਾਰ 103°F ਤੋਂ ਵੱਧ ਹੋਵੇ ਜਾਂ 3 ਦਿਨਾਂ ਤੋਂ ਜ਼ਿਆਦਾ ਰਹੇ ਤਾਂ ਤੁਰੰਤ ਡਾਕਟਰ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",
                    "ਬੁਖ਼ਾਰ ਦੇ ਲੱਛਣਾਂ ਨੂੰ ਆਰਾਮ, ਪਾਣੀ, ਅਤੇ ਬਿਨਾਂ ਨੁਸਖ਼ੇ ਦੀਆਂ ਦਵਾਈਆਂ ਨਾਲ ਨਿਯੰਤਰਿਤ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ। ਜੇ ਲੱਛਣ ਵਿਗੜਨ ਤਾਂ ਮੈਡੀਕਲ ਮਦਦ ਲਓ।"
                ],
                
                headache: [
                    "ਸਿਰ ਦਰਦ ਲਈ, ਹਨੇਰੇ ਕਮਰੇ ਵਿੱਚ ਆਰਾਮ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ, ਠੰਢਾ ਸਿਕਾਓ, ਪਾਣੀ ਪੀਂਦੇ ਰਹੋ। ਜੇ ਗੰਭੀਰ ਜਾਂ ਲਗਾਤਾਰ ਹੋਵੇ ਤਾਂ ਸਾਡੇ ਡਾਕਟਰਾਂ ਨਾਲ ਸਲਾਹ ਬੁਕ ਕਰੋ।",
                    "ਸਿਰ ਦਰਦ ਤੋਂ ਰਾਹਤ: ਆਰਾਮ, ਪਾਣੀ, ਹੌਲੀ ਮਸਾਜ। ਸਕ੍ਰੀਨ ਅਤੇ ਤੇਜ਼ ਆਵਾਜ਼ ਤੋਂ ਬਚੋ। ਦਰਦ ਗੰਭੀਰ ਹੋਵੇ ਤਾਂ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।"
                ],
                
                cough: [
                    "ਖੰਘ ਦੀ ਰਾਹਤ ਲਈ, ਸ਼ਹਿਦ ਨਾਲ ਗਰਮ ਪਾਣੀ ਪੀਓ, ਠੰਢੇ ਪੀਣ ਵਾਲੇ ਤੋਂ ਬਚੋ, ਭਾਫ ਲਓ। ਜੇ ਖੰਘ ਇੱਕ ਹਫ਼ਤੇ ਤੋਂ ਵੱਧ ਰਹੇ ਤਾਂ ਡਾਕਟਰ ਨੂੰ ਮਿਲੋ।",
                    "ਲਗਾਤਾਰ ਖੰਘ ਤੇ ਧਿਆਨ ਦੀ ਲੋੜ ਹੈ। ਗਰਮ ਤਰਲ ਪਦਾਰਥ, ਸ਼ਹਿਦ, ਅਤੇ ਨਮੀ ਵਾਲੀ ਹਵਾ ਦਾ ਸੇਵਨ ਕਰੋ। ਲੱਛਣ ਵਿਗੜਨ ਤੇ ਵੀਡੀਓ ਸਲਾਹ ਬੁਕ ਕਰੋ।"
                ],
                
                emergency: [
                    "🚨 ਮੈਡੀਕਲ ਐਮਰਜੈਂਸੀ ਲਈ, ਕਾਲ ਕਰੋ:\n• ਮੈਡੀਕਲ ਐਮਰਜੈਂਸੀ: 102\n• ਐਂਬੂਲੈਂਸ: 108\n• ਫਾਇਰ ਬ੍ਰਿਗੇਡ: 101\n• ਪੁਲਿਸ: 100\n\nਜਾਂ ਪੰਜਾਬ-ਖਾਸ ਸੰਪਰਕਾਂ ਲਈ ਐਮਰਜੈਂਸੀ ਬਟਨ ਤੇ ਕਲਿਕ ਕਰੋ।"
                ],
                
                consultation: [
                    "ਸਾਡੀ ਵੀਡੀਓ ਸਲਾਹ ਸੇਵਾ ਤੁਹਾਨੂੰ ਪ੍ਰਮਾਣਿਤ ਡਾਕਟਰਾਂ ਨਾਲ 24/7 ਜੋੜਦੀ ਹੈ। ਸੁਰੱਖਿਤ, ਪੇਸ਼ੇਵਰ ਮੈਡੀਕਲ ਸਲਾਹ ਲਈ ਸਾਡੇ ਪਲੇਟਫਾਰਮ ਰਾਹੀਂ ਬੁਕ ਕਰੋ।",
                    "ਸਾਡੇ ਮਾਹਰ ਡਾਕਟਰਾਂ ਨਾਲ ਵੀਡੀਓ ਸਲਾਹ ਉਪਲਬਧ ਹੈ। ਸ਼ੁਰੂਆਤ ਕਰਨ ਲਈ 'ਵੀਡੀਓ ਸਲਾਹ ਬੁਕ ਕਰੋ' ਤੇ ਕਲਿਕ ਕਰੋ।"
                ],
                
                prescription: [
                    "ਸਲਾਹ ਤੋਂ ਬਾਅਦ ਡਿਜਿਟਲ ਨੁਸਖ਼ੇ ਸਿੱਧੇ ਤੁਹਾਡੇ ਡਿਵਾਈਸ ਤੇ ਭੇਜੇ ਜਾਂਦੇ ਹਨ। ਇਹ ਸਾਰੇ ਮੁੱਖ ਦਵਾਖਾਨਿਆਂ ਵਿੱਚ ਸਵੀਕਾਰ ਕੀਤੇ ਜਾਂਦੇ ਹਨ ਅਤੇ ਸਾਂਝੇ ਕਰਨੇ ਆਸਾਨ ਹਨ।",
                    "ਸਾਡੇ ਡਾਕਟਰਾਂ ਤੋਂ ਡਿਜਿਟਲ ਨੁਸਖ਼ੇ ਪ੍ਰਾਪਤ ਕਰੋ - ਸੁਰੱਖਿਤ, ਸਹੂਲਤ ਭਰਪੂਰ, ਅਤੇ ਹਰ ਜਗ੍ਹਾ ਸਵੀਕਾਰਿਆ।"
                ],
                
                default: [
                    "ਮੈਂ ਸਮਝਦਾ ਹਾਂ ਕਿ ਤੁਹਾਨੂੰ ਮਦਦ ਚਾਹੀਦੀ ਹੈ। ਕੀ ਤੁਸੀਂ ਆਪਣੀ ਸਿਹਤ ਚਿੰਤਾ ਬਾਰੇ ਹੋਰ ਖਾਸ ਹੋ ਸਕਦੇ ਹੋ?",
                    "ਮੈਂ ਸਿਹਤ ਸੰਬੰਧੀ ਪ੍ਰਸ਼ਨਾਂ ਵਿੱਚ ਮਦਦ ਲਈ ਇੱਥੇ ਹਾਂ। ਕੀ ਤੁਸੀਂ ਹੋਰ ਵੇਰਵੇ ਦੇ ਸਕਦੇ ਹੋ?",
                    "ਖਾਸ ਮੈਡੀਕਲ ਸਲਾਹ ਲਈ, ਮੈਂ ਸਾਡੇ ਡਾਕਟਰਾਂ ਨਾਲ ਵੀਡੀਓ ਸਲਾਹ ਬੁਕ ਕਰਨ ਦੀ ਸਿਫ਼ਾਰਿਸ਼ ਕਰਦਾ ਹਾਂ।"
                ],
                
                thankyou: [
                    "ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ! ਯਾਦ ਰੱਖੋ, ਮੈਂ ਕਿਸੇ ਵੀ ਸਿਹਤ ਪ੍ਰਸ਼ਨ ਲਈ 24/7 ਇੱਥੇ ਹਾਂ।",
                    "ਮਦਦ ਕਰਕੇ ਖੁਸ਼ੀ ਹੋਈ! ਸਿਹਤਮੰਦ ਰਹੋ ਅਤੇ ਕਦੇ ਵੀ ਸੰਪਰਕ ਕਰਨ ਵਿੱਚ ਝਿਜਕ ਨਾ ਕਰੋ।"
                ]
            }
        };
        
        this.currentLanguage = 'en';
        this.isOpen = false;
        this.initializeChatbot();
    }
    
    initializeChatbot() {
        const trigger = document.getElementById('chatbotTrigger');
        const container = document.getElementById('chatbotContainer');
        const closeBtn = document.getElementById('closeChatbot');
        const sendBtn = document.getElementById('sendMessage');
        const input = document.getElementById('chatbotInput');
        
        if (trigger) {
            trigger.addEventListener('click', () => this.toggleChatbot());
        }
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.toggleChatbot());
        }
        
        if (sendBtn) {
            sendBtn.addEventListener('click', () => this.sendMessage());
        }
        
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }
        
        // Listen for language changes
        document.addEventListener('languageChanged', (e) => {
            this.currentLanguage = e.detail.language;
        });
        
        // Set initial language
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
    }
    
    toggleChatbot() {
        const container = document.getElementById('chatbotContainer');
        if (container) {
            this.isOpen = !this.isOpen;
            container.style.display = this.isOpen ? 'flex' : 'none';
            
            if (this.isOpen) {
                container.classList.add('scale-in');
                this.showInitialMessage();
            }
        }
    }
    
    showInitialMessage() {
        const welcomeMessage = this.getRandomResponse('greetings');
        this.addMessage(welcomeMessage, 'bot');
    }
    
    sendMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Add user message
        this.addMessage(message, 'user');
        input.value = '';
        
        // Process and respond
        setTimeout(() => {
            const response = this.processMessage(message);
            this.addMessage(response, 'bot');
        }, 1000);
    }
    
    processMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        // Greeting patterns
        if (this.matchesPatterns(lowerMessage, ['hello', 'hi', 'hey', 'namaste', 'sat sri akal', 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ', 'नमस्ते'])) {
            return this.getRandomResponse('greetings');
        }
        
        // Emergency patterns
        if (this.matchesPatterns(lowerMessage, ['emergency', 'help', 'urgent', 'ambulance', 'hospital', 'critical', 'एम्बुलेंस', 'अस्पताल', 'आपातकाल', 'ਐਂਬੂਲੈਂਸ', 'ਹਸਪਤਾਲ', 'ਐਮਰਜੈਂਸੀ'])) {
            return this.getRandomResponse('emergency');
        }
        
        // Fever patterns
        if (this.matchesPatterns(lowerMessage, ['fever', 'temperature', 'hot', 'chills', 'बुखार', 'तापमान', 'ठंड लगना', 'ਬੁਖ਼ਾਰ', 'ਤਾਪਮਾਨ', 'ਠੰਡ'])) {
            return this.getRandomResponse('fever');
        }
        
        // Headache patterns
        if (this.matchesPatterns(lowerMessage, ['headache', 'head pain', 'migraine', 'सिरदर्द', 'सिर दर्द', 'माइग्रेन', 'ਸਿਰ ਦਰਦ', 'ਮਾਈਗ੍ਰੇਨ'])) {
            return this.getRandomResponse('headache');
        }
        
        // Cough patterns
        if (this.matchesPatterns(lowerMessage, ['cough', 'cold', 'throat', 'khasi', 'खांसी', 'गला', 'जुकाम', 'ਖੰਘ', 'ਜ਼ੁਕਾਮ', 'ਗਲਾ'])) {
            return this.getRandomResponse('cough');
        }
        
        // Consultation patterns
        if (this.matchesPatterns(lowerMessage, ['consultation', 'doctor', 'appointment', 'video call', 'consult', 'परामर्श', 'डॉक्टर', 'अपॉइंटमेंट', 'ਸਲਾਹ', 'ਡਾਕਟਰ', 'ਮੁਲਾਕਾਤ'])) {
            return this.getRandomResponse('consultation');
        }
        
        // Prescription patterns
        if (this.matchesPatterns(lowerMessage, ['prescription', 'medicine', 'drugs', 'medication', 'नुस्खा', 'दवा', 'दवाई', 'ਨੁਸਖ਼ਾ', 'ਦਵਾਈ'])) {
            return this.getRandomResponse('prescription');
        }
        
        // Thank you patterns
        if (this.matchesPatterns(lowerMessage, ['thank', 'thanks', 'dhanyawad', 'shukriya', 'धन्यवाद', 'शुक्रिया', 'ਧੰਨਵਾਦ', 'ਸ਼ੁਕਰੀਆ'])) {
            return this.getRandomResponse('thankyou');
        }
        
        // Default response
        return this.getRandomResponse('default');
    }
    
    matchesPatterns(message, patterns) {
        return patterns.some(pattern => message.includes(pattern));
    }
    
    getRandomResponse(category) {
        const responses = this.responses[this.currentLanguage][category];
        if (!responses || responses.length === 0) {
            return this.responses.en[category][0];
        }
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    addMessage(message, sender) {
        const messagesContainer = document.getElementById('chatbotMessages');
        if (!messagesContainer) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message slide-up`;
        
        const messageContent = document.createElement('p');
        messageContent.innerHTML = message.replace(/\n/g, '<br>');
        messageDiv.appendChild(messageContent);
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Add typing indicator for bot messages
        if (sender === 'bot') {
            messageDiv.classList.add('typing-animation');
        }
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MediBot();
});

// Export for use in other files
window.MediBot = MediBot;