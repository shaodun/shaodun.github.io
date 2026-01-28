// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Fade in elements on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-on-scroll');
    observer.observe(section);
});

// Add CSS for fade animation
const style = document.createElement('style');
style.textContent = `
    .fade-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Typewriter effect for hero subtitle
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
    const originalText = subtitle.textContent;
    subtitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            subtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing after a short delay
    setTimeout(typeWriter, 1000);
}

// Add subtle hover effect to philosophy cards
document.querySelectorAll('.philosophy-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Dynamic quote rotation
const quotes = [
    "The most powerful tool we have as developers is not a language or framework, but empathy.",
    "Code is read more often than it is written. Write for humans first, computers second.",
    "In the pursuit of technological innovation, we must not forget what makes us human.",
    "The best code is not just correct, but also tells a story about the problem it solves."
];

const heroQuote = document.querySelector('.quote p');
if (heroQuote) {
    let quoteIndex = 0;
    
    const rotateQuote = () => {
        heroQuote.style.opacity = '0';
        heroQuote.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            heroQuote.textContent = `"${quotes[quoteIndex]}"`;
            heroQuote.style.opacity = '1';
            quoteIndex = (quoteIndex + 1) % quotes.length;
        }, 500);
    };
    
    // Rotate quote every 10 seconds
    setInterval(rotateQuote, 10000);
}

// Add a scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), var(--primary-color));
    z-index: 1000;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
        window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' });
    }
});

// Console greeting
console.log('%c✨ Welcome to Shaodun\'s Digital Garden ✨', 'color: #3498db; font-size: 16px; font-weight: bold;');
console.log('%c"A thoughtful approach to code and creation."', 'color: #7f8c8d; font-style: italic;');