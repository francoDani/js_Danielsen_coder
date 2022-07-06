let food = [];
let candy = [];
let drinks = [];
let sinCategoría = [];
let table = document.getElementById("table-body");
let searchTable = document.getElementById("search-table-body");
let searchSection = document.querySelector(".search__section");
let searchRender = document.getElementById("search__value");
let newRow = document.createElement("tr");
let newTd = document.createElement("td");
let newProductSection = document.querySelector(".new__product");
let button = (target) => {
  return `<button class='delete' onClick='deleteProduct(${target})'>Borrar</button>`;
};

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

const displayproducts = (e) => {
  table.innerHTML = "";
  if (localStorage.length != 0) {
    for (i = 0; i <= localStorage.length; i++) {
      let item = localStorage.getItem(localStorage.key(i));
      item = JSON.parse(item);
      /* Desestructuración */
      const {name, category, cost, margin, price} = item;
      let id = name;
      table.innerHTML += `<tr><td>${id}</td><td>${category}</td><td>${cost}</td><td>%${margin}</td><td>${price}</td><td><button onClick="deleteProduct('${id}')">Borrar</button></td></tr>`;
    }
  }
};

const orderByCategory = (product) => {
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

/* spread */
const showAll = () => {
  let batch = [...candy, ...drinks, ...food, ...sinCategoría];  
  let historicList = document.querySelector("#historic__ul");
  batch.forEach(element => historicList.innerHTML += `<li>${element.name}</li>`)
}

const clearFields = () => {
  document.getElementById("product__name").value = "";
  document.getElementById("product__name").classList.remove("error");
  document.getElementById("product__category").value = "";
  document.getElementById("product__category").classList.remove("error");
  document.getElementById("product__cost").value = "";
  document.getElementById("product__cost").classList.remove("error");
  document.getElementById("product__gain").value = "";
  document.getElementById("product__gain").classList.remove("error");
};

const loadItem = (product) => {
  localStorage.setItem(product.name, JSON.stringify(product));
};

const newProduct = () => {
  let name = document.getElementById("product__name").value;
  name = name.toLocaleUpperCase();
  let category = document.getElementById("product__category").value;
  let cost = +document.getElementById("product__cost").value;
  let margin = +document.getElementById("product__gain").value;
  if (noBlankField(name, category, cost, margin)) {
    let product = new Product(name, category, cost, margin);
    product.calculatePrice();
    orderByCategory(product);
    clearFields();
    loadItem(product);
    hideError();
    displayproducts();    
  } else {
    showError();
  }
};

/**
 * this function will be used to iterate through the arrays to find an item
 * @param {string} toSearch this input will be used to search in all te arrays for a matching product
 */
const searchProduct = (e) => {
  if (e == "clear") {
    searchTable.innerHTML = "";
  } else {
    let toSearch = searchRender.value;
    toSearch = toSearch.toLocaleUpperCase();
    let element = localStorage.getItem(toSearch);
    if (element == null) {
      searchRender.classList.add("error");
    } else {
      searchRender.classList.remove("error");
      let product = JSON.parse(localStorage.getItem(toSearch));
      /* Desestructuración */
      const {name, category, cost, margin, price} = product;
      let id = name;
      searchTable.innerHTML = `<tr><td>${name}</td><td>${category}</td><td>${cost}</td><td>%${margin}</td><td>${price}</td><td><button onClick="deleteSearchedProduct('${id}')">Borrar</button></td></tr>`;
    }
  }
};
newProductSection.addEventListener("keyup", ({ key }) => {
  if (key === "Enter") {
    newProduct();
  }
});

displayproducts();