const navMenu = document.querySelector('.nav-menu');

// KETIKA HAMBURGER MENU DIKLIK
document.querySelector('#hamburger-menu').onclick = () => {
    navMenu.classList.toggle('active');
};

//KLIK DILUAR SIDEBAR UNTUK MENGHILANGKAN SIDEBAR
const hamburgerMenu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(event) {
    if (!hamburgerMenu.contains(event.target) && !navMenu.contains(event.targer)) {
        navMenu.classList.remove('active');
    }
});