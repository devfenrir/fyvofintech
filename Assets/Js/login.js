import {
    scrollEffect,
    fonteTextoBox
} from './utilites.js'

// efeito no texto do check-in manter conectado

const checkboxLogin = document.querySelector('[data-checkbox-login]')

checkboxLogin.addEventListener('click', fonteTextoBox)

/* Scroll rolagem */

window.addEventListener('scroll', scrollEffect)