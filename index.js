let tittle = document.getElementById("tittle")
let name = prompt("Como es tu nombre?")
let products = [];



const saludo = (name) => {
  while(!name) {
    name = prompt("Debe ingresar un nombre para continuar")
  }
  tittle.innerHTML += name;
}

saludo(name);
