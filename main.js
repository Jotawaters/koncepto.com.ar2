// Actualizar año actual en el footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.classList.add('active');
        }
    }
}

// Initial check
checkFade();

// Check on scroll
window.addEventListener('scroll', checkFade);

// Generate geometric shapes
const geometricShapes = document.querySelector('.geometric-shapes');
const shapeTypes = ['diamond', 'pentagon', 'hexagon', 'circle'];
const shapeColors = ['var(--blue)', 'var(--navy)'];

for (let i = 0; i < 15; i++) {
    const shape = document.createElement('div');
    const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    
    shape.classList.add('geo-shape', shapeType);
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.left = `${Math.random() * 100}%`;
    shape.style.backgroundColor = shapeColors[Math.floor(Math.random() * shapeColors.length)];
    shape.style.opacity = (Math.random() * 0.2 + 0.1).toString();
    
    // Random animation delay and duration
    shape.style.animationDelay = `${Math.random() * 5}s`;
    shape.style.animationDuration = `${Math.random() * 10 + 15}s`;
    
    geometricShapes.appendChild(shape);
}

// Parallax effect
document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const moveX = (mouseX - windowWidth / 2) / 50;
    const moveY = (mouseY - windowHeight / 2) / 50;
    
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    }
});

// Custom cursor effect
const cursor = document.querySelector('.cursor-effect');

document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', function() {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
    cursor.style.opacity = '0.8';
});

document.addEventListener('mouseup', function() {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.opacity = '0.5';
});

// Links and buttons hover effect
const links = document.querySelectorAll('a, button');

links.forEach(link => {
    link.addEventListener('mouseenter', function() {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.opacity = '0.3';
    });
    
    link.addEventListener('mouseleave', function() {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.opacity = '0.5';
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
const mobileNavClose = document.querySelector('.mobile-nav-close');

if (mobileMenuBtn && mobileNav && mobileNavOverlay) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.add('active');
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    function closeMobileNav() {
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    mobileNavClose.addEventListener('click', closeMobileNav);
    mobileNavOverlay.addEventListener('click', closeMobileNav);
    
    // Close mobile nav when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });
}

// Service modals
const serviceCards = document.querySelectorAll('.service-card');
const serviceModals = document.querySelectorAll('.service-modal-overlay');
const modalCloseButtons = document.querySelectorAll('.modal-close');

serviceCards.forEach(card => {
    card.addEventListener('click', function() {
        const serviceId = this.getAttribute('data-service');
        const modal = document.getElementById(`${serviceId}-modal`);
        
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

modalCloseButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.service-modal-overlay');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
});

serviceModals.forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
const serviceContactForms = document.querySelectorAll('.service-contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        contactForm.reset();
    });
}

serviceContactForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu interés en nuestros servicios! Te contactaremos pronto.');
        form.reset();
        
        // Close the modal after form submission
        const modal = this.closest('.service-modal-overlay');
        setTimeout(() => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }, 1000);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});