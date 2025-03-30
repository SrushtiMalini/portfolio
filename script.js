document.addEventListener("DOMContentLoaded", function() {
    let welcomeText = document.querySelector(".welcome");
    
    // Show welcome text with animation
    welcomeText.style.opacity = "1";
    welcomeText.style.transform = "translateY(0)";
    
    // Hide it after 3 seconds
    setTimeout(() => {
        welcomeText.style.opacity = "0";
        welcomeText.style.display = "none";
    }, 3000);
});