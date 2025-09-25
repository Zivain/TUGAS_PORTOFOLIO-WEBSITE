document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault(); 
  alert("Pesan berhasil dikirim! Terima kasih.");
  contactForm.reset();
});