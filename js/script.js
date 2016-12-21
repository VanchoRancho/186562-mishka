var menuBtn = document.querySelector(".main-nav__nav-toggle");
var menuPopup = document.querySelectorAll(".main-nav__item--hidden");

for (i = 0; i < menuPopup.length; ++i) {
  menuPopup[i].classList.add("main-nav__item--hide");
}

menuBtn.addEventListener("click", function(event) {
  event.preventDefault();
  menuBtn.classList.toggle("main-nav__nav-toggle--close");
  for (i = 0; i < menuPopup.length; ++i) {
  if (menuPopup[i].classList.contains("main-nav__item--show")) {
    menuPopup[i].classList.remove("main-nav__item--show");
    menuPopup[i].classList.add("main-nav__item--hide");
  } else {
    menuPopup[i].classList.remove("main-nav__item--hide");
    menuPopup[i].classList.add("main-nav__item--show");
  }
}
});
