'use strict'

function scrollToSection(id) 
{
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").action = "https://formspree.io/f/xnnvvvbq";