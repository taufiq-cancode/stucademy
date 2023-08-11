const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  menu.classList.toggle("open");
});
