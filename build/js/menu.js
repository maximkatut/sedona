"use strict";

var closeMenuButton = document.querySelector(".main-nav__close");
var openMenuButton = document.querySelector(".page-header__toggle");
var mainMenu = document.querySelector(".main-nav__list");
var wrapper = document.querySelector(".page-header__wrapper");

var toggleMenu = function (display) {
  closeMenuButton.style.display = display;
  mainMenu.style.display = display;
};

if (matchMedia) {
  const mq = window.matchMedia("(min-width: 768px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  if (mq.matches) {

    closeMenuButton.style.display = "none";
    mainMenu.style.display = "flex";
    openMenuButton.style.display = "none";
    wrapper.style.paddingBottom = "0";

  } else {

    toggleMenu("none");
    openMenuButton.style.display = "inline-block";
    wrapper.style.paddingBottom = "15px";

    openMenuButton.addEventListener("click", function () {
      toggleMenu("block");
      openMenuButton.style.display = "none";
      wrapper.style.paddingBottom = "55px";
    });

    closeMenuButton.addEventListener("click", function () {
      toggleMenu("none");
      openMenuButton.style.display = "inline-block";
      wrapper.style.paddingBottom = "15px";
    });

  }
};
