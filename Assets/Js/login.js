// efeito no texto do check-in manter conectado

const checkboxLogin = document.querySelector('[data-checkbox-login]')
const checkTextLogin = checkboxLogin.nextElementSibling

checkboxLogin.addEventListener('click', () => {
    if (checkboxLogin.checked) {
        checkTextLogin.style.fontWeight = '600'
        checkTextLogin.style.transition = '0.03s'
        
    } else {
        checkTextLogin.style.fontWeight = ''
    }
})

/* Scroll rolagem */

window.addEventListener('scroll', function () {
  const header = document.querySelector('[data-header]')

  if (window.scrollY > 10) {
    header.classList.add('rolagem')
  } else {
    header.classList.remove('rolagem')
  }
})