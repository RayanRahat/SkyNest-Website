// Mobile navigation menu
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);
});

// Homepage image slider
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(number) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = number;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

if (slides.length > 0) {
    document.querySelector(".slider-next").onclick = () => showSlide(currentSlide + 1);
    document.querySelector(".slider-prev").onclick = () => showSlide(currentSlide - 1);

    dots.forEach((dot, index) => {
        dot.onclick = () => showSlide(index);
    });

    setInterval(() => showSlide(currentSlide + 1), 5000);
}

// Load facility icons
document.addEventListener("DOMContentLoaded", function () {
    if (window.lucide) {
        lucide.createIcons();
    }
});

// Contact form submission
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        formMessage.textContent = "Thank you! Your enquiry has been recorded!.";
        formMessage.style.color = "#247A48";

        contactForm.reset();
    });
}