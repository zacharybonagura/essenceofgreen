/* || COPYRIGHT */
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

/* || HERO CAROUSEL */
let currentIndex = 0;
const images = document.querySelectorAll(".hero__fade-image");
const totalImages = images.length;

function showNextImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add("active");
}

images[currentIndex].classList.add("active");

setInterval(showNextImage, 8000);
