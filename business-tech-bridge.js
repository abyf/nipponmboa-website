// Business & Technology Bridge - JavaScript Functionality

// i18n translations for Business & Technology Bridge page
const btbI18n = {
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_poles: "Pôles",
    nav_contact: "Contact",

    // Hero Section
    btb_hero_title: "Business & Technology Bridge",
    btb_hero_subtitle: "Facilitez vos échanges commerciaux et technologiques entre le Cameroun et le Japon",

    // Intro Section
    btb_intro_title: "Votre Passerelle vers l'Excellence Commerciale",
    btb_intro_p1: "Le pôle <strong>Business & Technology Bridge</strong> est votre partenaire stratégique pour établir des connexions commerciales durables entre le Cameroun et le Japon.",
    btb_intro_p2: "De la simple mise en relation à l'accompagnement complet dans vos projets d'expansion, nous vous offrons une gamme complète de services adaptés à vos besoins spécifiques.",

    // Services Section
    btb_services_title: "Nos Services Détaillés",
    btb_services_subtitle: "Choisissez le service adapté à vos besoins commerciaux",

    // Service Titles
    btb_s1_title: "Matchmaking Simple",
    btb_s2_title: "Accompagnement Complet",
    btb_s3_title: "Mission Commerciale Organisée",
    btb_s4_title: "Abonnement Annuel",
    btb_s5_title: "Paiement à la Performance",

    // À la Carte Section
    btb_carte_title: "Prestations à la Carte",
    btb_carte_subtitle: "Services ponctuels disponibles dans les deux sens",

    // CTA Section
    btb_cta_title: "Prêt à Développer Votre Business ?",
    btb_cta_subtitle: "Contactez-nous pour discuter de vos projets et obtenir un devis personnalisé"
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_poles: "Poles",
    nav_contact: "Contact",

    // Hero Section
    btb_hero_title: "Business & Technology Bridge",
    btb_hero_subtitle: "Facilitate your commercial and technological exchanges between Cameroon and Japan",

    // Intro Section
    btb_intro_title: "Your Gateway to Commercial Excellence",
    btb_intro_p1: "The <strong>Business & Technology Bridge</strong> division is your strategic partner for establishing lasting commercial connections between Cameroon and Japan.",
    btb_intro_p2: "From simple networking to complete support in your expansion projects, we offer you a full range of services adapted to your specific needs.",

    // Services Section
    btb_services_title: "Our Detailed Services",
    btb_services_subtitle: "Choose the service suited to your business needs",

    // Service Titles
    btb_s1_title: "Simple Matchmaking",
    btb_s2_title: "Complete Support",
    btb_s3_title: "Organized Trade Mission",
    btb_s4_title: "Annual Subscription",
    btb_s5_title: "Performance-Based Payment",

    // À la Carte Section
    btb_carte_title: "À La Carte Services",
    btb_carte_subtitle: "One-time services available in both directions",

    // CTA Section
    btb_cta_title: "Ready to Grow Your Business?",
    btb_cta_subtitle: "Contact us to discuss your projects and get a personalized quote"
  },

  ja: {
    // Navigation
    nav_home: "ホーム",
    nav_about: "私たちについて",
    nav_poles: "サービス部門",
    nav_contact: "お問い合わせ",

    // Hero Section
    btb_hero_title: "ビジネス・テクノロジーブリッジ",
    btb_hero_subtitle: "カメルーンと日本間のビジネス・技術交流を促進",

    // Intro Section
    btb_intro_title: "ビジネス卓越性への架け橋",
    btb_intro_p1: "<strong>ビジネス・テクノロジーブリッジ</strong>部門は、カメルーンと日本間の永続的なビジネス接続を確立するための戦略的パートナーです。",
    btb_intro_p2: "シンプルなマッチングから事業拡大プロジェクトの完全サポートまで、お客様の特定のニーズに適応した幅広いサービスを提供します。",

    // Services Section
    btb_services_title: "詳細サービス",
    btb_services_subtitle: "ビジネスニーズに適したサービスをお選びください",

    // Service Titles
    btb_s1_title: "シンプルマッチング",
    btb_s2_title: "完全サポート",
    btb_s3_title: "商談ミッション",
    btb_s4_title: "年間サブスクリプション",
    btb_s5_title: "成果報酬型",

    // À la Carte Section
    btb_carte_title: "単品サービス",
    btb_carte_subtitle: "両方向で利用可能な単発サービス",

    // CTA Section
    btb_cta_title: "ビジネスを成長させる準備はできましたか？",
    btb_cta_subtitle: "プロジェクトについて話し合い、カスタム見積もりを取得するために、お問い合わせください"
  }
};

