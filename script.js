// Simple JavaScript for Red Panda Paradise
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // CTA button interaction
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", function () {
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition = aboutSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  }

  // Add scroll effect to header
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)";
    }
  });

  // Simple animation on scroll for cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe cards for animation
  const cards = document.querySelectorAll(
    ".about-card, .gallery-item, .fact-item"
  );
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
});

// Simple function to validate the page works
function validatePage() {
  const requiredElements = [
    "header",
    ".hero",
    ".about",
    ".gallery",
    ".facts",
    "footer",
  ];

  const results = [];
  requiredElements.forEach((selector) => {
    const element = document.querySelector(selector);
    results.push({
      selector: selector,
      found: !!element,
    });
  });

  return results;
}

// Export for testing if in Node.js environment
if (typeof module !== "undefined" && module.exports) {
  module.exports = { validatePage };
}
