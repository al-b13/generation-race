
const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-menu');
btn?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

const targets = document.querySelectorAll('.split-copy,.service-grid a,.thinking-card,.capability,.process-step,.network-section>div,.thinking-list article,.cta-band>div:first-child');
targets.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.1});
targets.forEach(el => observer.observe(el));


// ===== GR V8 MOTION =====
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealTargets = document.querySelectorAll('.reveal-section, .motion-reveal');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -7% 0px' });

    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  // Restrained hero parallax, desktop/tablet only
  const heroVisual = document.querySelector('.v4-hero-visual');
  if (!reduceMotion && heroVisual) {
    let ticking = false;
    const updateHero = () => {
      const y = Math.min(window.scrollY, window.innerHeight);
      heroVisual.style.backgroundPosition = `55% calc(48% + ${y * 0.018}px)`;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateHero);
        ticking = true;
      }
    }, { passive: true });
  }

  // Header gains presence after first scroll
  const header = document.querySelector('.v4-header');
  if (header) {
    const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }
})();
