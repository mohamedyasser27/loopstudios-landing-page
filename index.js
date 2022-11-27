const closeBtnSideNav = document.querySelector(".side-nav__close-btn");
const openBtnSideNav = document.querySelector(".side-nav__open-btn");
const sideNavList = document.querySelector(".side-nav__list");
const headerHeading = document.querySelector(".header__heading");

const header = document.querySelector("header");
function toggleInvisible(element) {
  element.classList.toggle("invisible");
}
let sideMenuOpen = false;
let bigScreenWidth = false;

function toggleSideMenuList() {
  toggleInvisible(openBtnSideNav);
  toggleInvisible(closeBtnSideNav);
  toggleInvisible(sideNavList);
  toggleInvisible(headerHeading)
  header.classList.toggle("sideMenuOpen");/*change background to black using filter */
  sideMenuOpen = !sideMenuOpen;/*check if open so that we close it when we resize to bigger */
}

openBtnSideNav.addEventListener("click", toggleSideMenuList);
closeBtnSideNav.addEventListener("click", toggleSideMenuList);

const observer = new ResizeObserver((entries) => {
  if (entries[0].contentRect.width < 810) {
    bigScreenWidth = false;
  }
  if ((entries[0].contentRect.width > 810) & !bigScreenWidth && sideMenuOpen) {
    toggleSideMenuList();
    bigScreenWidth = true;
  }
});

observer.observe(document.body);

console.log("Founded in 2011, Loopstudios has been producing world-class".length);