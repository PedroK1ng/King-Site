window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
});
