const $form = document.querySelector('[data-form]');
console.log($form);


$form.addEventListener("submit", function ejecutarSiHayUnSubmit(evento) {
  evento.preventDefault();

  const from = new FormData($form);
  const nombreIngresado = from.get("nombre");
  const correoIngresado = from.get('email');
  const asuntoIngresado = from.get('asunto');
  const mensajeIngresado = from.get('mensaje');
  console.log(nombreIngresado);

  const nuevaEtiquetaA = document.createElement("a");
  nuevaEtiquetaA.classList.add("a11");
  nuevaEtiquetaA.style = "color: red";
  //nuevaEtiquetaA.textContent = "url-Mailto";
  document.querySelector(".formcontacto__formulario").appendChild( nuevaEtiquetaA);
const $botonMailto1 = document.querySelector('.a11');
$botonMailto1.setAttribute('href',`mailto:${correoIngresado}?subject=${asuntoIngresado}&body=${mensajeIngresado}`);
$botonMailto1.setAttribute('data-mailto','correo');
$botonMailto1.click();
$form.reset();

});


