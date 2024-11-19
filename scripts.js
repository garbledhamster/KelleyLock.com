// Initialize EmailJS
(function () {
  emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID
})();

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded);
  navLinks.classList.toggle('active');
});

// Back-to-Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  const recaptcha = grecaptcha.getResponse();

  if (!recaptcha) {
    alert('Please complete the reCAPTCHA.');
    return;
  }

  // Prepare the template parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    from_phone: phone,
    message: message,
  };

  // Send the email using EmailJS
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(function (response) {
      alert('Your message has been sent successfully!');
      contactForm.reset();
      grecaptcha.reset();
    }, function (error) {
      alert('There was an error sending your message. Please try again later.');
      console.log('FAILED...', error);
    });
});
