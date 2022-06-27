let products = [];
let food = [];
let candy = [];
let drinks = [];
let sinCategoría = [];
let table = document.getElementById("table-body");
let newRow = document.createElement("tr");
let newTd = document.createElement("td");
let newProductSection = document.querySelector('.new__product');

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

let displayproducts = (product) => {
  table.innerHTML += `<tr><td>${product.name}</td><td>${product.category}</td><td>${product.cost}</td><td>%${product.margin}</td><td>${product.price}</td></tr>`;
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

const clearFields = () => {
  document.getElementById("product__name").value = "";  
  document.getElementById("product__name").classList.remove('error');
  document.getElementById("product__category").value = "";
  document.getElementById("product__category").classList.remove('error');
  document.getElementById("product__cost").value = "";
  document.getElementById("product__cost").classList.remove('error');
  document.getElementById("product__gain").value = "";
  document.getElementById("product__gain").classList.remove('error');
};

let newProduct = () => {
  let name = document.getElementById("product__name").value;
  name = name.toLocaleUpperCase();
  let category = document.getElementById("product__category").value;
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

  let cost = +document.getElementById("product__cost").value;
  let margin = +document.getElementById("product__gain").value;
  if (name != " " && name != "" && category != "" && cost != "" && margin != "") {
    let product = new Product(name, category, cost, margin);
    product.calculatePrice();
    orderByCategory(product);
    displayproducts(product);
    clearFields();
    document.querySelector('.error__msg').classList.remove('show');    
  }else{
    document.querySelector('.error__msg').classList.add('show');
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
newProductSection.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
    newProduct();
  }
})
/* 
$(".input1").on('keyup', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    newProduct()
  }
}); */