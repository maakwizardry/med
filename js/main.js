document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 1. Scroll Reveal Animations
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // 2. Bento Card Mouse Interaction (Stripe-like highlight)
    const handleMouseMove = (e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    for (const card of document.querySelectorAll(".bento-card")) {
        card.onmousemove = e => handleMouseMove(e);
    }

    // 3. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            // Add a simple fade animation
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.style.opacity = '0';
                mobileMenu.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    mobileMenu.style.transition = 'all 0.3s ease';
                    mobileMenu.style.opacity = '1';
                    mobileMenu.style.transform = 'translateY(0)';
                }, 10);
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && e.target !== menuBtn) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // 4. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 5. Hero Background Mouse Tracking
    const heroHeader = document.querySelector('header.relative');
    if (heroHeader) {
        heroHeader.addEventListener('mousemove', (e) => {
            const rect = heroHeader.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            heroHeader.style.setProperty("--mouse-x", `${x}px`);
            heroHeader.style.setProperty("--mouse-y", `${y}px`);
        });
    }

    // 6. Scroll Runner Activation
    const runners = document.querySelectorAll('.glow-runner');
    let scrollTimeout;

    window.addEventListener('scroll', () => {
        runners.forEach(runner => runner.classList.add('active'));

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            runners.forEach(runner => runner.classList.remove('active'));
        }, 500); // Pulse stays for 500ms after scroll stops
    });
});
