// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Dream selection functionality
function selectDream(theme) {
    const modal = document.getElementById('dreamModal');
    const modalContent = document.getElementById('modalContent');
    
    const dreamDetails = {
        fantasy: {
            title: "Fantasy Dreams",
            description: "Enter a realm where magic flows like rivers and dragons soar through crystal skies. In your fantasy dreams, you become the hero of ancient legends, wielding powers beyond imagination.",
            prompts: [
                "You discover a hidden library where books write themselves",
                "A dragon offers to teach you the language of the wind",
                "You find a door that leads to different magical realms",
                "Ancient runes appear on your skin, glowing with power"
            ]
        },
        romance: {
            title: "Romance Dreams",
            description: "Step into a world where love stories unfold under starlit skies. Your romantic dreams weave tales of connection, passion, and hearts that recognize each other across time and space.",
            prompts: [
                "You meet someone in a dream who remembers you from another life",
                "Love letters appear written in the morning mist",
                "You dance with a stranger who knows all your favorite songs",
                "A garden blooms wherever you and your beloved walk together"
            ]
        },
        adventure: {
            title: "Adventure Dreams",
            description: "Embark on thrilling quests through uncharted territories. Your adventure dreams take you to the edge of the world and beyond, where every step reveals new mysteries and challenges.",
            prompts: [
                "You discover a map tattooed on your palm that leads to treasure",
                "A compass points not north, but toward your greatest desire",
                "You find a key that opens any door in the world",
                "Ancient guardians challenge you to prove your worth"
            ]
        },
        mystery: {
            title: "Mystery Dreams",
            description: "Unravel enigmas that exist only in the realm of sleep. Your mystery dreams present puzzles that challenge your mind and reveal secrets hidden in the shadows of your subconscious.",
            prompts: [
                "You wake up with a message written in your own handwriting",
                "Mirrors show you places you've never been",
                "You receive phone calls from people who don't exist",
                "Clues appear in your dreams that solve real-world mysteries"
            ]
        }
    };
    
    const details = dreamDetails[theme];
    if (details) {
        modalContent.innerHTML = `
            <h2 style="color: #e3b58f; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">${details.title}</h2>
            <p style="color: rgba(227, 181, 143, 0.8); margin-bottom: 2rem; line-height: 1.6;">${details.description}</p>
            <h3 style="color: #e3b58f; margin-bottom: 1rem;">Dream Prompts:</h3>
            <ul style="list-style: none; padding: 0;">
                ${details.prompts.map(prompt => `
                    <li style="margin: 1rem 0; padding: 1rem; background: rgba(227, 181, 143, 0.1); border-radius: 8px; color: rgba(227, 181, 143, 0.9);">
                        ✦ ${prompt}
                    </li>
                `).join('')}
            </ul>
            <button onclick="closeModal()" style="background: linear-gradient(135deg, #e3b58f 0%, #63442d 100%); color: #fff; border: none; padding: 1rem 2rem; border-radius: 25px; cursor: pointer; margin-top: 2rem; font-family: 'Playfair Display', serif;">
                Begin This Dream Journey
            </button>
        `;
        modal.style.display = 'block';
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('dreamModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('dreamModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Reveal prompt functionality
function revealPrompt(element) {
    const promptFull = element.querySelector('.prompt-full');
    const promptPreview = element.querySelector('.prompt-preview');
    
    if (promptFull.classList.contains('hidden')) {
        promptFull.classList.remove('hidden');
        promptPreview.style.opacity = '0.7';
        element.style.background = 'linear-gradient(135deg, rgba(227, 181, 143, 0.2) 0%, rgba(99, 68, 45, 0.3) 100%)';
    } else {
        promptFull.classList.add('hidden');
        promptPreview.style.opacity = '1';
        element.style.background = 'linear-gradient(135deg, rgba(227, 181, 143, 0.1) 0%, rgba(99, 68, 45, 0.2) 100%)';
    }
}

// Form submission with animation
function submitForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    if (email) {
        // Create letter animation
        const letterAnimation = document.getElementById('letter-animation');
        letterAnimation.classList.remove('hidden');
        
        // Reset form
        form.reset();
        
        // Show success message
        setTimeout(() => {
            alert('Welcome to the Dream Crafters! Check your email for magical surprises.');
            letterAnimation.classList.add('hidden');
        }, 2000);
    }
}

// Parallax scrolling effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-particles, .mist-overlay');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = translateY(${scrolled * speed}px);
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.dream-card, .dream-note, .product-card, .testimonial');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Add sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.98) { // Only create sparkles occasionally
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = 'radial-gradient(circle, rgba(227, 181, 143, 0.8) 0%, transparent 70%)';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkleAnimation 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnimation {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Smooth navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add active navigation style
const navStyle = document.createElement('style');
navStyle.textContent = `
    .nav-menu a.active {
        color: #fff !important;
        text-shadow: 0 0 15px rgba(227, 181, 143, 0.8) !important;
    }
`;
document.head.appendChild(navStyle);

// Add hover sound effect (optional)
function playHoverSound() {
    // This would play a subtle chime sound on hover
    // Implementation would require audio files
    console.log('Hover sound effect');
}

// Add hover effects to interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('.dream-card, .cta-button, .claim-button, .submit-button');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', playHoverSound);
    });
});

// Typing effect for hero title
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

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    
    // Start typing effect after a short delay
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 80);
    }, 1000);
});