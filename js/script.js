const menu = document.querySelector(".menu");
const button = document.querySelector(".burger-icon");
const heroTitle = document.querySelector(".hero-title");
const heroArrow = document.querySelector(".hero-arrow");

button.addEventListener("click", () => {
    menu.classList.toggle("open-menu");
    button.classList.toggle("active");

    heroTitle.classList.toggle("none");
    heroArrow.classList.toggle("none");
});