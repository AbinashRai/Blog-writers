//this is the script for navbar on scroll to show color.
navEl = document.querySelector(".fixed-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 65) {
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 65) {
    navEl.classList.remove("navbar-scrolled");
  }
});
