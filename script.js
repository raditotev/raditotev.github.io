/* ============================================
   FREELANCE IT PROFESSIONAL - SCRIPT.JS
   Vanilla JavaScript | No Dependencies
   ============================================ */

(function() {
    'use strict';

    /* ============================================
       TRANSLATIONS
       ============================================ */
    const translations = {
        en: {
            accessibility: {
                skipLink: 'Skip to main content'
            },
            nav: {
                services: 'Services',
                about: 'About',
                contact: 'Contact'
            },
            hero: {
                headline: 'Practical IT Solutions for ',
                headlineHighlight: 'Growing Businesses',
                subheadline: 'I help small and medium-sized companies build, secure, and maintain reliable IT systems—without unnecessary complexity.',
                cta: {
                    primary: 'Get in Touch',
                    secondary: 'View Services'
                },
                scroll: 'Scroll'
            },
            services: {
                label: 'What I Offer',
                heading: 'How I Can Help',
                description: 'Reliable, self-hosted solutions that give you complete control over your data and infrastructure.',
                cards: {
                    cloud: {
                        title: 'Private Cloud Storage & File Sync',
                        description: 'Securely store, sync, and share files across devices and teams. Includes built-in calendars, contacts, tasks, and collaborative document editing — a full replacement for commercial cloud drives with no subscription fees or data sharing.'
                    },
                    collaboration: {
                        title: 'Team Collaboration & Knowledge Workspace',
                        description: 'All-in-one platform for notes, wikis, project boards, databases, whiteboards, and mind maps. Perfect for team brainstorming, documentation, task tracking, and replacing scattered productivity tools.'
                    },
                    password: {
                        title: 'Secure Password Management',
                        description: 'Centralized, encrypted password vault for individuals and teams. Features shared credentials, 2FA storage, secure sharing, and emergency access — enterprise-grade security without third-party risks or recurring costs.'
                    },
                    remote: {
                        title: 'Remote Access & Secure Networking',
                        description: 'Zero-configuration private network that connects remote workers, devices, and offices effortlessly. Enables secure access to internal resources from anywhere without complex VPN setups or port forwarding.'
                    },
                    messaging: {
                        title: 'Team Messaging & Communication',
                        description: 'Real-time chat with channels, direct messages, file sharing, and integrations. Full control over conversations and data — a privacy-focused alternative to mainstream team chat platforms.'
                    },
                    code: {
                        title: 'Private Code Hosting & Development',
                        description: 'Self-hosted Git repositories with issue tracking, pull requests, wikis, and basic CI/CD. Ideal for internal projects, client work, or dev teams needing private repos without SaaS limitations.'
                    },
                    lowcode: {
                        title: 'Low-Code Internal Tools & Dashboards',
                        description: 'Build custom admin panels, forms, CRUD apps, and business dashboards connected to your data sources. Rapidly automate workflows, reporting, and internal processes without heavy coding.'
                    },
                    finance: {
                        title: 'Personal & Business Finance Tracking',
                        description: 'Budgeting, expense/income tracking, financial reports, and portfolio monitoring. Privacy-first tool for solopreneurs, small businesses, or owners managing cash flow and investments.'
                    },
                    analytics: {
                        title: 'Privacy-Focused Web Analytics',
                        description: 'Cookie-free website traffic insights and performance tracking. GDPR-compliant alternative for monitoring visitors without sending data to external providers.'
                    }
                }
            },
            trust: {
                heading: 'Why Self-Hosted?',
                cards: {
                    sovereignty: {
                        title: 'Data Sovereignty',
                        description: 'Your data lives on your servers. No third-party access, mining, or selling of your information.'
                    },
                    cost: {
                        title: 'Cost Efficiency',
                        description: 'Stop paying per-user monthly fees. Invest in infrastructure once and scale without penalty.'
                    },
                    flexibility: {
                        title: 'Architectural Flexibility',
                        description: 'Tailor the stack precisely to your requirements.'
                    }
                }
            },
            contact: {
                label: 'Get in Touch',
                heading: "Let's Talk About Your IT Needs",
                description: "Whether you need help with a specific problem or want a long-term IT partner, feel free to reach out. I'll respond personally and we can explore the best next step—no obligation.",
                form: {
                    name: {
                        label: 'Name *',
                        placeholder: 'Your name'
                    },
                    company: {
                        label: 'Company',
                        placeholder: 'Your company (optional)'
                    },
                    email: {
                        label: 'Email *',
                        placeholder: 'you@company.com'
                    },
                    message: {
                        label: 'Message *',
                        placeholder: 'Tell me about your IT needs...'
                    },
                    submit: 'Send Message',
                    sending: 'Sending...'
                },
                success: {
                    title: 'Message Sent!',
                    description: "Thank you for reaching out. I'll get back to you as soon as possible."
                },
                validation: {
                    nameRequired: 'Please enter your name',
                    nameMinLength: 'Name must be at least 2 characters',
                    emailRequired: 'Please enter your email',
                    emailInvalid: 'Please enter a valid email address',
                    messageRequired: 'Please enter a message',
                    messageMinLength: 'Message must be at least 10 characters'
                }
            },
            footer: {
                copyright: 'IT Solutions. All rights reserved.'
            }
        },
        bg: {
            accessibility: {
                skipLink: 'Към основното съдържание'
            },
            nav: {
                services: 'Услуги',
                about: 'За мен',
                contact: 'Контакт'
            },
            hero: {
                headline: 'Практични ИТ решения за ',
                headlineHighlight: 'Развиващи се Бизнеси',
                subheadline: 'Помагам на малки и средни компании да изграждат, защитават и поддържат надеждни ИТ системи — без излишни усложнения.',
                cta: {
                    primary: 'Свържете се',
                    secondary: 'Вижте услугите'
                },
                scroll: 'Превъртете'
            },
            services: {
                label: 'Какво предлагам',
                heading: 'С какво мога да помогна',
                description: 'Надеждни решения с пълен контрол върху данните и инфраструктурата ви.',
                cards: {
                    cloud: {
                        title: 'Частно облачно съхранение',
                        description: 'Сигурно съхранение, синхронизация и споделяне на файлове между устройства и екипи. Включва вградени календари, контакти, задачи и съвместно редактиране на документи — пълна замяна на комерсиални облачни услуги без абонаментни такси.'
                    },
                    collaboration: {
                        title: 'Екипно сътрудничество',
                        description: 'Платформа всичко-в-едно за бележки, уикита, проектни дъски, бази данни, дъски за рисуване и мисловни карти. Идеална за екипен брейнсторминг, документация и проследяване на задачи.'
                    },
                    password: {
                        title: 'Сигурно управление на пароли',
                        description: 'Централизирано, криптирано хранилище за пароли за индивиди и екипи. Включва споделени идентификационни данни, съхранение на 2FA, сигурно споделяне и авариен достъп — корпоративна сигурност без рискове от трети страни.'
                    },
                    remote: {
                        title: 'Отдалечен достъп и сигурни мрежи',
                        description: 'Частна мрежа без конфигурация, която свързва отдалечени работници, устройства и офиси лесно. Осигурява сигурен достъп до вътрешни ресурси отвсякъде без сложни VPN настройки.'
                    },
                    messaging: {
                        title: 'Екипни съобщения и комуникация',
                        description: 'Чат в реално време с канали, директни съобщения, споделяне на файлове и интеграции. Пълен контрол върху разговорите и данните — алтернатива на масовите чат платформи с фокус върху поверителността.'
                    },
                    code: {
                        title: 'Частен хостинг на код',
                        description: 'Собствени Git хранилища с проследяване на проблеми, pull заявки, уикита и основен CI/CD. Идеално за вътрешни проекти, клиентска работа или екипи, нуждаещи се от частни хранилища.'
                    },
                    lowcode: {
                        title: 'Low-Code инструменти и табла',
                        description: 'Създавайте персонализирани админ панели, формуляри, CRUD приложения и бизнес табла, свързани с вашите източници на данни. Бърза автоматизация на работни процеси без тежко програмиране.'
                    },
                    finance: {
                        title: 'Проследяване на финанси',
                        description: 'Бюджетиране, проследяване на разходи/приходи, финансови отчети и мониторинг на портфолио. Инструмент с фокус върху поверителността за предприемачи и малки бизнеси.'
                    },
                    analytics: {
                        title: 'Уеб анализи с фокус върху поверителността',
                        description: 'Анализ на уеб трафика без бисквитки. GDPR-съвместима алтернатива за мониторинг на посетители без изпращане на данни към външни доставчици.'
                    }
                }
            },
            trust: {
                heading: 'Защо собствен хостинг?',
                cards: {
                    sovereignty: {
                        title: 'Суверенитет на данните',
                        description: 'Данните ви живеят на вашите сървъри. Без достъп от трети страни, без извличане или продаване на информацията ви.'
                    },
                    cost: {
                        title: 'Ефективност на разходите',
                        description: 'Спрете да плащате месечни такси на потребител. Инвестирай еднократно в инфраструктура и расти без ограничения.'
                    },
                    flexibility: {
                        title: 'Архитектурна гъвкавост',
                        description: 'Адаптирайте софтуера си точно според вашите изисквания.'
                    }
                }
            },
            contact: {
                label: 'Свържете се',
                heading: 'Нека поговорим за вашите ИТ нужди',
                description: 'Независимо дали имате нужда от помощ с конкретен проблем или искате дългосрочен ИТ партньор, не се колебайте да се свържете. Ще отговоря лично и можем да проучим най-добрата следваща стъпка — без задължение.',
                form: {
                    name: {
                        label: 'Име *',
                        placeholder: 'Вашето име'
                    },
                    company: {
                        label: 'Компания',
                        placeholder: 'Вашата компания (незадължително)'
                    },
                    email: {
                        label: 'Имейл *',
                        placeholder: 'вие@компания.com'
                    },
                    message: {
                        label: 'Съобщение *',
                        placeholder: 'Разкажете ми за вашите ИТ нужди...'
                    },
                    submit: 'Изпратете съобщение',
                    sending: 'Изпращане...'
                },
                success: {
                    title: 'Съобщението е изпратено!',
                    description: 'Благодаря, че се свързахте. Ще ви отговоря възможно най-скоро.'
                },
                validation: {
                    nameRequired: 'Моля, въведете вашето име',
                    nameMinLength: 'Името трябва да е поне 2 символа',
                    emailRequired: 'Моля, въведете вашия имейл',
                    emailInvalid: 'Моля, въведете валиден имейл адрес',
                    messageRequired: 'Моля, въведете съобщение',
                    messageMinLength: 'Съобщението трябва да е поне 10 символа'
                }
            },
            footer: {
                copyright: 'ИТ Решения. Всички права запазени.'
            }
        }
    };

    /* ============================================
       LANGUAGE SYSTEM
       ============================================ */
    // Detect language from URL path
    function detectUrlLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('lang');
        if (lang === 'bg' || lang === 'en') {
            return lang;
        }
    }

    // Detect browser language preference
    function detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        // Check if browser language starts with 'bg' (e.g., 'bg', 'bg-BG')
        return browserLang && browserLang.toLowerCase().startsWith('bg') ? 'bg' : 'en';
    }

    // Priority: 1) URL path, 2) localStorage (user's explicit choice), 3) browser language
    let currentLang = detectUrlLanguage() || localStorage.getItem('lang') || detectBrowserLanguage();

    // Get nested translation value
    function getTranslation(key) {
        const keys = key.split('.');
        let value = translations[currentLang];
        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return null;
            }
        }
        return value;
    }

    // Apply translations to the page
    function applyTranslations() {
        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(function(element) {
            const key = element.getAttribute('data-i18n');
            const translation = getTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(element) {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = getTranslation(key);
            if (translation) {
                element.placeholder = translation;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = currentLang;
        document.documentElement.setAttribute('data-lang', currentLang);

        // Update language switcher display
        const langSwitcherCurrent = document.querySelector('.lang-switcher-current');
        if (langSwitcherCurrent) {
            langSwitcherCurrent.textContent = currentLang.toUpperCase();
        }
    }

    // Switch language
    function switchLanguage() {
        currentLang = currentLang === 'en' ? 'bg' : 'en';
        localStorage.setItem('lang', currentLang);
        applyTranslations();
    }

    // Initialize language switcher
    function initLanguageSwitcher() {
        const langSwitcher = document.querySelector('.lang-switcher');
        if (langSwitcher) {
            langSwitcher.addEventListener('click', switchLanguage);
        }
        // Apply initial translations
        applyTranslations();
    }

    // Get validation message based on current language
    function getValidationMessage(key) {
        return getTranslation('contact.validation.' + key) || key;
    }

    /* ============================================
       DOM ELEMENTS
       ============================================ */
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    const contactForm = document.getElementById('contact-form');
    const fadeElements = document.querySelectorAll('.fade-in');

    /* ============================================
       NAVIGATION - Scroll Effect
       ============================================ */
    function handleNavScroll() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    // Throttle scroll events for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                handleNavScroll();
                scrollTimeout = null;
            }, 10);
        }
    });

    /* ============================================
       NAVIGATION - Mobile Menu Toggle
       ============================================ */
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            const isOpen = navLinks.classList.contains('open');

            navLinks.classList.toggle('open');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', !isOpen);

            // Prevent body scroll when menu is open
            document.body.style.overflow = isOpen ? '' : 'hidden';
        });

        // Close mobile menu when clicking a link
        navLinkItems.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    /* ============================================
       SMOOTH SCROLL - Anchor Links
       ============================================ */
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Skip if it's just "#"
            if (targetId === '#') return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                const navHeight = nav ? nav.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ============================================
       SCROLL REVEAL - Fade In Animation
       ============================================ */
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // Pixels from bottom of viewport

        fadeElements.forEach(function(element) {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('visible');
            }
        });
    }

    // Initial check on page load
    revealOnScroll();

    // Check on scroll (throttled)
    let revealTimeout;
    window.addEventListener('scroll', function() {
        if (!revealTimeout) {
            revealTimeout = setTimeout(function() {
                revealOnScroll();
                revealTimeout = null;
            }, 50);
        }
    });

    /* ============================================
       CONTACT FORM - Validation & Submission
       ============================================ */
    if (contactForm) {
        const formFields = {
            name: contactForm.querySelector('#name'),
            company: contactForm.querySelector('#company'),
            email: contactForm.querySelector('#email'),
            message: contactForm.querySelector('#message')
        };

        const formSuccess = document.querySelector('.form-success');

        // Validation rules (using translations)
        const validators = {
            name: function(value) {
                if (!value.trim()) {
                    return getValidationMessage('nameRequired');
                }
                if (value.trim().length < 2) {
                    return getValidationMessage('nameMinLength');
                }
                return '';
            },
            company: function(value) {
                // Company is optional, no validation needed
                return '';
            },
            email: function(value) {
                if (!value.trim()) {
                    return getValidationMessage('emailRequired');
                }
                // Simple email regex
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    return getValidationMessage('emailInvalid');
                }
                return '';
            },
            message: function(value) {
                if (!value.trim()) {
                    return getValidationMessage('messageRequired');
                }
                if (value.trim().length < 10) {
                    return getValidationMessage('messageMinLength');
                }
                return '';
            }
        };

        // Show error for a field
        function showError(field, message) {
            const formGroup = field.closest('.form-group');
            const errorElement = formGroup.querySelector('.form-error');

            formGroup.classList.add('has-error');
            field.classList.add('error');
            if (errorElement) {
                errorElement.textContent = message;
            }
        }

        // Clear error for a field
        function clearError(field) {
            const formGroup = field.closest('.form-group');
            const errorElement = formGroup.querySelector('.form-error');

            formGroup.classList.remove('has-error');
            field.classList.remove('error');
            if (errorElement) {
                errorElement.textContent = '';
            }
        }

        // Validate a single field
        function validateField(fieldName, value) {
            const validator = validators[fieldName];
            if (validator) {
                return validator(value);
            }
            return '';
        }

        // Validate all fields
        function validateForm() {
            let isValid = true;

            Object.keys(formFields).forEach(function(fieldName) {
                const field = formFields[fieldName];
                if (field) {
                    const error = validateField(fieldName, field.value);
                    if (error) {
                        showError(field, error);
                        isValid = false;
                    } else {
                        clearError(field);
                    }
                }
            });

            return isValid;
        }

        // Real-time validation on blur
        Object.keys(formFields).forEach(function(fieldName) {
            const field = formFields[fieldName];
            if (field) {
                field.addEventListener('blur', function() {
                    const error = validateField(fieldName, field.value);
                    if (error) {
                        showError(field, error);
                    } else {
                        clearError(field);
                    }
                });

                // Clear error on input
                field.addEventListener('input', function() {
                    if (field.classList.contains('error')) {
                        clearError(field);
                    }
                });
            }
        });

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate all fields
            if (!validateForm()) {
                // Focus first error field
                const firstError = contactForm.querySelector('.form-input.error, .form-textarea.error');
                if (firstError) {
                    firstError.focus();
                }
                return;
            }

            // Collect form data
            const formData = {
                name: formFields.name.value.trim(),
                company: formFields.company.value.trim(),
                email: formFields.email.value.trim(),
                message: formFields.message.value.trim(),
                timestamp: new Date().toISOString()
            };

            // Placeholder submission function
            // In production, this would send data to a backend or service like Formspree
            handleFormSubmission(formData);
        });

        // Placeholder form submission handler
        function handleFormSubmission(data) {
            // Log the form data (for development)
            console.log('Form submitted:', data);

            // Simulate a brief delay (like an API call)
            const submitButton = contactForm.querySelector('.form-submit');
            const originalButtonText = submitButton.innerHTML;
            const sendingText = getTranslation('contact.form.sending') || 'Sending...';

            submitButton.innerHTML = '<span>' + sendingText + '</span>';
            submitButton.disabled = true;

            setTimeout(function() {
                // Hide the form
                contactForm.style.display = 'none';

                // Show success message
                if (formSuccess) {
                    formSuccess.classList.add('visible');
                }

                // Reset button (in case form is shown again)
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;

                // Reset form fields
                contactForm.reset();
            }, 1000);

            /*
             * PRODUCTION IMPLEMENTATION OPTIONS:
             *
             * 1. Formspree (free tier available):
             *    fetch('https://formspree.io/f/YOUR_FORM_ID', {
             *        method: 'POST',
             *        body: JSON.stringify(data),
             *        headers: { 'Content-Type': 'application/json' }
             *    });
             *
             * 2. Netlify Forms:
             *    Add data-netlify="true" to your form element
             *
             * 3. Custom backend endpoint:
             *    fetch('/api/contact', {
             *        method: 'POST',
             *        body: JSON.stringify(data),
             *        headers: { 'Content-Type': 'application/json' }
             *    });
             */
        }
    }

    /* ============================================
       FOOTER - Dynamic Year
       ============================================ */
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* ============================================
       INITIALIZE LANGUAGE SYSTEM
       ============================================ */
    initLanguageSwitcher();

    /* ============================================
       KEYBOARD ACCESSIBILITY
       ============================================ */
    // Handle Escape key to close mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            navToggle.focus();
        }
    });

})();
