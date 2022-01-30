function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toogleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
        document.querySelector('.hero-image').style.filter = "invert(0)";
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
        document.querySelector('.hero-image').style.filter = "invert(1)";
    }
}) ();

const menu = document.querySelector('.menu');
const cls = document.querySelector('.cls');
menu.addEventListener('click', openMenu);
cls.addEventListener('click', closeMenu);
function openMenu() {
    document.querySelector('.sidenav').style.width = "250px";
}

function closeMenu() {
    document.querySelector('.sidenav').style.width = "0";
}

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js', {scope: '/'})
}