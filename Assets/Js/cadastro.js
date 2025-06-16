/* Scroll rolagem */

window.addEventListener('scroll', function () {
  const header = document.querySelector('[data-header]')

  if (window.scrollY > 10) {
    header.classList.add('rolagem')
  } else {
    header.classList.remove('rolagem')
  }
})