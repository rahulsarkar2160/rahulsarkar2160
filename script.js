// Grab all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  // Find the section in the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60; // adjust for navbar height
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  // Highlight the active nav link
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
