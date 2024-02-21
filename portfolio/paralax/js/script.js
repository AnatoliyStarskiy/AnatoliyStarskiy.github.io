let stars = document.querySelector('#stars');
let moon = document.querySelector('#moon');
let mountaims_behind = document.querySelector('#mountaims_behind');
let mountaims_front = document.querySelector('#mountaims_front');
let btn = document.querySelector('#btn');
let text = document.querySelector('#text');
let header = document.querySelector('header');
let menuList = document.querySelector('.menu__list');
let menuItem = menuList.querySelectorAll('.menu__link');


window.addEventListener('scroll', function () {
    let value = this.window.scrollY;
    stars.style.left = `${value * 0.25}px`;
    moon.style.top = `${value * 1.05}px`;
    mountaims_behind.style.top = `${value * 0.5}px`;
    mountaims_front.style.top = `${value * 0}px`;
    text.style.marginRight = `${value * 4}px`;
    text.style.marginTop = `${value * 1.5}px`;
    btn.style.marginTop = `${value * 1.5}px`;
    header.style.top = `${value * 0.5}px`;
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menuItem.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});
