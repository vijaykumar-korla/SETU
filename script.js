class TaglineRotator {
    constructor() {
        this.taglines = Array.from(document.querySelectorAll('.hero-tagline'));
        this.currentIndex = 0;
        this.interval = 3000;
        if (this.taglines.length) {
            this.taglines[this.currentIndex].classList.add('active');
            this.start();
        }
    }

    start() {
        setInterval(() => {
            this.taglines[this.currentIndex].classList.remove('active');
            this.currentIndex = (this.currentIndex + 1) % this.taglines.length;
            this.taglines[this.currentIndex].classList.add('active');
        }, this.interval);
    }
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (!href || href === '#') return;
            event.preventDefault();
            const target = document.querySelector(href);
            if (!target) return;
            const offset = document.querySelector('.navbar')?.offsetHeight || 0;
            const top = target.getBoundingClientRect().top + window.scrollY - offset - 12;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
}

function initIntersectionObserver() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });

    revealElements.forEach((el) => observer.observe(el));
}

function initThemeToggle() {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        toggle.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
    });
}

function initSearchBar() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;
    searchInput.addEventListener('keypress', (event) => {
        if (event.key !== 'Enter') return;
        event.preventDefault();
        const value = searchInput.value.trim();
        if (!value) return;
        console.log('Search query:', value);
    });
}

function initCTAButtons() {
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const target = document.querySelector('#features');
            if (!target) return;
            const offset = document.querySelector('.navbar')?.offsetHeight || 0;
            const top = target.getBoundingClientRect().top + window.scrollY - offset - 12;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    new TaglineRotator();
    initSmoothScrolling();
    initNavbarScrollEffect();
    initIntersectionObserver();
    initThemeToggle();
    initSearchBar();
    initCTAButtons();
    console.log('RESEARCH2INNOVATE landing page initialized');
});
