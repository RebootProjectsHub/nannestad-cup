// Header turns blured white when page is scrolled
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.classList.add("header--scrolled");
      } else {
        header.classList.remove("header--scrolled");
}});

// Get current year on footer copyright
document.getElementById("footer-year").textContent = new Date().getFullYear();


// const toggles = document.querySelectorAll('.rules__toggle');
// toggles.forEach(btn => {
// btn.addEventListener('click', () => {
// const content = document.getElementById(btn.getAttribute('aria-controls'));
// const expanded = btn.getAttribute('aria-expanded') === 'true';
// btn.setAttribute('aria-expanded', !expanded);
// content.hidden = expanded;
// btn.textContent = expanded ? '+' : '–';
// });
// });

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

document.querySelectorAll('.dropdown__item').forEach(item => {
  const link = item.querySelector('.nav__link');
  const submenu = item.querySelector('.dropdown__menu');
  const arrow = item.querySelector('.dropdown__arrow');

  link.addEventListener('click', (e) => {
    // just mobile
    if (window.innerWidth <= 1118) {
      e.preventDefault();

      // switch state
      item.classList.toggle('open');

      if (item.classList.contains('open')) {
        submenu.style.maxHeight = submenu.scrollHeight + 'px';
        arrow.style.transform = 'rotate(180deg)';
      } else {
        submenu.style.maxHeight = null;
        arrow.style.transform = 'rotate(0deg)';
      }
    }
  });
});
