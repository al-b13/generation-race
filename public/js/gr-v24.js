(() => {
  const header = document.querySelector('.site-header')
  const updateHeader = () => header && header.classList.toggle('scrolled', window.scrollY > 18)
  updateHeader(); window.addEventListener('scroll', updateHeader, {passive:true})
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const items = [...document.querySelectorAll('.reveal')]
  if (reduce || !('IntersectionObserver' in window)) items.forEach(el => el.classList.add('visible'))
  else { const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}), {threshold:.12, rootMargin:'0px 0px -6% 0px'}); items.forEach(el => io.observe(el)) }

  const KEY='gr-language', valid=new Set(['it','en'])
  const setLanguage = lang => {
    if(!valid.has(lang)) return
    document.documentElement.lang=lang
    document.querySelectorAll('[data-i18n-en][data-i18n-it]').forEach(el => {
      const value=el.getAttribute(`data-i18n-${lang}`); if(value!==null) el.innerHTML=value
    })
    document.querySelectorAll('.lang-switch button[data-lang]').forEach(btn => {
      const active=btn.dataset.lang===lang; btn.classList.toggle('active',active); btn.setAttribute('aria-pressed',active?'true':'false')
    })
    const title=document.documentElement.getAttribute(`data-title-${lang}`); if(title) document.title=title
    localStorage.setItem(KEY,lang)
  }
  document.querySelectorAll('.lang-switch button[data-lang]').forEach(btn => btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)))
  const saved=localStorage.getItem(KEY); setLanguage(valid.has(saved)?saved:'en')
})()
