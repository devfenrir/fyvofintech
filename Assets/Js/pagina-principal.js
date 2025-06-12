/* Interação com saiba mais sobre a fyvo */

const botaoSaibaMais = document.querySelector('[data-saiba-mais]')
const overlay = document.querySelector('[data-overlay-saiba-mais]')
const fecharModal = document.querySelector('[data-fechar-modal]')

botaoSaibaMais.addEventListener('click', () => {
  overlay.style.display = 'flex'
})

fecharModal.addEventListener('click', () => {
  overlay.style.display = 'none'
})

/* ------------------------------------------ */