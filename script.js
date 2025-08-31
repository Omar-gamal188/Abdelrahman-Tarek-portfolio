// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger icon
        const icon = mobileMenu.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background opacity on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
        header.style.borderBottom = '1px solid #00AEEF';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.borderBottom = '1px solid #333';
    }
});

// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add scroll-reveal class to elements
document.addEventListener('DOMContentLoaded', function() {
    const elementsToReveal = [
        '.about-item',
        '.skill-item',
        '.timeline-item',
        '.cert-card',
        '.contact-item'
    ];
    
    elementsToReveal.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add('scroll-reveal');
        });
    });
    
    // Initial check for elements already in view
    revealOnScroll();
});

const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        // Create a temporary link element for download
        const link = document.createElement('a');
        link.href = '#'; // Replace with actual CV file path
        link.download = 'Abdelrahman_Tarek_CV.pdf';
        
        // Add visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // For demo purposes, show alert
        alert('CV download would start here. Please replace the href with your actual CV file path.');
        
        // Uncomment the following line when you have a CV file
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
    });
}

// Typing animation for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && scrolled < hero.offsetHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Skills animation counter (if you want to add skill percentages later)
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
}

// Contact form validation (if you add a contact form later)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Intersection Observer for better scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all scroll-reveal elements
document.addEventListener('DOMContentLoaded', function() {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    scrollRevealElements.forEach(element => {
        observer.observe(element);
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Contact item click handlers
document.addEventListener('DOMContentLoaded', function() {
    // Email click handler
    const emailItem = document.querySelector('.contact-item:nth-child(2)');
    if (emailItem) {
        emailItem.addEventListener('click', function() {
            window.location.href = 'mailto:abdelrahman.tarek.dev@gmail.com';
        });
        emailItem.style.cursor = 'pointer';
    }
    
    // Phone click handler
    const phoneItem = document.querySelector('.contact-item:nth-child(1)');
    if (phoneItem) {
        phoneItem.addEventListener('click', function() {
            window.location.href = 'tel:+201005118087';
        });
        phoneItem.style.cursor = 'pointer';
    }
    
    // LinkedIn click handler
    const linkedinItem = document.querySelector('.contact-item:nth-child(3)');
    if (linkedinItem) {
        linkedinItem.addEventListener('click', function() {
            window.open('https://www.linkedin.com/in/abelrahmantarek', '_blank');
        });
        linkedinItem.style.cursor = 'pointer';
    }
});

// Smooth reveal animations for sections
function addStaggeredAnimation() {
    const sections = ['skills', 'experience', 'certifications'];
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const items = section.querySelectorAll('.skill-item, .timeline-item, .cert-card');
        
        const sectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('active');
                        }, index * 200);
                    });
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        sectionObserver.observe(section);
    });
}

// Initialize staggered animations
document.addEventListener('DOMContentLoaded', addStaggeredAnimation);

// Add active nav link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});