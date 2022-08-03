// menu

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');
const menuLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// buttons 

const btns = document.querySelectorAll('.promo__link');

btns[0].addEventListener('click', () => {
    if (!btns[0].classList.contains('btn_active')) {
        btns[0].classList.add('btn_active');
        btns[1].classList.remove('btn_active');
    }
});

btns[1].addEventListener('click', () => {
    if (!btns[1].classList.contains('btn_active')) {
        btns[1].classList.add('btn_active');
        btns[0].classList.remove('btn_active');
    }
});

// skills


const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});