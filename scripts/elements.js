let table = document.getElementById("table-body");
let nameInput = document.getElementById("product__name");
let costInput = document.getElementById("product__cost");
let gainInput = document.getElementById("product__gain");
let categoryInput = document.getElementById("product__category");
let searchTable = document.getElementById("search-table-body");
let searchSection = document.querySelector(".search__section");
let searchRender = document.getElementById("search__value");
let newRow = document.createElement("tr");
let newProductSection = document.querySelector(".new__product");

let button = (target) => {
  return `<button class='delete' onClick='deleteProduct(${target})'>Borrar</button>`;
};