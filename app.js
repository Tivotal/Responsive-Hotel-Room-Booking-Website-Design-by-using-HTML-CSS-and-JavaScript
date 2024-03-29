/* Created by Tivotal */

let menuBtn = document.querySelector(".menu_btn");
let navLinks = document.querySelector(".links");
let menuBtnIcon = document.querySelector(".menu_btn i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  let isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "fas fa-times" : "fas fa-bars");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fas fa-bars");
});
