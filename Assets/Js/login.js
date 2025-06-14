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