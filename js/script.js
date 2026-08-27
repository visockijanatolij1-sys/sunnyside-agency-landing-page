const menu = document.querySelector(".menu");
const button = document.querySelector(".burger-icon");

button.addEventListener("click", () => {
    menu.classList.toggle("open-menu");
    button.classList.toggle("active");
});