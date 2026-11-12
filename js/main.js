import '../sass/styles.scss';

//Elementos del DOM
const btnHamburguer = document.querySelector('.btn-hamburguer');
const nav = document.querySelector('.nav');

//Evento menú para Mobile
btnHamburguer.addEventListener('click', () => {
    nav.classList.toggle('active');
})

nav.addEventListener('click', () => {
    nav.classList.remove('active');
})