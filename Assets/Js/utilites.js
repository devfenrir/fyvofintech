export const scrollEffect = () => {
    const header = document.querySelector('[data-header]')

    if (window.scrollY > 10) {
        header.classList.add('rolagem')
    } else {
        header.classList.remove('rolagem')
    }
}

export const fonteTextoBox = () => {
    const checkboxLogin = document.querySelector('[data-checkbox-login]')
    const checkTextLogin = checkboxLogin.nextElementSibling

    if (checkboxLogin.checked) {
        checkTextLogin.style.fontWeight = '600'
        checkTextLogin.style.transition = '0.03s'

    } else {
        checkTextLogin.style.fontWeight = ''
    }
}

export const moreButtonOpen = () => {
    const overlay = document.querySelector('[data-overlay-saiba-mais]')

    overlay.classList.add('display-flex')
}

export const moreButtonClose = () => {
    const overlay = document.querySelector('[data-overlay-saiba-mais]')

    overlay.classList.remove('display-flex')
}

export const viewSectionVideosOpen = () => {
    const componenteMensagemAssistir = document.querySelector('[data-videos]')

    componenteMensagemAssistir.classList.add('display-flex')
}

export const viewsectionVideosClose = () => {
    const componenteMensagemAssistir = document.querySelector('[data-videos]')

    componenteMensagemAssistir.classList.remove('display-flex')
}