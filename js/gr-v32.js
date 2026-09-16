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
\n\n// V32 analytics consent + conversion events\n(() => {\n  const CONSENT_KEY='gr-analytics-consent';\n  const setConsent=(granted)=>{\n    if(typeof gtag==='function') gtag('consent','update',{analytics_storage:granted?'granted':'denied'});\n    localStorage.setItem(CONSENT_KEY,granted?'granted':'denied');\n  };\n  const existing=localStorage.getItem(CONSENT_KEY);\n  if(existing==='granted' && typeof gtag==='function') gtag('consent','update',{analytics_storage:'granted'});\n  if(!existing){\n    const box=document.createElement('div'); box.className='gr-consent'; box.setAttribute('role','dialog'); box.setAttribute('aria-label','Analytics preferences');\n    box.innerHTML='<p><strong>Analytics</strong><br>We use Google Analytics to understand how the site is used and improve it. <a href="/privacy.html">Privacy</a></p><div class="gr-consent-actions"><button class="gr-consent-decline" type="button">Decline</button><button class="gr-consent-accept" type="button">Accept</button></div>';\n    document.body.appendChild(box);\n    box.querySelector('.gr-consent-accept').addEventListener('click',()=>{setConsent(true);box.remove()});\n    box.querySelector('.gr-consent-decline').addEventListener('click',()=>{setConsent(false);box.remove()});\n  }\n  const track=(name,params={})=>{if(typeof gtag==='function')gtag('event',name,params)};\n  document.addEventListener('click',e=>{\n    const a=e.target.closest('a'); if(!a)return; const href=a.getAttribute('href')||'';\n    if(href.startsWith('mailto:')) track('contact_click',{method:'email',link_url:href});\n    if(href.includes('portfolio.html')) track('portfolio_click',{link_url:href});\n    if(href.includes('contact.html')) track('contact_page_click',{link_url:href});\n  });\n})();\n