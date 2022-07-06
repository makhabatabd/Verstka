function navToggle() {
  let navBtn = document.getElementById("navBtn");
  let mainNav = document.getElementById("mainNav");
  navBtn.onclick = function () {
    if (mainNav.classList.contains("nav-hidden")) {
      mainNav.classList.remove("nav-hidden");
      mainNav.style.height = 315 + "px";
      mainNav.style.transition = "height 2s";
    } else {
      mainNav.classList.add("nav-hidden");
      mainNav.style.height = 0;
    }
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      mainNav.style.height = 48 + "px";
      mainNav.classList.add("nav-hidden");
      mainNav.style.transition = "height 0s";
    } else if (window.innerWidth <= 700) {
      console.log(mainNav.style.height);
      mainNav.style.height = 0;
      mainNav.classList.add("nav-hidden");
    }
  });
}

navToggle();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
