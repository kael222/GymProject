//Hamburger

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("hamburger-active");
  nav.classList.toggle("navigation-active");
});

//Slider

var slideIndex = 0;

function slideshow() {
  var slide = document.getElementsByClassName("slides");
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex++;
  // for (let i = 0; i < slide.length; i++) {
  //   slide[i].style.display = "none";
  // }
  if (slideIndex > slide.length) {
    slideIndex = 1;
  }
  slide[slideIndex - 1].style.display = "block";
  setTimeout(slideshow, 3000);
}
slideshow();
