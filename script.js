// ==================== 
// Dynamic Role Animation
// ====================
const roles = ['Web Developer', 'CTF Player', 'Cybersecurity Enthusiast'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

const dynamicRoleElement = document.querySelector('.dynamic-role');

function typeRole() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    dynamicRoleElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 75;
  } else {
    dynamicRoleElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 150;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    // Pause at end of word
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 500;
  }

  setTimeout(typeRole, typingSpeed);
}

// Start typing animation when page loads
if (dynamicRoleElement) {
  setTimeout(typeRole, 1000);
}

// ==================== 
// About Section Dynamic Role Animation
// ====================
const aboutRoles = ['Web Developer', 'CTF Player', 'Cybersecurity Enthusiast'];
let aboutRoleIndex = 0;
let aboutCharIndex = 0;
let aboutIsDeleting = false;
let aboutTypingSpeed = 150;

const aboutDynamicRoleElement = document.querySelector('.about-dynamic-role');

function typeAboutRole() {
  const currentRole = aboutRoles[aboutRoleIndex];
  
  if (aboutIsDeleting) {
    aboutDynamicRoleElement.textContent = currentRole.substring(0, aboutCharIndex - 1);
    aboutCharIndex--;
    aboutTypingSpeed = 75;
  } else {
    aboutDynamicRoleElement.textContent = currentRole.substring(0, aboutCharIndex + 1);
    aboutCharIndex++;
    aboutTypingSpeed = 150;
  }

  if (!aboutIsDeleting && aboutCharIndex === currentRole.length) {
    aboutTypingSpeed = 2000;
    aboutIsDeleting = true;
  } else if (aboutIsDeleting && aboutCharIndex === 0) {
    aboutIsDeleting = false;
    aboutRoleIndex = (aboutRoleIndex + 1) % aboutRoles.length;
    aboutTypingSpeed = 500;
  }

  setTimeout(typeAboutRole, aboutTypingSpeed);
}

// Start about section typing animation when section is visible
if (aboutDynamicRoleElement) {
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(typeAboutRole, 500);
        aboutObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  const aboutSection = document.querySelector('.about');
  if (aboutSection) {
    aboutObserver.observe(aboutSection);
  }
}

// ==================== 
// Mobile Navigation Toggle
// ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
    
  // Animate hamburger
  const bars = hamburger.querySelectorAll('.bar');
  bars[0].style.transform = navMenu.classList.contains('active') 
    ? 'rotate(-45deg) translate(-5px, 6px)' 
    : 'none';
  bars[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
  bars[2].style.transform = navMenu.classList.contains('active') 
    ? 'rotate(45deg) translate(-5px, -6px)' 
    : 'none';
});

// Close menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const bars = hamburger.querySelectorAll('.bar');
    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';
  });
});

// ==================== 
// Smooth Scrolling
// ====================
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
        
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ==================== 
// Active Navigation Link on Scroll
// ====================
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
    
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
        
    if (scrollY >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });
    
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
    
  // Add shadow to navbar on scroll
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  }
});

// ==================== 
// Skills Category Tabs
// ====================
const skillTabs = document.querySelectorAll('.skills-tab');
const skillItems = document.querySelectorAll('.skill-item');

skillTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const activeCategory = tab.getAttribute('data-category');

    skillTabs.forEach(item => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    skillItems.forEach(skill => {
      if (skill.getAttribute('data-category') === activeCategory) {
        skill.classList.remove('hidden');
      } else {
        skill.classList.add('hidden');
      }
    });
  });
});

// ==================== 
// Scroll Reveal Animation
// ====================
const revealElements = document.querySelectorAll('.skill-item, .project-card, .about-content, .education-item, .contact-content');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});

// ==================== 
// Contact Form Handling
// ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
    
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
    
  // For GitHub Pages, you can either:
  // 1. Use FormSpree (https://formspree.io/)
  // 2. Use EmailJS (https://www.emailjs.com/)
  // 3. Use Netlify Forms (if hosting on Netlify)
  // 4. Or just show a success message
    
  // Simple validation
  if (name && email && subject && message) {
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
        
    // If you want to use EmailJS, uncomment below and configure:
    /*
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    }).then(
      function(response) {
        alert('Message sent successfully!');
        contactForm.reset();
      },
      function(error) {
        alert('Failed to send message. Please try again.');
      }
    );
    */
  }
});

// ==================== 
// Typing Effect for Hero (Optional)
// ====================
const heroTitle = document.querySelector('.glitch');
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  let i = 0;
    
  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
    
  // Uncomment to enable typing effect
  // typeWriter();
}

// ==================== 
// Dark/Light Mode Toggle (Optional)
// ====================
// You can add a theme toggle button if desired
const createThemeToggle = () => {
  const toggle = document.createElement('button');
  toggle.className = 'theme-toggle';
  toggle.innerHTML = '<i class="fas fa-moon"></i>';
  toggle.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient);
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
  `;
    
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = toggle.querySelector('i');
    icon.className = document.body.classList.contains('light-mode') 
      ? 'fas fa-sun' 
      : 'fas fa-moon';
  });
    
  toggle.addEventListener('mouseenter', () => {
    toggle.style.transform = 'scale(1.1)';
  });
    
  toggle.addEventListener('mouseleave', () => {
    toggle.style.transform = 'scale(1)';
  });
    
  // Uncomment to add theme toggle button
  // document.body.appendChild(toggle);
};

// ==================== 
// Cursor Trail Effect (Optional)
// ====================
const createCursorEffect = () => {
  const coords = { x: 0, y: 0 };
  const circles = [];
  const colors = ['#6366f1', '#8b5cf6', '#22d3ee'];
    
  for (let i = 0; i < 10; i++) {
    const circle = document.createElement('div');
    circle.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${colors[i % colors.length]};
      pointer-events: none;
      opacity: 0.5;
      z-index: 9999;
      transition: opacity 0.3s;
    `;
    circles.push(circle);
    // Uncomment to add cursor effect
    // document.body.appendChild(circle);
  }
    
  window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });
    
  const animateCircles = () => {
    let x = coords.x;
    let y = coords.y;
        
    circles.forEach((circle, index) => {
      circle.style.left = x - 5 + 'px';
      circle.style.top = y - 5 + 'px';
      circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
            
      const nextCircle = circles[index + 1] || circles[0];
      x += (parseInt(nextCircle.style.left || 0) - x) * 0.3;
      y += (parseInt(nextCircle.style.top || 0) - y) * 0.3;
    });
        
    requestAnimationFrame(animateCircles);
  };
    
  // Uncomment to enable cursor effect
  // animateCircles();
};

// ==================== 
// Initialize Optional Features
// ====================
// Uncomment the features you want to enable:
// createThemeToggle();
// createCursorEffect();

// ==================== 
// Page Load Animation
// ====================
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s';
    document.body.style.opacity = '1';
  }, 100);
});

// ==================== 
// Back to Top Button
// ====================
const createBackToTop = () => {
  const button = document.createElement('button');
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  button.className = 'back-to-top';
  button.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient);
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 999;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
  `;
    
  document.body.appendChild(button);
    
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      button.style.opacity = '1';
      button.style.pointerEvents = 'auto';
    } else {
      button.style.opacity = '0';
      button.style.pointerEvents = 'none';
    }
  });
    
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

createBackToTop();

console.log('Portfolio website loaded successfully! 🚀');
