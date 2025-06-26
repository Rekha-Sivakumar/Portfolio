// Scroll to top button (example interactive feature)
const btn = document.createElement("button");
btn.innerText = "↑ Top";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "10px";
btn.style.borderRadius = "50%";
btn.style.border = "none";
btn.style.background = "#007BFF";
btn.style.color = "white";
btn.style.display = "none";
btn.style.cursor = "pointer";
btn.style.zIndex = "1000";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Section fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const reveal = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();
});

// View More functionality for projects
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.view-more').forEach(btn => {
    btn.addEventListener('click', function() {
      const target = document.getElementById(this.dataset.target);
      if (target.style.display === "block") {
        target.style.display = "none";
        this.textContent = "View More";
      } else {
        // Hide all other details
        document.querySelectorAll('.project-details').forEach(d => d.style.display = "none");
        document.querySelectorAll('.view-more').forEach(b => b.textContent = "View More");
        // Show this one
        target.style.display = "block";
        this.textContent = "View Less";
      }
    });
  });
});
