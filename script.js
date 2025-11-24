// REGISTRATION FORM
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Email must contain @
        if (!email.includes("@")) {
            alert("Email must contain '@'.");
            e.preventDefault();
            return;
        }

        // Password must be at least 6 characters
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            e.preventDefault();
            return;
        }

        alert("Registration successful!");
    });
}
// NAV BAR TOGGLE
const navToggler = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector("#navbarNav");

if (navToggler && navMenu) {
    navToggler.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}
