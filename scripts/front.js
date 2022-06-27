let nav = document.getElementById('nav');
let menuList = document.querySelector('.menu__nav');

const showMenu = () => {
    nav.classList.toggle('show');
    menuList.classList.toggle('hiden')
}