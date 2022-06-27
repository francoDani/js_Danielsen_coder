let nameInput = document.getElementById("product__name");
let costInput = document.getElementById("product__cost");
let gainInput = document.getElementById("product__gain");
let categoryInput = document.getElementById("product__category");

const validate = (field) => {
    if(field.value == "" || field.value == " ") {
        return false;
    }else {
        return true;
    }
}
const errorMsg = () => {
    nameInput.onchange = () => {
        if(validate(nameInput)){
            nameInput.classList.remove('error');
        }else {
            nameInput.classList.add('error');
        }
    }
    categoryInput.onchange = () => {
        if(validate(categoryInput)){
            categoryInput.classList.remove('error');
        }else {
            categoryInput.classList.add('error');
        }
    }
    costInput.onchange = () => {
        if(validate(costInput)){
            costInput.classList.remove('error');
        }else {
            costInput.classList.add('error');
        }
    }
    gainInput.onchange = () => {
        if(validate(gainInput)){
            gainInput.classList.remove('error');
        }else {
            gainInput.classList.add('error');
        }
    }
};

errorMsg()
