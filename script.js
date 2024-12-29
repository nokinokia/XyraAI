// Add parallax scrolling effect
document.addEventListener("scroll", () => {
    const parallaxSections = document.querySelectorAll(".parallax");
    parallaxSections.forEach((section) => {
      const speed = section.dataset.speed || 0.5;
      const offset = window.pageYOffset * speed;
      section.style.backgroundPositionY = `${offset}px`;
    });
  });
  