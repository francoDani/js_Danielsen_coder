let iteration = +prompt("ingresa un numero para ejecutar el bucle");

if(iteration != 0){
  for (let i = 1; i <= iteration; i++) {
    console.log("esta es la iteración n°: " + i);
  }
}else{console.log('cero no cuenta, perdiste')}


let text = prompt("ingresa un texto para descomponer");

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
  if (i == text.length) {
    alert("tu texto se descompuso con éxito!");
  }
}

let esc = (prompt("ingresa la palabra clave")).toUpperCase();


while (esc != "ESC") {    
    console.log('Esa no es la palabra clave!');
    esc = prompt("no tuviste suerte!");
};

let number = +(prompt('ingresa un número'));

for (let i = 0; i <= 10; i++) {
  let result = number * i;
  console.log(number + ' x ' + i + ' = '+ result);
}
