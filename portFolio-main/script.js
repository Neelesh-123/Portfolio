document.addEventListener("DOMContentLoaded", function () {
    // Typewriter Effect
    const welcomeText = "Welcome to My Portfolio";
    let i = 0;
    function typeEffect() {
        if (i < welcomeText.length) {
            document.querySelector("#home h2").textContent += welcomeText.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }
    document.querySelector("#home h2").textContent = "";
    typeEffect();

    // Smooth Scroll for Navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact Form Validation
    document.querySelector("#contact form").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.querySelector("#contact input[type='text']").value.trim();
        const email = document.querySelector("#contact input[type='email']").value.trim();
        const message = document.querySelector("#contact textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("❌ Please fill all fields!");
            return;
        }

        alert("✅ Message Sent Successfully!");
        this.reset();
    });

    // Scroll Animation (Fade-in effect)
    const sections = document.querySelectorAll("section");
    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("fade-in");
            }
        });
    };
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run once on page load
});
