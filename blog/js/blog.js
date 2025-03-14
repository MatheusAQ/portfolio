const menuEL = document.querySelector('aside#menu');
const menuButtonEl = document.querySelector('.cabecalho .menu-button');
const allLinksEl = document.querySelectorAll('#menu a');




function toggleMenu() {

    const active = menuEL.classList.toggle("active");
    if (active) {
        menuButtonEl.classList.add("active");
    } else {
        menuButtonEl.classList.remove("active");
    }
};

allLinksEl.forEach(function (link) {
    link.onclick = toggleMenu;
});
menuButtonEl.onclick = toggleMenu;