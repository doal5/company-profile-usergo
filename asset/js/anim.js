document.addEventListener("DOMContentLoaded", function () {
  const aldoElement = document.querySelector(".row-last-content");

  function handleScroll() {
    const aldoPosition = aldoElement.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (aldoPosition < screenPosition) {
      aldoElement.classList.add("active");
    } else {
      aldoElement.classList.remove("active");
    }
  }

  window.addEventListener("scroll", handleScroll);
});
