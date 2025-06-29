'use strict'

function scrollToSection(id) 
{
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// document.getElementById("contactForm").action = "https://formspree.io/f/xnnvvvbq";

// Initialize EmailJS
(function () {
  emailjs.init({
    publicKey: "k9C2bCdOYEbCphdue", // Your actual EmailJS public key
  });
})();

// Form submission logic
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_ramsundar2001", "template_6nbz3qc", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    })
    .catch((err) => {
      console.error("Failed:", err);
      alert("Something went wrong. Please try again.");
    });
});