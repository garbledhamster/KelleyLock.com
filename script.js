// Include EmailJS SDK
// Add this in the JavaScript settings under "Add External Scripts/Pens":
// https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js

emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const backToTopBtn = document.getElementById("back-to-top");
  const contactForm = document.getElementById("contact-form");

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Smooth Scrolling
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // Adjust for header height
          behavior: "smooth"
        });
        // Close mobile menu after clicking
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          hamburger.classList.remove("active");
        }
      }
    });
  });

  // Back-to-Top Button Functionality
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Handle Form Submission with EmailJS
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate reCAPTCHA
    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    // Send the form using EmailJS
    emailjs.sendForm('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', contactForm)
      .then(() => {
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
        grecaptcha.reset();
      }, (err) => {
        console.error('FAILED...', err);
        alert("Something went wrong. Please try again later.");
      });
  });
});