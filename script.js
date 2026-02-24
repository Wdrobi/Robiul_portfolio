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
// Skill Progress Animation
// ====================
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.skill-progress');
      progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  observer.observe(skillsSection);
}

// ==================== 
// Scroll Reveal Animation
// ====================
const revealElements = document.querySelectorAll('.skill-card, .project-card, .about-content, .education-item, .contact-content');

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
