let products = [];
let food = [];
let candy = [];
let drinks = [];
let sinCategoría = [];
let table = document.getElementById("table-body");
let newRow = document.createElement("tr");
let newTd = document.createElement("td");
let name = prompt("Como es tu nombre?");

let saludo = (name) => {
  while (!name) {
    name = prompt("Debe ingresar un nombre para continuar");
  }
  tittle.innerHTML += name;
};

saludo(name);
class Product {
  constructor(name, category, cost, margin, price) {
    this.name = name;
    this.category = category;
    this.cost = cost;
    this.margin = margin;
    this.price = price;
    this.calculatePrice = function () {
      this.price = cost + (cost * margin) / 100;
    };
  }
}

let displayproducts = () => {
  if (food.length != 0) {
    for (let one of food) {
      table.innerHTML += `<tr><td>${one.name}</td><td>${one.category}</td><td>${one.cost}</td><td>${one.margin}</td><td>${one.price}</td></tr>`;
    }
  } else {
    console.error("No tienes comestibles registrados");
  }
  if (candy.length != 0) {
    for (let can of candy) {
      table.innerHTML += `<tr><td>${can.name}</td><td>${can.category}</td><td>${can.cost}</td><td>${can.margin}</td><td>${can.price}</td></tr>`;
    }
  } else {
    console.error("No tienes Golosinas registradas");
  }
  if (drinks.length != 0) {
    for (let drink of drinks) {
      table.innerHTML += `<tr><td>${drink.name}</td><td>${drink.category}</td><td>${drink.cost}</td><td>${drink.margin}</td><td>${drink.price}</td></tr>`;
    }
  } else {
    console.error("No tienes bebidas registradas");
  }
  if (sinCategoría.length != 0) {
    for (let whithout of sinCategoría) {
      table.innerHTML += `<tr><td>${whithout.name}</td><td>${whithout.category}</td><td>${whithout.cost}</td><td>${whithout.margin}</td><td>${whithout.price}</td></tr>`;
    }
  }
};

let orderByCategory = (product) => {
  switch (product.category) {
    case "comestibles":
      food.push(product);
      break;
    case "1":
      food.push(product);
      break;
    case 1:
      food.push(product);
      break;
    case "golosinas":
      candy.push(product);
      break;
    case "2":
      candy.push(product);
      break;
    case "3":
      drinks.push(product);
      break;
    case "bebidas":
      drinks.push(product);
      break;
    case "":
      sinCategoría.push(product);
      break;
    default:
      sinCategoría.push(product);
      break;
  }
};

let newProduct = () => {
  let name = prompt("Nombre del producto");
  name = name.toLocaleUpperCase();

  let category = prompt("Categoría: 1-Comestibles 2-golosinas 3-Bebidas");
  category.toLocaleLowerCase;
  switch (category) {
    case "1":
      category = "comestibles";
      break;
    case "2":
      category = "golosinas";
      break;
    case "3":
      category = "bebidas";
      break;
    default:
      break;
  }

  let cost = +prompt("Costo del producto");
  let margin = +prompt("Margen de ganancia deseado");
  let product = new Product(name, category, cost, margin);
  product.calculatePrice();
  orderByCategory(product);
  let newOne = prompt("quieres agregar otro producto?");
  if (newOne == "si") {
    newProduct();
  } else {
    displayproducts();
  }
};

let searchRender = document.getElementById("search");
/**
 * this function will be used to iterate through the arrays to find an item
 * @param {string} toSearch this input will be used to search in all te arrays for a matching product
 */
const searchProduct = () => {
  let toSearch = prompt("Que producto buscas?");
  toSearch = toSearch.toLocaleUpperCase();
  let found;
  if (food.length || candy.length || drinks.length || sinCategoría) {
    for (i = 0; food.length > i; i++) {
      if (food[i].name == toSearch) {
        searchRender.innerHTML = `<li>${food[i].name} cuesta ${food[i].price}</li>`;
        found = true;
      }
    }
    if (!found) {
      for (i = 0; candy.length > i; i++) {
        if (candy[i].name == toSearch) {
          searchRender.innerHTML = `<li>${candy[i].name} cuesta ${candy[i].price}</li>`;
          found = true;
        }
      }
    }
    if (!found) {
      for (i = 0; drinks.length > i; i++) {
        if (drinks[i].name == toSearch) {
          searchRender.innerHTML = `<li>${drinks[i].name} cuesta ${drinks[i].price}</li>`;
          found = true;
        }
      }
    }
    if (!found) {
      for (i = 0; sinCategoría.length > i; i++) {
        if (sinCategoría[i].name == toSearch) {
          searchRender.innerHTML = `<li>${sinCategoría[i].name} cuesta ${sinCategoría[i].price}</li>`;
          found = true;
        }
      }
    }
    if (!found) {
      console.error("Su producto no se encuentra en nuestra lista");
    }
  } else {
    console.error("No hay ningún producto registrado aún");
  }
};
