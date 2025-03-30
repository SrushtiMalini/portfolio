// script.js
document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.getElementById("welcome");
    setTimeout(() => {
        welcomeText.style.display = "none";
    }, 3000);

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});


