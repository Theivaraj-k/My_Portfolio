// 3D Effects & Interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Mouse Trail Effect
    const cursorTrail = document.getElementById('cursor-trail');
    const trailElements = [];
    const trailCount = 15;
    
    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        document.body.appendChild(trail);
        trailElements.push({
            element: trail,
            x: 0,
            y: 0,
            delay: i * 2
        });
    }
    
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        trailElements.forEach((trail, index) => {
            setTimeout(() => {
                trail.x = mouseX;
                trail.y = mouseY;
                trail.element.style.left = mouseX + 'px';
                trail.element.style.top = mouseY + 'px';
                trail.element.style.opacity = 1 - (index / trailCount);
                trail.element.style.width = (8 - index * 0.5) + 'px';
                trail.element.style.height = (8 - index * 0.5) + 'px';
            }, trail.delay);
        });
    });
    
    // Create Particles
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        particle.style.left = posX + 'px';
        particle.style.top = posY + 'px';
        
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        particlesContainer.appendChild(particle);
        
        animateParticle(particle);
    }
    
    function animateParticle(particle) {
        const duration = Math.random() * 15000 + 10000;
        const targetX = Math.random() * window.innerWidth;
        const targetY = Math.random() * window.innerHeight;
        
        particle.animate(
            [
                { transform: `translate(0, 0)` },
                { transform: `translate(${targetX - parseInt(particle.style.left)}px, ${targetY - parseInt(particle.style.top)}px)` }
            ],
            {
                duration: duration,
                easing: 'linear',
                iterations: Infinity,
                direction: 'alternate'
            }
        );
    }
    // Parallax Effect
document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 30;
        const x = mouseX * speed;
        const y = mouseY * speed;
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    // Add parallax effect to background
    const background = document.querySelector('.background');
    if (background) {
        background.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
    }
});

// Interactive Elements
const interactiveElements = document.querySelectorAll('.interactive');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.classList.add('hover');
        this.animate([
            { transform: 'scale(1)', opacity: 0.8 },
            { transform: 'scale(1.1)', opacity: 1 }
        ], {
            duration: 300,
            fill: 'forwards'
        });
    });
    
    element.addEventListener('mouseleave', function() {
        this.classList.remove('hover');
        this.animate([
            { transform: 'scale(1.1)', opacity: 1 },
            { transform: 'scale(1)', opacity: 0.8 }
        ], {
            duration: 300,
            fill: 'forwards'
        });
    });
});

// Responsive Elements
function handleResize() {
    // Adjust particle positions on window resize
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        particle.style.left = posX + 'px';
        particle.style.top = posY + 'px';
        animateParticle(particle);
    });
}

window.addEventListener('resize', handleResize);

// Initialize interactive elements
const elementsToAnimate = document.querySelectorAll('.animated');
elementsToAnimate.forEach((element, index) => {
    element.style.animationDelay = (index * 0.2) + 's';
});

}); // Close the DOMContentLoaded event listener

// Add this to your existing script
// Add this to your existing script
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu close when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    const navToggle = document.getElementById('nav-toggle');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
        });
    });
});