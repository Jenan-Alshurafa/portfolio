


const lines = ['Hey', "I'm Jenan,", 'Full-Stack Developer'];

// background gradient scroll effect
const root = document.documentElement;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateGradientOnScroll() {
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    const progress = clamp(window.scrollY / maxScroll, 0, 1);

    // Layer 1 — faster movement
    root.style.setProperty("--g1x", `${8 + progress * 40}%`);
    root.style.setProperty("--g1y", `${92 - progress * 60}%`);
    root.style.setProperty("--g2x", `${90 - progress * 50}%`);
    root.style.setProperty("--g2y", `${98 - progress * 65}%`);

    // Layer 2 — shimmer moves faster 
    root.style.setProperty("--g3x", `${20 + progress * 75}%`);
    root.style.setProperty("--g3y", `${85 - progress * 85}%`);
}

window.addEventListener("scroll", updateGradientOnScroll, { passive: true });
window.addEventListener("resize", updateGradientOnScroll);
updateGradientOnScroll();

document.querySelectorAll('.floating-nav button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



document.querySelectorAll('.tech-stack span').forEach(tag => {
    tag.addEventListener('mousemove', (e) => {
        const rect = tag.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        tag.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(200,150,255,0.35), rgba(30,16,58,0.95))`;
    });

    tag.addEventListener('mouseleave', () => {
        tag.style.background = '';
    });
});


//skills icons animation
// Tilt effect
document.querySelectorAll('.skills-panel').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
        card.style.boxShadow = `${-x * 20}px ${y * 20}px 40px rgba(159, 69, 255, 0.2)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
    });
});

// Animate icons in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skills-lang-icon').forEach((icon, i) => {
                setTimeout(() => {
                    icon.style.opacity = '1';
                    icon.style.transform = 'translateY(0)';
                }, i * 100);
            });
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-panel').forEach(card => observer.observe(card));