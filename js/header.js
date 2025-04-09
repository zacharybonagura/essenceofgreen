/* || HEADER RESIZE */
var header = document.querySelector(".header");
var maxHeight = 110;
var minHeight = 80;
var maxScroll = 500;
var previousHeight = maxHeight;

function adjustHeader() {
  var scrollPosition = window.scrollY;

  if (window.innerWidth <= 820) {
    maxHeight = 80;
    minHeight = 60;
  } else {
    maxHeight = 110;
    minHeight = 80;
  }

  var newHeight = Math.round(
    maxHeight - (scrollPosition / maxScroll) * (maxHeight - minHeight)
  );

  newHeight = Math.max(minHeight, Math.min(maxHeight, newHeight));
  if (Math.abs(previousHeight - newHeight) > 1) {
    header.style.height = newHeight + "px";
    header.style.paddingTop = header.style.paddingBottom =
      (newHeight - minHeight) / 2 + "px";

    previousHeight = newHeight;
  }
}

window.addEventListener("load", () => {
  requestAnimationFrame(adjustHeader);
  var scrollPosition = window.scrollY;

  var initialHeight = Math.round(
    maxHeight - (scrollPosition / maxScroll) * (maxHeight - minHeight)
  );

  initialHeight = 5000;

  header.style.height = initialHeight + "px";
  header.style.paddingTop = header.style.paddingBottom =
    (initialHeight - minHeight) / 2 + "px";

  previousHeight = initialHeight;
});

window.addEventListener("resize", () => {
  requestAnimationFrame(adjustHeader);
});
window.addEventListener("scroll", () => {
  requestAnimationFrame(adjustHeader);
});

window.onload = function () {
  header.style.height = maxHeight + "px";
  header.style.paddingTop = "17.5px";
  header.style.paddingBottom = "17.5px";
};

/* HAMBURGER */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".header__nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});
