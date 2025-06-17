import {
  scrollEffect,
  moreButtonOpen,
  moreButtonClose,
  viewSectionVideosOpen,
  viewsectionVideosClose
} from './utilites.js'

// /* Botão saiba mais */

const botaoSaibaMais = document.querySelector('[data-saiba-mais]')
const botaoSaibaMaisFechar = document.querySelector('[data-fechar-modal]')

botaoSaibaMais.addEventListener('click', moreButtonOpen)
botaoSaibaMaisFechar.addEventListener('click', moreButtonClose)

/* Scroll rolagem */

window.addEventListener('scroll', scrollEffect)

/* Botão assistir */

const botaoAssistirAciona = document.querySelector('[data-assistir-button-aciona]')
const fecharBotaoAssistir = document.querySelector('[data-fechar-assistir]')

botaoAssistirAciona.addEventListener('click', viewSectionVideosOpen)

fecharBotaoAssistir.addEventListener('click', viewsectionVideosClose)