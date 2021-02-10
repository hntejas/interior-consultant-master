const HAM_BTN = document.getElementById("hamBtn");
const menu = document.getElementsByClassName("menu")[0];
const logo = document.getElementsByClassName("logo")[0];
const footer = document.getElementsByClassName("footer")[0];
const content = document.getElementsByClassName("content-wrapper")[0];

HAM_BTN.addEventListener('click', function(e){
    var isActive = !!HAM_BTN.className.split(' ')[1];
    if(isActive){
        HAM_BTN.classList.remove('active');
        menu.classList.add('hide')
        footer.classList.remove('hide');
        content.classList.remove('hide');
        logo.classList.remove('hide');
    }else{
        HAM_BTN.classList.add('active');
        menu.classList.remove('hide')
        footer.classList.add('hide');
        content.classList.add('hide');
        logo.classList.add('hide');
    }
})