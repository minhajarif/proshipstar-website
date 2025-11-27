// HERO SLIDER LOGIC

const slides = document.querySelectorAll(".ps-hero-slide");
const dotsContainer = document.querySelector(".ps-hero-dots");

if (slides.length && dotsContainer) {
  let current = 0;

  // create dots
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("span");

  function goToSlide(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = index;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function nextSlide() {
    let next = current + 1;
    if (next >= slides.length) next = 0;
    goToSlide(next);
  }

  setInterval(nextSlide, 5000);
}
