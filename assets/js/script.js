let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let loginBtn = document.querySelector('#login-btn');
let login = document.querySelector('.login-form');

menu.onclick = () => {
    menu.classList.toggle('fa-bars');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

loginBtn.onclick = () => {
    login.classList.toggle('active');
};
