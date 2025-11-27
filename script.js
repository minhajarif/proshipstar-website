// mobile menu toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// About section default hidden, click pe show
const aboutLink = document.querySelector('a[href="#about"]');
const aboutSection = document.getElementById("about");

if (aboutLink && aboutSection) {
  aboutSection.style.display = "none";

  aboutLink.addEventListener("click", (e) => {
    e.preventDefault();
    aboutSection.style.display = "block";
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
}

// footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
