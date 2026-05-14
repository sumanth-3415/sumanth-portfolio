// Cursor Animation

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

// Navbar Background

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.8)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.5)";
    }

});

// Reveal Animation

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .about-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});