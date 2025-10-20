window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.classList.add("header--scrolled");
      } else {
        header.classList.remove("header--scrolled");
}});

const toggles = document.querySelectorAll('.rules__toggle');
toggles.forEach(btn => {
btn.addEventListener('click', () => {
const content = document.getElementById(btn.getAttribute('aria-controls'));
const expanded = btn.getAttribute('aria-expanded') === 'true';
btn.setAttribute('aria-expanded', !expanded);
content.hidden = expanded;
btn.textContent = expanded ? '+' : '–';
});
});
