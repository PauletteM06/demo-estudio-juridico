import "../sass/styles.scss";

//Elementos del DOM
const btnHamburguer = document.querySelector(".btn-hamburguer");
const nav = document.querySelector(".nav");

//Evento menú para Mobile
btnHamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
});

nav.addEventListener("click", () => {
  nav.classList.remove("active");
});


// Animaciones

function callback(entries) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("unset", entry.isIntersecting);
  });
}

const options = {
  root: null,
  rootMargin: "10px",
  threshold: 0,
};

const observer = new IntersectionObserver(callback, options);

const elements = document.querySelectorAll("[data-animation]");
console.log(elements);

elements.forEach((elemento) => {
  observer.observe(elemento);
});
