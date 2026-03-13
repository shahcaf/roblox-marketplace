document.addEventListener("DOMContentLoaded", () => {
    // Current year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Smooth intersection observer for scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // Live member counter simulation (optional subtle updates)
    const liveCounter = document.getElementById('live-member-counter');
    if (liveCounter) {
        setInterval(() => {
            if (Math.random() > 0.6) {
                 let current = parseInt(liveCounter.innerText.replace(/,/g, ''));
                 if(current < 1050) {
                     current++;
                     liveCounter.innerText = current.toLocaleString();
                 }
            }
        }, 3000);
    }
});