// Current language
let currentLang = 'fr';

// Apply translations
function applyLang(lang) {
  currentLang = lang;
  const t = btbI18n[lang];
  document.documentElement.lang = lang;

  // Apply translations to elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Store language preference
  localStorage.setItem('preferred-language', lang);
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize direction selector
  initDirectionSelector();
  
  // Initialize mobile navigation
  initMobileNav();
  
  // Initialize language switcher
  initLanguageSwitcher();
  
  // Initialize smooth scroll
  initSmoothScroll();
  
  // Load saved language preference or default to French
  const savedLang = localStorage.getItem('preferred-language') || 'fr';
  applyLang(savedLang);
});

// Direction Selector Functionality
function initDirectionSelector() {
  const directionBtns = document.querySelectorAll('.btb-direction-btn');
  
  directionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const direction = this.dataset.direction;
      
      // Update active button
      directionBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Update service cards content
      updateServiceContent(direction);
    });
  });
}

function updateServiceContent(direction) {
  // Update scenarios
  const scenarios = document.querySelectorAll('.btb-scenarios');
  scenarios.forEach(scenario => {
    const scenarioDirection = scenario.dataset.direction;
    if (scenarioDirection === direction) {
      scenario.style.display = 'block';
    } else {
      scenario.style.display = 'none';
    }
  });
  
  // Update deliverables (for Mission Commerciale)
  const deliverables = document.querySelectorAll('.btb-deliverables ul[data-direction]');
  deliverables.forEach(deliverable => {
    const deliverableDirection = deliverable.dataset.direction;
    if (deliverableDirection === direction) {
      deliverable.style.display = 'block';
    } else {
      deliverable.style.display = 'none';
    }
  });
  
  // Update pricing
  const prices = document.querySelectorAll('.btb-price');
  prices.forEach(price => {
    const priceDirection = price.dataset.direction;
    if (priceDirection === direction) {
      price.style.display = 'block';
    } else {
      price.style.display = 'none';
    }
  });
  
  // Add animation
  const serviceCards = document.querySelectorAll('.btb-service-card');
  serviceCards.forEach(card => {
    card.style.animation = 'none';
    setTimeout(() => {
      card.style.animation = 'fadeIn 0.5s ease';
    }, 10);
  });
}

// Mobile Navigation
function initMobileNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.classList.toggle('active');
      
      // Update icon
      if (navLinks.classList.contains('active')) {
        this.innerHTML = '&times;';
      } else {
        this.innerHTML = '&#9776;';
      }
    });
    
    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.innerHTML = '&#9776;';
      });
    });
  }
}

// Language Switcher
function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  
  langBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      applyLang(lang);
    });
  });
}

// Smooth Scroll
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle internal anchors
      if (href === '#' || !href) return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe service cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.btb-service-card, .btb-carte-item');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0.5;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Service Card Interaction Enhancement
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.btb-service-card');
  
  serviceCards.forEach(card => {
    // Add hover effect for better UX
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(-5px)';
    });
  });
});

// Handle window resize for responsive adjustments
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    // Adjust layouts if needed on resize
    adjustLayoutsOnResize();
  }, 250);
});

function adjustLayoutsOnResize() {
  const width = window.innerWidth;
  
  // Close mobile nav if window is resized to desktop
  if (width > 768) {
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navLinks && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.innerHTML = '&#9776;';
    }
  }
}

// Scroll to top functionality
window.addEventListener('scroll', function() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  
  // Add shadow to navbar on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (scrollTop > 50) {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }
});

// Print-friendly formatting
window.addEventListener('beforeprint', function() {
  // Expand all collapsed content for printing
  const scenarios = document.querySelectorAll('.btb-scenarios');
  scenarios.forEach(scenario => {
    scenario.style.display = 'block';
  });
});

window.addEventListener('afterprint', function() {
  // Restore original state after printing
  const activeDirection = document.querySelector('.btb-direction-btn.active');
  if (activeDirection) {
    updateServiceContent(activeDirection.dataset.direction);
  }
});

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
  // Escape key closes mobile nav
  if (e.key === 'Escape') {
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navLinks && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.innerHTML = '&#9776;';
    }
  }
});

// Add focus visible class for better keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', function() {
  document.body.classList.remove('keyboard-nav');
});

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      console.warn('Failed to load image:', this.src);
      // You could set a placeholder here if needed
      // this.src = 'path/to/placeholder.png';
    });
  });
});

// Console log for debugging (remove in production)
console.log('Business & Technology Bridge page loaded successfully');
