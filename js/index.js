let animal = document.getElementById("animal"); 
let btnAgregar = document.getElementById("btnAgregar"); 
let listar = document.getElementById("listado"); 

(function agregaElemento () {
  btnAgregar.addEventListener("click", () => {
    listar.innerHTML += `<p>${animal.value}</p>`
  })
})()