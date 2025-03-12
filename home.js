
// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Toggle hamburger menu animation
    menuToggle.classList.toggle('active');
    
    // Accessibility
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
  });
}

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Get header height for offset
      const headerHeight = document.querySelector('.site-header').offsetHeight;
      
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  });
});

// Active menu item on scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const headerHeight = document.querySelector('.site-header').offsetHeight;
  
  // Get all sections
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerHeight - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Hero slider controls
const prevButton = document.querySelector('.hero-control.prev');
const nextButton = document.querySelector('.hero-control.next');

if (prevButton && nextButton) {
  // En una implementación real, tendrías múltiples diapositivas
  // Para este ejemplo, solo agregaremos oyentes de eventos de clic
  prevButton.addEventListener('click', () => {
    console.log('Diapositiva anterior');
  });
  
  nextButton.addEventListener('click', () => {
    console.log('Siguiente diapositiva');
  });
}

// Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Basic form validation
    if (!name || !email || !subject || !message) {
      alert('Por favor, completa todos los campos');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, introduce una dirección de correo válida');
      return;
    }
    
    // En una implementación real, enviarías los datos del formulario a un servidor
    // Para este ejemplo, solo mostraremos un mensaje de éxito
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    contactForm.reset();
  });
}
