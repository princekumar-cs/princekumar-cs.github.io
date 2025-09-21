// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Typing animation
const typing = document.querySelector(".typing");
const texts = ["Web Developer", "Software Engineer", "Ethical Hacker"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = texts[i];
  typing.textContent = current.substring(0, j);
  if (!isDeleting && j < current.length) { j++; }
  else if (isDeleting && j > 0) { j--; }
  else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % texts.length;
  }
  setTimeout(type, isDeleting ? 100 : 150);
}
type();

// Stats counter
function counter(id, target) {
  let count = 0;
  const interval = setInterval(() => {
    if (count < target) {
      count++;
      document.getElementById(id).textContent = count;
    } else clearInterval(interval);
  }, 50);
}
counter("projects-count", 5);
counter("experience-count", 2);
counter("clients-count", 4);

// Theme toggle
const themeBtn = document.querySelector(".theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
