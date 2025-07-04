'use strict'
//this is for type writting effect
const name = "< Er. Ramsundar />";
let i = 0;
function typeWritter(){
  if(i < name.length){
    document.getElementById("typeWritter").innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWritter, 100);
  }
}
window.onload = typeWritter;

//this is for smooth scrolling
function scrollToSection(id) 
{
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

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