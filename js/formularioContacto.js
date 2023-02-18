const $form = document.querySelector('[data-form]');
console.log($form);
const $botonMailto = document.querySelector('[data-mailto]');
console.log($botonMailto);

$form.addEventListener("submit", function ejecutarSiHayUnSubmit(evento) {
  evento.preventDefault();

  const from = new FormData($form);
  const nombreIngresado = from.get("nombre");
  const correoIngresado = from.get('email');
  const asuntoIngresado = from.get('asunto');
  const mensajeIngresado = from.get('mensaje');
  console.log(nombreIngresado);

  $botonMailto.setAttribute('href',`mailto:${correoIngresado}?subject=${asuntoIngresado}&body=${mensajeIngresado}`);
  $botonMailto.click();
  $form.reset();
  
});
