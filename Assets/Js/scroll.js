// Scroll effect global

const scrollEffect = (element, positionY) => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > positionY) {
            element.classList.add('visivel-scroll')
            element.classList.remove('invisivel-scroll')
        } else {
            element.classList.add('invisivel-scroll')
            element.classList.remove('visivel-scroll')
        }
    })
}

const oferecimentosComponent = document.querySelector('[data-oferecimentos-clientes]')
const cardsOferecimentos = document.querySelector('[data-oferecimentos-cards]')
const iniciativaComponent = document.querySelector('[data-iniciativa]')
const iniciativaTabelaComponent = document.querySelector('[data-controle-financeiro-component]')
const videosComponent = document.querySelector('[data-videos-assistir]')
const faqComponent = document.querySelector('[data-faq-section]')
const cadastrarUltimaSection = document.querySelector('[data-section-cadastrar-chamada]')


const cardFaqUm = document.querySelector('[data-card-faq-1]')
const cardFaqDois = document.querySelector('[data-card-faq-2]')
const cardFaqTres = document.querySelector('[data-card-faq-3]')
const cardFaqQuatro = document.querySelector('[data-card-faq-4]')

const footerComponent = document.querySelector('[data-footer]')

scrollEffect(oferecimentosComponent, 60)
scrollEffect(iniciativaComponent, 340)
scrollEffect(iniciativaTabelaComponent, 770)
scrollEffect(videosComponent, 1190)
scrollEffect(faqComponent, 1710)
scrollEffect(cardFaqUm, 1770)
scrollEffect(cardFaqDois, 1840)
scrollEffect(cardFaqTres, 1890)
scrollEffect(cardFaqQuatro, 1940)
scrollEffect(cadastrarUltimaSection, 2400)
scrollEffect(footerComponent, 2900)