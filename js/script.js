var menuBtn = document.querySelector(".main-nav__toggle-btn");
var menuPopup = document.querySelector(".main-nav__hider");
var popupContainer = document.querySelector(".pop-up");
var popupOpener1 = document.querySelector(".week-best__order-button");
var popupOpener2 = document.querySelector(".manufacturing__make-order");


if (popupOpener1) {
  popupOpener1.addEventListener("click", Opener);
}

if (popupOpener2) {
  popupOpener2.addEventListener("click", Opener);
}

function Opener(event) {
  event.preventDefault();
  if (popupContainer.classList.contains("pop-up--close")) {
    popupContainer.classList.remove("pop-up--close");
  }
}


if (menuPopup.classList.contains("main-nav__hider--no-js")) {
  menuPopup.classList.remove("main-nav__hider--no-js");
}

menuBtn.addEventListener("click", function(event) {
  event.preventDefault();
  menuBtn.classList.toggle("main-nav__toggle-btn--close");
  if (menuPopup.classList.contains("main-nav__hider--show")) {
    menuPopup.classList.remove("main-nav__hider--show");
    menuPopup.classList.add("main-nav__hider--hide");
  } else {
    menuPopup.classList.remove("main-nav__hider--hide");
    menuPopup.classList.add("main-nav__hider--show");
  }
});

popupContainer.addEventListener("click", Closer);

function Closer(event) {
  event.preventDefault();
  popupContainer.classList.add("pop-up--close");
}

function Opener(event) {
  event.preventDefault();
  if (popupContainer.classList.contains("pop-up--close")) {
    popupContainer.classList.remove("pop-up--close");
  }
}
