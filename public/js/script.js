
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
