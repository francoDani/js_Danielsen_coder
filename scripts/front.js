let nav = document.getElementById("nav");
let menuList = document.querySelector(".menu__nav");

const showMenu = () => {
  nav.classList.toggle("show");
  menuList.classList.toggle("hiden");
};
const showError = () => {
  document.querySelector(".error__msg").classList.add("show");
};
const hideError = () => {
  document.querySelector(".error__msg").classList.remove("show");
};
const deleteProduct = (target) => {
  if (confirm("Estas seguro?")) {
    localStorage.removeItem(target);
    displayproducts('clear');
  }
};
const deleteSearchedProduct = (target) => {
  if (confirm("Estas seguro?")) {
    localStorage.removeItem(target);
    searchProduct('clear');
  }
};