const btn = document.querySelector(".burger");
const menu = document.querySelector('nav')

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  menu.classList.toggle("menu-active");

});
