// Scroll effect global

const scrollEffect = (element, positionY) => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > positionY) {
            element.classList.add('d-display')
            element.classList.remove('d-none')
        } else {
            element.classList.add('d-none')
            element.classList.remove('d-display')
        }
    })
}

const oferecimentosComponent = document.querySelector('[data-oferecimentos-clientes]')
const cardsOferecimentos = document.querySelector('[data-oferecimentos-cards]')
const iniciativaComponent = document.querySelector('[data-iniciativa]')
const iniciativaTabelaComponent = document.querySelector('[data-controle-financeiro-component]')

scrollEffect(oferecimentosComponent, 60)
scrollEffect(iniciativaComponent, 340)
scrollEffect(iniciativaTabelaComponent, 770)