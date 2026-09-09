
(() => {
  const header = document.querySelector('.site-header')
  const updateHeader = () => header && header.classList.toggle('scrolled', window.scrollY > 18)
  updateHeader()
  window.addEventListener('scroll', updateHeader, {passive:true})

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const items = [...document.querySelectorAll('.reveal')]
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'))
  } else {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          io.unobserve(e.target)
        }
      })
    }, {threshold:.12, rootMargin:'0px 0px -6% 0px'})
    items.forEach(el => io.observe(el))
  }
})()
