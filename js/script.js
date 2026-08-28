const menu = document.querySelector(".menu");
const button = document.querySelector(".burger-icon");
const heroTitle = document.querySelector(".hero-title");
const heroArrow = document.querySelector(".hero-arrow");

button.addEventListener("click", () => {
    const isOpen = menu.classList.toggle('open-menu');

    button.classList.toggle('active');
    button.setAttribute('aria-expanded', isOpen);

    heroTitle.classList.toggle("none");
    heroArrow.classList.toggle("none");

    menu.inert = !isOpen;
});