// Business & Technology Bridge - JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
  // Initialize direction selector
  initDirectionSelector();
  
  // Initialize mobile navigation
  initMobileNav();
  
  // Initialize language switcher (if needed)
  initLanguageSwitcher();
  
  // Initialize smooth scroll
  initSmoothScroll();
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
      
      // Update active button
      langBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Store language preference
      localStorage.setItem('preferred-language', lang);
      
      // Here you would implement actual language switching logic
      // For now, we'll just log it
      console.log('Language switched to:', lang);
      
      // You could load translations here if implemented
      // loadTranslations(lang);
    });
  });
  
  // Load saved language preference
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang) {
    const targetBtn = document.querySelector(`[data-lang="${savedLang}"]`);
    if (targetBtn) {
      targetBtn.click();
    }
  }
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
