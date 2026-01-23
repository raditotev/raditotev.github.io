/* ============================================
   FREELANCE IT PROFESSIONAL - SCRIPT.JS
   Vanilla JavaScript | No Dependencies
   ============================================ */

(function() {
    'use strict';

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

        // Validation rules
        const validators = {
            name: function(value) {
                if (!value.trim()) {
                    return 'Please enter your name';
                }
                if (value.trim().length < 2) {
                    return 'Name must be at least 2 characters';
                }
                return '';
            },
            company: function(value) {
                // Company is optional, no validation needed
                return '';
            },
            email: function(value) {
                if (!value.trim()) {
                    return 'Please enter your email';
                }
                // Simple email regex
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    return 'Please enter a valid email address';
                }
                return '';
            },
            message: function(value) {
                if (!value.trim()) {
                    return 'Please enter a message';
                }
                if (value.trim().length < 10) {
                    return 'Message must be at least 10 characters';
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
            
            submitButton.innerHTML = '<span>Sending...</span>';
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
