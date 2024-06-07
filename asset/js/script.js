window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("blur");
  } else {
    navbar.classList.remove("blur");
  }
});
