// ========== IMAGE SLIDER AUTO PLAY ========== //

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("active");
}

// Slider change every 4 seconds
setInterval(showSlides, 4000);

// Run first slide immediately
showSlides();



// ========== MOBILE RESPONSIVE FUTURE FIX (if navbar toggle needed) ========== //

// You can use this in future if you add hamburger menu
/*
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-center ul");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
*/
