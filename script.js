// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// 3D Tilt Effect (Requires VanillaTilt.js)
document.addEventListener("DOMContentLoaded", function () {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js";
    script.onload = () => {
        VanillaTilt.init(document.querySelectorAll(".project-card"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
        });
    };
    document.body.appendChild(script);
});