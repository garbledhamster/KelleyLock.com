/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #f5f5dc; /* Soft Beige */
  color: #5d4037; /* Dark Brown */
  line-height: 1.6;
}

a {
  color: #d2691e; /* Chocolate */
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

a:hover {
  color: #b35814; /* Darker Chocolate */
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto; /* Center the container */
  padding: 2rem 0;
}

/* Header */
header {
  background-color: #f5f5dc; /* Soft Beige */
  color: #5d4037; /* Dark Brown */
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

header h1 {
  font-size: 1.8rem;
  letter-spacing: 2px;
  color: #5d4037; /* Dark Brown */
}

header h1 span {
  display: block;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-top: 0.3rem;
  color: #6d4c41; /* Medium Brown */
}

header nav .hamburger {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #5d4037; /* Dark Brown */
}

@media (max-width: 768px) {
  header nav .hamburger {
    display: block;
  }
}

header nav ul.nav-links {
  list-style: none;
  display: flex;
}

header nav ul.nav-links li {
  margin-left: 2rem;
}

header nav ul.nav-links li a {
  font-size: 1rem;
  transition: color 0.3s ease-in-out;
}

header nav ul.nav-links li a:hover {
  color: #d2691e; /* Chocolate */
}

@media (max-width: 768px) {
  header nav ul.nav-links {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: -100%;
    width: 100%;
    background-color: #f5f5dc; /* Soft Beige */
    transition: left 0.3s ease-in-out;
  }

  header nav ul.nav-links.active {
    left: 0;
  }

  header nav ul.nav-links li {
    margin: 1.5rem 0;
    text-align: center;
  }
}

/* Hero Section */
.hero {
  position: relative;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
}

.hero-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  /* Optional: Add a slight dark overlay for better text visibility */
  filter: brightness(70%);
  transition: transform 0.3s ease-in-out;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-align: center;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
}

.hero-text.dark-text {
  color: #ffffff;
  background: rgba(0, 0, 0, 0.4);
}

.hero-text.light-text {
  color: #5d4037; /* Dark Brown */
  background: rgba(255, 248, 225, 0.8); /* Light Cream with opacity */
}

.hero-text h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fff8e1; /* Light Cream */
}

.hero-text p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #fff8e1; /* Light Cream */
}

.hero-text .button {
  background-color: #d2691e; /* Chocolate */
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  color: #fff8e1; /* Light Cream */
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.hero-text .button:hover {
  background-color: #b35814; /* Darker Chocolate */
}

/* Gallery Section */
.gallery {
  padding: 2rem 0;
  background-color: #fff8e1; /* Light Cream */
}

.gallery h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #5d4037; /* Dark Brown */
}

.gallery .image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 90%;
  margin: 0 auto; /* Center the image grid */
}

.gallery .image-grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.gallery .image-grid img:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

/* Services Sections */
section {
  padding: 2rem 0;
}

section h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #5d4037; /* Dark Brown */
}

section table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto; /* Center the table */
}

section table thead {
  background-color: #d2691e; /* Chocolate */
  color: #fff8e1; /* Light Cream */
}

section table th,
section table td {
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  text-align: left;
}

section table tr:nth-child(even) {
  background-color: #fff8e1; /* Light Cream */
}

section p {
  text-align: center;
  margin-top: 1rem;
  font-style: italic;
  color: #5d4037; /* Dark Brown */
}

/* Contact Section */
#contact {
  background-color: #fff8e1; /* Light Cream */
}

#contact p {
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: #5d4037; /* Dark Brown */
}

#contact a {
  color: #d2691e; /* Chocolate */
}

/* Map Section */
#map {
  padding: 2rem 0;
  background-color: #f5f5dc; /* Soft Beige */
}

#map h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #5d4037; /* Dark Brown */
}

#map iframe {
  border: 0;
  border-radius: 10px;
  width: 100%;
  height: 450px;
  transition: transform 0.3s ease-in-out;
}

#map iframe:hover {
  transform: scale(1.02);
}

/* Contact Form Section */
#contact-form {
  padding: 2rem 0;
  background-color: #f5f5dc; /* Soft Beige */
}

#contact-form h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #5d4037; /* Dark Brown */
}

#contact-form form {
  max-width: 600px;
  margin: 0 auto; /* Center the form */
  background-color: #fff8e1; /* Light Cream */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#contact-form form .form-group {
  margin-bottom: 1rem;
}

#contact-form form .form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #5d4037; /* Dark Brown */
}

#contact-form form .required {
  color: #e74c3c;
}

#contact-form form .form-group input,
#contact-form form .form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease-in-out;
}

#contact-form form .form-group input:focus,
#contact-form form .form-group textarea:focus {
  border-color: #d2691e; /* Chocolate */
  outline: none;
}

.g-recaptcha {
  margin: 1rem 0;
  display: flex;
  justify-content: center;
}

#contact-form form button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #d2691e; /* Chocolate */
  color: #fff8e1; /* Light Cream */
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

#contact-form form button:hover {
  background-color: #b35814; /* Darker Chocolate */
}

/* Footer */
footer {
  background-color: #f5f5dc; /* Soft Beige */
  color: #5d4037; /* Dark Brown */
  text-align: center;
  padding: 1rem 0;
}

footer p {
  margin: 0;
  font-size: 1rem;
}

/* Back-to-Top Button */
#back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #d2691e; /* Chocolate */
  color: #fff8e1; /* Light Cream */
  border: none;
  padding: 0.8rem;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  display: none;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

#back-to-top:hover {
  background-color: #b35814; /* Darker Chocolate */
}

#back-to-top.visible {
  display: block;
  opacity: 0.8;
  transform: translateY(0);
}

/* Responsive Styles */
@media (max-width: 768px) {
  header .container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .hero .hero-text h2 {
    font-size: 1.8rem;
  }

  .hero .hero-text p {
    font-size: 1rem;
  }

  .hero .hero-text .button {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }

  section table,
  section table th,
  section table td {
    font-size: 0.9rem;
  }

  #map iframe {
    height: 300px;
  }

  #contact-form form {
    padding: 1rem;
  }
}

/* Additional Styles for Required Fields */
.required {
  color: #e74c3c;
}

/* List Styles */
section ul {
  list-style-type: disc; /* Ensure bullet points */
  margin-left: 2rem; /* Indent lists for alignment */
  text-align: left; /* Align text to left for readability */
}

section ul li {
  margin-bottom: 0.5rem;
}

/* Hero Image Hover Effect (Optional) */
.hero-image:hover {
  transform: scale(1.05);
}

/* Background Wrapper */
.background-wrapper {
  background-color: #f5f5dc; /* Soft Beige */
  padding: 2rem 0;
}

.background-wrapper.light {
  background-color: #fff8e1; /* Light Cream */
}

/* Text Color Transition */
.hero-text.light-text h2,
.hero-text.light-text p {
  color: #5d4037; /* Dark Brown */
}

.hero-text.dark-text h2,
.hero-text.dark-text p {
  color: #ffffff; /* White */
}
