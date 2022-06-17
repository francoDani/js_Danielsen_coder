let food = [];
let candy = [];
let drinks = [];
let sinCategoría = [];

/**
 * this constructor will be used to create new products
 * @param {string} name product name
 * @param {string} category product category
 * @param {number} cost product cost
 * @param {number} margin porcentage of profit
 * @param {number} price cost plus margin
 */
function Product(name, category, cost, margin, price) {
  this.name = name;
  this.category = category;
  this.cost = cost;
  this.margin = margin;
  this.price = price;
  this.calculatePrice = function () {
    this.price = cost + (cost * margin) / 100;
  };
}

/**
 * this function will sort the products by category
 * @param {object} product product object
 */
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
      break;
    default:
      sinCategoría.push(product);
      break;
  }
};

/**
 * this function will create the new product and will iterate many times as the user needs
 */
let newProduct = () => {
  let name = prompt("Nombre del producto");
  name = name.toLocaleUpperCase();

  let category = prompt("Categoría: 1-Comestibles 2-golosinas 3-Bebidas");
  category.toLocaleLowerCase;
  let cost = +prompt("Costo del producto");
  let margin = +prompt("Margen de ganancia deseado");
  let product = new Product(name, category, cost, margin);
  product.calculatePrice();
  orderByCategory(product);
  let newOne = prompt("quieres agregar otro producto?");
  if (newOne == "si") {
    newProduct();
  } else {
    if (food.length != 0) {
      console.warn("Tienes registrados " + food.length + " comestibles:");
      food.forEach((comestible) => {
        console.log(comestible.name + " $" + comestible.price);
      });
    } else {
      console.error("No tienes comestibles registrados");
    }
    if (candy.length != 0) {
      console.warn("Tienes registradas " + candy.length + " golosinas:");
      candy.forEach((golosina) => {
        console.log(golosina.name + " $" + golosina.price);
      });
    } else {
      console.error("No tienes Golosinas registradas");
    }
    if (drinks.length != 0) {
      console.warn("Tienes registradas " + drinks.length + " bebidas:");
      drinks.forEach((bebida) => {
        console.log(bebida.name + " $" + bebida.price);
      });
    } else {
      console.error("No tienes bebidas registradas");
    }
    console.warn("Productos sin registrar");
    sinCategoría.forEach((product) => {
      console.log(product.name + " $" + product.price);
    });
  }
};

newProduct();

let productToSearch = prompt("Que producto buscas?");

/**
 * this function will be used to iterate through the arrays to find an item
 * @param {string} toSearch this input will be used to search in all te arrays for a matching product
 */
const searchProduct = (toSearch) => {
  toSearch = toSearch.toLocaleUpperCase();
  let found;
  if (food.length || candy.length || drinks.length || sinCategoría) {
    for (i = 0; food.length > i; i++) {
      if (food[i].name == toSearch) {
        console.warn("El " + food[i].name + " cuesta " + food[i].price);
        found = true;
      }
    }
    if (!found) {
      for (i = 0; candy.length > i; i++) {
        if (candy[i].name == toSearch) {
          console.warn("El " + candy[i].name + " cuesta " + candy[i].price);
          found = true;
        }
      }
    }
    if (!found) {
      for (i = 0; drinks.length > i; i++) {
        if (drinks[i].name == toSearch) {
          console.warn("La " + drinks[i].name + " cuesta " + drinks[i].price);
          found = true;
        }
      }
    }
    if (!found) {
      for (i = 0; sinCategoría.length > i; i++) {
        if (sinCategoría[i].name == toSearch) {
          console.warn(
            "El " +
              sinCategoría[i].name +
              " cuesta " +
              sinCategoría[i].price +
              " y no se encuentra en ninguna categoría"
          );
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
  let newSearch = prompt("Desea realizar otra búsqueda?");
  newSearch = newSearch.toLocaleLowerCase();
  if (newSearch == "si") {
    searchProduct(prompt("que producto buscas?"));
  } else console.warn("GRACIAS POR USAR NUESTRA HERRAMIENTA");
};

searchProduct(productToSearch);