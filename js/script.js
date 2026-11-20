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

document.querySelector(".slider-next").onclick = function () {
    showSlide(currentSlide + 1);
};

document.querySelector(".slider-prev").onclick = function () {
    showSlide(currentSlide - 1);
};

dots.forEach(function (dot, index) {
    dot.onclick = function () {
        showSlide(index);
    };
});

setInterval(function () {
    showSlide(currentSlide + 1);
}, 5000);

// Load facility icons
if (window.lucide) {
    lucide.createIcons();
}
document.addEventListener("DOMContentLoaded", function () {
    if (window.lucide) {
        lucide.createIcons();
    }
});