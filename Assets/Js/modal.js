const componenteModalSaibaMais = document.querySelector('[data-overlay-saiba-mais]')

const janelaModal = (typeAction, element) => {
    if (typeAction === 'open') element.style.display = 'flex'
    else if (typeAction === 'close') element.style.display = 'none'
}

// /* Botão saiba mais */

const botaoSaibaMais = document.querySelector('[data-saiba-mais]')
const botaoSaibaMaisFechar = document.querySelector('[data-fechar-modal]')

botaoSaibaMais.addEventListener('click', () => janelaModal('open', componenteModalSaibaMais))
botaoSaibaMaisFechar.addEventListener('click', () => janelaModal('close', componenteModalSaibaMais))

/* Botão assistir */
const componenteVideos = document.querySelector('[data-videos]')

const botaoAssistirAciona = document.querySelector('[data-assistir-button-aciona]')
const fecharBotaoAssistir = document.querySelector('[data-fechar-assistir]')

botaoAssistirAciona.addEventListener('click', () => janelaModal('open', componenteVideos))
fecharBotaoAssistir.addEventListener('click', () => janelaModal('close', componenteVideos))