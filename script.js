/* ============================================
   RADI TOTEV — radi.pro
   Vanilla JavaScript | No dependencies
   ============================================ */

;(function () {
  'use strict'

  /* ============================================
       TRANSLATIONS
       ============================================ */
  const translations = {
    en: {
      accessibility: { skipLink: 'Skip to main content' },
      nav: {
        services: 'Services',
        approach: 'Approach',
        contact: 'Contact',
        ai: 'AI Services',
      },
      hero: {
        eyebrow: 'Independent IT practice',
        headline: 'Infrastructure you actually ',
        headlineEm: 'own',
        headlineEnd: '.',
        subheadline:
          'I build and maintain self-hosted systems for small and mid-sized companies — the tools your team uses every day, running on servers you control, without per-seat fees or third parties reading your data.',
        cta: {
          primary: 'Start a conversation',
          secondary: 'See what I run',
        },
      },
      services: {
        label: '01 — Services',
        heading: 'Eleven systems, one stack.',
        description:
          "Each of these replaces a subscription you're probably already paying for. They run on the same infrastructure, share one login, and stay yours. Open any line to see what it covers.",
        items: {
          cloud: {
            title: 'Private cloud storage & file sync',
            description:
              'Files, calendars, contacts and shared documents in one place, synced across every device your team uses. Collaborative editing included. Behaves like the commercial drives, with no seat pricing and no data leaving your server.',
          },
          workspace: {
            title: 'Knowledge base & project workspace',
            description:
              'Notes, wikis, boards, databases and whiteboards in a single workspace. The place documentation actually gets written and tasks stop living in four different tools.',
          },
          password: {
            title: 'Password & credential management',
            description:
              'An encrypted vault for the whole company: shared credentials, 2FA codes, secure hand-offs and emergency access. The same security model the enterprise tools use, without trusting a vendor with the keys.',
          },
          remote: {
            title: 'Remote access & private networking',
            description:
              'A private network that connects staff, offices and devices without VPN configuration or port forwarding. Internal systems reachable from anywhere, invisible to everyone else.',
          },
          messaging: {
            title: 'Team messaging',
            description:
              'Channels, direct messages, file sharing and integrations — with the message history stored on your side rather than rented back to you a year at a time.',
          },
          code: {
            title: 'Private code hosting & CI',
            description:
              'Git repositories with issues, pull requests, wikis and build pipelines. Unlimited private repos for internal work and client projects, no minute quotas.',
          },
          tools: {
            title: 'Internal tools & dashboards',
            description:
              'Admin panels, forms and reporting views built on top of the data you already have. Useful for the workflows that currently live in a spreadsheet somebody guards.',
          },
          finance: {
            title: 'Finance & expense tracking',
            description:
              'Budgets, income and expense tracking, reports and portfolio monitoring for owner-managed businesses. Financial detail that never touches a third-party account.',
          },
          analytics: {
            title: 'Cookie-free web analytics',
            description:
              'Traffic and performance figures without cookies, consent banners or a data-sharing arrangement. GDPR-clean by construction. This site runs it.',
          },
          backup: {
            title: 'Backup & disaster recovery',
            description:
              'Encrypted, versioned, off-site backups of every system above, with restores tested on a schedule rather than assumed. The part nobody thinks about until the morning they need it.',
          },
          monitoring: {
            title: 'Monitoring, updates & alerting',
            description:
              'Uptime checks, resource alerts and a patching routine for the whole stack. You hear about a problem from me, before your team files a ticket about it.',
          },
        },
      },
      ai: {
        label: 'Separate practice',
        heading: 'AI, on the same terms.',
        description:
          "Private models, retrieval over your own documents, and assistants that run inside your infrastructure rather than sending your work to somebody else's API. Kept on its own site.",
      },
      approach: {
        label: '02 — Approach',
        heading: 'Why anyone would host their own.',
        cards: {
          sovereignty: {
            title: 'Your data stays yours',
            description:
              "It sits on hardware you control. Nobody mines it, trains on it, or changes the terms under which you're allowed to keep it.",
          },
          cost: {
            title: 'Growth stops costing extra',
            description:
              'Per-seat pricing means every hire raises the bill on six tools at once. Infrastructure is bought once and scales without a renegotiation.',
          },
          flexibility: {
            title: 'The stack fits the company',
            description:
              "You run the components you need and skip the rest. No working around a roadmap set by somebody else's average customer.",
          },
        },
      },
      contact: {
        label: '03 — Contact',
        heading: "Tell me what's breaking.",
        description:
          "One specific problem or a long-term arrangement — either is a fine place to start. I read and answer these myself, usually within a day, and there's no obligation attached to asking.",
        facts: {
          based: { label: 'Based in', value: 'Bulgaria — working remotely' },
          languages: { label: 'Languages', value: 'English, Bulgarian' },
          response: { label: 'Response time', value: 'Within one working day' },
        },
        form: {
          name: { label: 'Name', placeholder: 'Your name' },
          company: {
            label: 'Company',
            optional: '(optional)',
            placeholder: 'Where you work',
          },
          email: { label: 'Email', placeholder: 'you@company.com' },
          message: {
            label: 'Message',
            placeholder: 'What are you trying to fix or move off?',
          },
          submit: 'Send message',
          sending: 'Sending…',
        },
        success: {
          label: 'Received',
          title: "Thanks — it's with me.",
          description: "I'll read it properly and reply within a working day.",
        },
        validation: {
          nameRequired: 'Please enter your name',
          nameMinLength: 'Name must be at least 2 characters',
          emailRequired: 'Please enter your email',
          emailInvalid: 'Please enter a valid email address',
          messageRequired: 'Please enter a message',
          messageMinLength: 'Message must be at least 10 characters',
        },
        error: 'An error occurred while sending. Please try again.',
      },
    },

    bg: {
      accessibility: { skipLink: 'Към основното съдържание' },
      nav: {
        services: 'Услуги',
        approach: 'Подход',
        contact: 'Контакт',
        ai: 'AI услуги',
      },
      hero: {
        eyebrow: 'Независима ИТ практика',
        headline: 'Инфраструктура, която наистина е ',
        headlineEm: 'ваша',
        headlineEnd: '.',
        subheadline:
          'Изграждам и поддържам собствено хоствани системи за малки и средни компании — инструментите, които екипът ви ползва всеки ден, работещи на сървъри под ваш контрол, без такси на потребител и без трети страни, четящи данните ви.',
        cta: {
          primary: 'Пишете ми',
          secondary: 'Вижте услугите',
        },
      },
      services: {
        label: '01 — Услуги',
        heading: 'Единадесет системи, една инфраструктура.',
        description:
          'Всяка от тях заменя абонамент, който вероятно вече плащате. Работят на една инфраструктура, с един логин, и остават ваши. Отворете ред, за да видите какво покрива.',
        items: {
          cloud: {
            title: 'Частно облачно съхранение и синхронизация',
            description:
              'Файлове, календари, контакти и общи документи на едно място, синхронизирани на всички устройства на екипа. Съвместно редактиране е включено. Работи като комерсиалните облаци, без цена на потребител и без данни да напускат сървъра ви.',
          },
          workspace: {
            title: 'База знания и работно пространство',
            description:
              'Бележки, уикита, дъски, бази данни и бели дъски в едно пространство. Мястото, където документацията действително се пише и задачите спират да живеят в четири различни инструмента.',
          },
          password: {
            title: 'Управление на пароли и достъпи',
            description:
              'Криптирано хранилище за цялата компания: споделени данни за достъп, 2FA кодове, сигурно предаване и авариен достъп. Същият модел на сигурност като при корпоративните инструменти, без ключовете да са у доставчик.',
          },
          remote: {
            title: 'Отдалечен достъп и частна мрежа',
            description:
              'Частна мрежа, която свързва служители, офиси и устройства без VPN конфигурация или пренасочване на портове. Вътрешните системи са достъпни отвсюде и невидими за всички останали.',
          },
          messaging: {
            title: 'Екипни съобщения',
            description:
              'Канали, директни съобщения, споделяне на файлове и интеграции — с историята на съобщенията, съхранявана при вас, а не преотдавана ви под наем година за година.',
          },
          code: {
            title: 'Частен хостинг на код и CI',
            description:
              'Git хранилища с тикети, pull заявки, уикита и пайплайни за билд. Неограничени частни репозитории за вътрешна и клиентска работа, без лимити в минути.',
          },
          tools: {
            title: 'Вътрешни инструменти и табла',
            description:
              'Админ панели, формуляри и отчети върху данните, които вече имате. Полезни за процесите, които в момента живеят в електронна таблица, охранявана от един човек.',
          },
          finance: {
            title: 'Проследяване на финанси и разходи',
            description:
              'Бюджети, проследяване на приходи и разходи, отчети и мониторинг на портфейл за бизнеси, управлявани от собственика. Финансови данни, които никога не попадат в чужд акаунт.',
          },
          analytics: {
            title: 'Уеб анализи без бисквитки',
            description:
              'Данни за трафик и производителност без бисквитки, банери за съгласие или споделяне на данни. GDPR-съвместими по конструкция. Този сайт използва точно това.',
          },
          backup: {
            title: 'Резервни копия и възстановяване',
            description:
              'Криптирани, версионирани резервни копия извън обекта за всички системи по-горе, с тестване на възстановяването по график, а не по презумпция. Частта, за която никой не мисли до сутринта, в която потрябва.',
          },
          monitoring: {
            title: 'Мониторинг, обновления и известия',
            description:
              'Проверки за достъпност, известия за ресурси и редовни обновления за целия стек. За проблем чувате от мен, преди екипът ви да подаде заявка за него.',
          },
        },
      },
      ai: {
        label: 'Отделна практика',
        heading: 'AI, при същите условия.',
        description:
          'Частни модели, търсене в собствените ви документи и асистенти, които работят във вашата инфраструктура, вместо да изпращат работата ви към чужд API. Има си собствен сайт.',
      },
      approach: {
        label: '02 — Подход',
        heading: 'Защо някой би хоствал сам.',
        cards: {
          sovereignty: {
            title: 'Данните остават ваши',
            description:
              'Стоят на хардуер под ваш контрол. Никой не ги извлича, не тренира върху тях и не променя условията, при които имате право да ги запазите.',
          },
          cost: {
            title: 'Растежът спира да струва повече',
            description:
              'Цената на потребител означава, че всеки нов човек вдига сметката по шест инструмента наведнъж. Инфраструктурата се купува еднократно и се мащабира без преговори.',
          },
          flexibility: {
            title: 'Стакът пасва на компанията',
            description:
              'Пускате компонентите, които ви трябват, и пропускате останалите. Без да заобикаляте чужда продуктова програма.',
          },
        },
      },
      contact: {
        label: '03 — Контакт',
        heading: 'Кажете ми какво не работи.',
        description:
          'Конкретен проблем или дългосрочно партньорство — и двете са добро начало. Чета и отговарям лично, обикновено в рамките на ден, и въпросът не води до задължение.',
        facts: {
          based: { label: 'Базиран в', value: 'България — дистанционно' },
          languages: { label: 'Езици', value: 'Английски, български' },
          response: { label: 'Време за отговор', value: 'До един работен ден' },
        },
        form: {
          name: { label: 'Име', placeholder: 'Вашето име' },
          company: {
            label: 'Компания',
            optional: '(незадължително)',
            placeholder: 'Къде работите',
          },
          email: { label: 'Имейл', placeholder: 'вие@компания.com' },
          message: {
            label: 'Съобщение',
            placeholder: 'Какво искате да поправите или да мигрирате?',
          },
          submit: 'Изпрати съобщение',
          sending: 'Изпращане…',
        },
        success: {
          label: 'Получено',
          title: 'Благодаря — получено е.',
          description: 'Ще го прочета внимателно и ще отговоря до един работен ден.',
        },
        validation: {
          nameRequired: 'Моля, въведете вашето име',
          nameMinLength: 'Името трябва да е поне 2 символа',
          emailRequired: 'Моля, въведете вашия имейл',
          emailInvalid: 'Моля, въведете валиден имейл адрес',
          messageRequired: 'Моля, въведете съобщение',
          messageMinLength: 'Съобщението трябва да е поне 10 символа',
        },
        error: 'Възникна грешка при изпращането. Моля, опитайте отново.',
      },
    },
  }

  /* ============================================
       ANALYTICS HELPER
       ============================================ */
  function trackEvent(eventName, props) {
    if (typeof window.plausible === 'function') {
      window.plausible(eventName, { props: props || {} })
    }
  }

  /* ============================================
       LANGUAGE SYSTEM
       ============================================ */
  function detectUrlLanguage() {
    const lang = new URLSearchParams(window.location.search).get('lang')
    if (lang === 'bg' || lang === 'en') return lang
  }

  function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage
    return browserLang && browserLang.toLowerCase().startsWith('bg') ? 'bg' : 'en'
  }

  let currentLang =
    detectUrlLanguage() || localStorage.getItem('lang') || detectBrowserLanguage()

  function getTranslation(key) {
    const keys = key.split('.')
    let value = translations[currentLang]
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return null
      }
    }
    return typeof value === 'string' ? value : null
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const t = getTranslation(el.getAttribute('data-i18n'))
      if (t) el.textContent = t
    })

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const t = getTranslation(el.getAttribute('data-i18n-placeholder'))
      if (t) el.placeholder = t
    })

    document.documentElement.lang = currentLang
    document.documentElement.setAttribute('data-lang', currentLang)

    const current = document.querySelector('.lang-switcher-current')
    if (current) current.textContent = currentLang.toUpperCase()
  }

  function switchLanguage() {
    const previousLang = currentLang
    currentLang = currentLang === 'en' ? 'bg' : 'en'
    localStorage.setItem('lang', currentLang)
    applyTranslations()
    trackEvent('Language Switch', { from: previousLang, to: currentLang })
  }

  function initLanguageSwitcher() {
    const langSwitcher = document.querySelector('.lang-switcher')
    if (langSwitcher) langSwitcher.addEventListener('click', switchLanguage)
    applyTranslations()
  }

  function getValidationMessage(key) {
    return getTranslation('contact.validation.' + key) || key
  }

  /* ============================================
       DOM ELEMENTS
       ============================================ */
  const nav = document.querySelector('.nav')
  const navToggle = document.querySelector('.nav-toggle')
  const navLinks = document.querySelector('.nav-links')
  const navLinkItems = document.querySelectorAll('.nav-link')
  const contactForm = document.getElementById('contact-form')
  const riseElements = document.querySelectorAll('.rise')

  /* ============================================
       HERO VIDEO — keep it looping
       ============================================ */
  const heroVideo = document.querySelector('.hero-media video')
  if (heroVideo) {
    heroVideo.loop = true
    heroVideo.muted = true

    const play = function () {
      const attempt = heroVideo.play()
      if (attempt && typeof attempt.catch === 'function') attempt.catch(function () {})
    }

    // Safari occasionally ignores the loop attribute after a tab switch.
    heroVideo.addEventListener('ended', function () {
      heroVideo.currentTime = 0
      play()
    })

    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) play()
    })

    play()
  }

  /* ============================================
       NAVIGATION — scroll state
       ============================================ */
  function handleNavScroll() {
    if (!nav) return
    nav.classList.toggle('scrolled', window.scrollY > 50)
  }

  let scrollTimeout
  window.addEventListener('scroll', function () {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(function () {
        handleNavScroll()
        scrollTimeout = null
      }, 10)
    }
  })
  handleNavScroll()

  /* ============================================
       NAVIGATION — mobile menu
       ============================================ */
  function closeMenu() {
    if (!navLinks || !navToggle) return
    navLinks.classList.remove('open')
    navToggle.classList.remove('active')
    navToggle.setAttribute('aria-expanded', 'false')
    document.body.style.overflow = ''
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.contains('open')
      navLinks.classList.toggle('open')
      navToggle.classList.toggle('active')
      navToggle.setAttribute('aria-expanded', String(!isOpen))
      document.body.style.overflow = isOpen ? '' : 'hidden'
      trackEvent('Mobile Menu', { action: isOpen ? 'close' : 'open' })
    })

    navLinkItems.forEach(function (link) {
      link.addEventListener('click', function () {
        trackEvent('Navigation Click', {
          link: this.textContent.trim(),
          href: this.getAttribute('href'),
          location: 'mobile-menu',
        })
        closeMenu()
      })
    })

    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && navLinks.classList.contains('open')) closeMenu()
    })
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('open')) {
      closeMenu()
      navToggle.focus()
    }
  })

  /* ============================================
       SMOOTH SCROLL — anchor links
       ============================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href')
      if (targetId === '#') return

      const target = document.querySelector(targetId)
      if (!target) return

      e.preventDefault()

      const navHeight = nav ? nav.offsetHeight : 0
      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight
      window.scrollTo({ top: top, behavior: 'smooth' })

      const isCTA = this.classList.contains('btn')
      trackEvent('Anchor Click', {
        target: targetId,
        link: this.textContent.trim(),
        location: isCTA ? 'cta' : 'navigation',
      })
    })
  })

  /* ============================================
       SERVICES ACCORDION
       ============================================ */
  const svcRows = document.querySelectorAll('.svc-row')

  function closeRow(row) {
    row.setAttribute('aria-expanded', 'false')
    const body = document.getElementById(row.getAttribute('aria-controls'))
    if (body) body.classList.remove('open')
  }

  svcRows.forEach(function (row) {
    const body = document.getElementById(row.getAttribute('aria-controls'))

    row.addEventListener('click', function () {
      const isOpen = row.getAttribute('aria-expanded') === 'true'

      // Single-open accordion
      svcRows.forEach(function (other) {
        if (other !== row) closeRow(other)
      })

      row.setAttribute('aria-expanded', String(!isOpen))
      if (body) body.classList.toggle('open', !isOpen)

      if (!isOpen) {
        const title = row.querySelector('.svc-title')
        trackEvent('Service Expand', { service: title ? title.textContent.trim() : '' })
      }
    })
  })

  /* ============================================
       SCROLL REVEAL
       ============================================ */
  if (riseElements.length) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15 },
      )
      riseElements.forEach(function (el) {
        observer.observe(el)
      })
    } else {
      riseElements.forEach(function (el) {
        el.classList.add('in')
      })
    }
  }

  /* ============================================
       CONTACT FORM — validation & submission
       ============================================ */
  if (contactForm) {
    const formFields = {
      name: contactForm.querySelector('#name'),
      company: contactForm.querySelector('#company'),
      email: contactForm.querySelector('#email'),
      message: contactForm.querySelector('#message'),
    }

    const formSuccess = document.querySelector('.form-success')

    const validators = {
      name: function (value) {
        if (!value.trim()) return getValidationMessage('nameRequired')
        if (value.trim().length < 2) return getValidationMessage('nameMinLength')
        return ''
      },
      company: function () {
        return ''
      },
      email: function (value) {
        if (!value.trim()) return getValidationMessage('emailRequired')
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return getValidationMessage('emailInvalid')
        }
        return ''
      },
      message: function (value) {
        if (!value.trim()) return getValidationMessage('messageRequired')
        if (value.trim().length < 10) return getValidationMessage('messageMinLength')
        return ''
      },
    }

    function showError(field, message) {
      const group = field.closest('.field')
      const errEl = group.querySelector('.err')
      group.classList.add('has-error')
      field.classList.add('invalid')
      if (errEl) errEl.textContent = message
    }

    function clearError(field) {
      const group = field.closest('.field')
      const errEl = group.querySelector('.err')
      group.classList.remove('has-error')
      field.classList.remove('invalid')
      if (errEl) errEl.textContent = ''
    }

    function validateField(name, value) {
      const validator = validators[name]
      return validator ? validator(value) : ''
    }

    function validateForm() {
      let isValid = true
      Object.keys(formFields).forEach(function (name) {
        const field = formFields[name]
        if (!field) return
        const error = validateField(name, field.value)
        if (error) {
          showError(field, error)
          isValid = false
        } else {
          clearError(field)
        }
      })
      return isValid
    }

    Object.keys(formFields).forEach(function (name) {
      const field = formFields[name]
      if (!field) return

      field.addEventListener('blur', function () {
        const error = validateField(name, field.value)
        if (error) {
          showError(field, error)
        } else {
          clearError(field)
        }
      })

      field.addEventListener('input', function () {
        if (field.classList.contains('invalid')) clearError(field)
      })
    })

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault()

      if (!validateForm()) {
        const errorFields = contactForm.querySelectorAll('.invalid')
        trackEvent('Contact Form Validation Error', {
          fields: Array.from(errorFields)
            .map(function (f) {
              return f.id || f.name
            })
            .join(','),
          count: errorFields.length,
        })
        if (errorFields[0]) errorFields[0].focus()
        return
      }

      handleFormSubmission({
        name: formFields.name.value.trim(),
        company: formFields.company.value.trim(),
        email: formFields.email.value.trim(),
        message: formFields.message.value.trim(),
      })
    })

    async function handleFormSubmission(data) {
      const submitButton = contactForm.querySelector('.form-submit')
      const originalText = submitButton.textContent
      submitButton.textContent = getTranslation('contact.form.sending') || 'Sending…'
      submitButton.disabled = true

      const payload = {
        timestamp: new Date().toISOString(),
        from: data.email,
        name: data.name,
        company: data.company || 'N/A',
        message: data.message,
      }

      try {
        const response = await fetch('https://mailserver.radi.pro/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })

        if (!response.ok) throw new Error('Failed to send message')

        contactForm.style.display = 'none'
        if (formSuccess) formSuccess.classList.add('visible')

        trackEvent('Contact Form Submit', { success: true, hasCompany: !!data.company })
        contactForm.reset()
      } catch (error) {
        console.error('Form submission error:', error)
        trackEvent('Contact Form Submit', { success: false, error: 'submission_failed' })
        alert(getTranslation('contact.error') || 'An error occurred while sending. Please try again.')
      } finally {
        submitButton.textContent = originalText
        submitButton.disabled = false
      }
    }
  }

  /* ============================================
       SECTION VIEW TRACKING
       ============================================ */
  function initSectionViewTracking() {
    const sections = document.querySelectorAll('section[id]')
    if (!sections.length || !('IntersectionObserver' in window)) return

    const viewed = new Set()
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !viewed.has(entry.target.id)) {
            viewed.add(entry.target.id)
            trackEvent('Section View', { section: entry.target.id })
          }
        })
      },
      { threshold: 0.3 },
    )

    sections.forEach(function (section) {
      observer.observe(section)
    })
  }

  /* ============================================
       FOOTER — dynamic year
       ============================================ */
  const yearSpan = document.getElementById('current-year')
  if (yearSpan) yearSpan.textContent = new Date().getFullYear()

  /* ============================================
       INIT
       ============================================ */
  initLanguageSwitcher()

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSectionViewTracking)
  } else {
    initSectionViewTracking()
  }
})()
