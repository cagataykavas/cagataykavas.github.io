const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 45}ms`;
  observer.observe(element);
});
