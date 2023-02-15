//Haz tú validación en javascript acá

//const logo = document.querySelector("[data-logoMario]");
const quitar1 = document.querySelector("[data-quitar1]");
const quitar2 = document.querySelector("[data-quitar2]");
const quitar3 = document.querySelector("[data-quitar3]");
const quitar4 = document.querySelector("[data-quitar4]");
const quitar5 = document.querySelector("[data-quitar5]");
const quitar6 = document.querySelector("[data-quitar6]");


addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelector("[data-bars]");
  //console.log(bars)
  if (bars) {
    bars.addEventListener("click", () => {
      const ul = document.querySelector("[data-nav]");
      ul.classList.toggle("show");
    });
  }

});
const lista = [quitar1,quitar2,quitar3,quitar4,quitar5,quitar6];

function quitar(evento){
  evento.addEventListener("click", function(){
    const q = document.querySelector("[data-nav]");
    q.classList.toggle("show");
  })
}
for (i = 0; i < lista.length; i++) {
  quitar(lista[i]);
}
