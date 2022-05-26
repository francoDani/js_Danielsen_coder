let iteration = +prompt("ingresa un numero para ejecutar el bucle");

for (let i = 1; i <= iteration; i++) {
  console.log("esta es la iteración n°: " + i);
}

let text = prompt("ingresa un texto para descomponer");

for (let i = 0; i <= text.length; i++) {
  console.log(text[i]);
  if (i == text.length) {
    alert("tu texto se descompuso con éxito!");
  }
}

let esc = prompt("ingresa la palabra clave");

while (esc != "esc") {
    console.log('Esa no es la palabra clave!');
    esc = prompt("no tuviste suerte!");
};
