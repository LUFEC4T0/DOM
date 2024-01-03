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

const $divId = document.getElementById('contenedor')

function cardMaker(frutas) {
    return `<section class="flex flex-col items-center w-96 border rounded border-black text-center">
    <img class="w-64 h-48 object-cover" src="${frutas.foto}" alt="Foto fruta">
    <h3 class="">${frutas.nombre}</h3>
    <p class="">${frutas.descripcion}</p>
</section>`
}

$divId.innerHTML += frutas.reduce (
    (acumulador, fruta) => (acumulador += cardMaker(fruta)),
    " "
)

const frutasDulces = frutas.filter((fruta) => fruta.esDulce);
function dulces(elementos) {
  const listaUl = document.createElement(`ul`);
  elementos.forEach((fruta) => {
    const listaLi = document.createElement(`li`);
    listaLi.textContent = fruta.nombre;
    listaUl.appendChild(listaLi);
  });
  return listaUl;
}

const $lista = document.getElementById(`lista`);
$lista.appendChild(dulces(frutasDulces));