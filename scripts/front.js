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
    swal({
      title: "Estas seguro?",
      text: `Estas por eliminar de manera definitiva ${target}`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal(`${target} fue eliminado correctamente`, {
          icon: "success",
        });
        localStorage.removeItem(target);
        displayproducts('clear');        
      }
    });
};
const deleteSearchedProduct = (target) => {
  swal({
    title: "Estas seguro?",
    text: `Estas por eliminar de manera definitiva ${target}`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal(`${target} fue eliminado correctamente`, {
        icon: "success",
      });
      localStorage.removeItem(target);
      searchProduct('clear');        
    }
  });
};