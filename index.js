const $titulo = document.getElementById ('h1_id')
const tituloPrincipal = "Frutas"

$titulo.textContent = tituloPrincipal

const $headerFooter = document.querySelectorAll('.header_footer')
const bgColorHeaderFooter = ' bg-orange-500'

$headerFooter[0].className += bgColorHeaderFooter
$headerFooter[1].className += bgColorHeaderFooter

const $footerP = document.querySelector('footer p')
const nameFooter = " Luigi Carrascal Torres cohort #53"

$footerP.textContent += nameFooter

const $main = document.querySelector('main')
$main.innerHTML += '<div id="contenedor"> </div>'

const $divId = document.getElementById('contenedor')

function cardMaker () {
    const card = document.createElement('article')
    card.innerHTML += `<h3></h3>
    <img></img>
    <p></p>`
    return card;
}

