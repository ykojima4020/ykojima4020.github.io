const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

const targets = document.querySelectorAll(".section, .hero");

if (targets.length > 0) {
  targets.forEach((target) => {
    target.classList.add("fade-in");
    observer.observe(target);
  });
}
