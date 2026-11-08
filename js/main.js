import '../sass/styles.scss';

//Elementos del DOM
const btnHamburguer = document.querySelector('.btn-hamburguer');
const nav = document.querySelector('.nav');

//Evento menú para Mobile
btnHamburguer.addEventListener('click', event => {
    nav.classList.toggle('active');

})