var menuBtn = document.querySelector(".main-nav__toggle-btn");
var menuPopup = document.querySelector(".main-nav__hider");

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
