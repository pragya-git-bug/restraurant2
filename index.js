var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 5000);

const menuBtn = document.querySelector(".menu-btn");
const navlinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("mobile-menu");
});


