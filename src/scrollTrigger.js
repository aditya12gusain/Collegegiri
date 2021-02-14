window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax");
  let scrollPosition = 600 - window.pageYOffset;

  console.log(scrollPosition);

  parallax.style.transform = "translateY(" + scrollPosition * 0.2 + "px)";
});

window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax-y");
  let scrollPosition = 600 - window.pageYOffset;

  console.log(scrollPosition);

  parallax.style.transform = "translateX(-" + scrollPosition * 0.2 + "px)";
});
