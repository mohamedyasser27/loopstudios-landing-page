const closeBtnSideNav = document.querySelector(".side-nav__close-btn");
const openBtnSideNav = document.querySelector(".side-nav__open-btn");
const sideNavList = document.querySelector(".side-nav__list");

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
