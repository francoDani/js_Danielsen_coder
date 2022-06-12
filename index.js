let comestibles = [];
let golosinas = [];
let bebidas = [];
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
      comestibles.push(product);
      break;
    case "1":
      comestibles.push(product);
      break;
    case "golosinas":
      golosinas.push(product);
      break;
    case "2":
      golosinas.push(product);
      break;
    case "3":
      bebidas.push(product);
      break;
    case "bebidas":
      bebidas.push(product);
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
  let category = prompt("Categoría: 1-Comestibles 2-golosinas 3-Bebidas");
  category.toLocaleLowerCase;
  let cost = +prompt("Costo del producto");
  let margin = +prompt("Margen de ganancia deseado");
  name = new Product(name, category, cost, margin);
  name.calculatePrice();
  console.log(name);
  orderByCategory(name);
  let newOne = prompt("quieres agregar otro producto?");
  if (newOne == "si") {
    newProduct();
  }else{
    console.info("Tienes registrados " + comestibles.length + " comestibles:")
    comestibles.forEach(comestible => {
      console.log(comestible.name + " $"+ comestible.price);
    });
    console.info("Tienes registradas " + golosinas.length + " golosinas:")
    golosinas.forEach(golosina => {
      console.log(golosina.name + " $"+ golosina.price);
    });
    console.info("Tienes registradas " + bebidas.length + " bebidas:")
    bebidas.forEach(bebida => {
      console.log(bebida.name + " $"+ bebida.price);
    });

  }
};

newProduct();