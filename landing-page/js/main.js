// CTA Button
document.getElementById("ctaBtn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! We'll get back to you shortly.");
  e.target.reset();
});
