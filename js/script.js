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
}

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

// portfolio

const portfolioItems = document.querySelector('.portfolio__items');


class Card {
    constructor(src, alt, title, descr, link) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.link = link;
    }

    render() {
        const portfolioItem = document.createElement('li');
        portfolioItem.classList.add('portfolio__item');

        portfolioItem.innerHTML = `
        
            <figure>
                <img src=${this.src} alt=${this.alt}>
                <figcaption class='portfolio__title'>${this.title}</figcaption>
            </figure>
            <div class="portfolio__descr">${this.descr}<br><br>
            <a href='${this.link}'>Перейти</a>
            </div>
        `;
        portfolioItems.append(portfolioItem);
    }
}

new Card(
    "img/works/uber.jpg",
    "Uber",
    'Uber',
    'Небольшой лендинг посвященный работе в UBER',
    '/Uber'

).render();
new Card(
    "img/works/pulse.jpg",
    "Pulse",
    'Pulse',
    'Лендинг для продажи браслетов для спорта',
    '/Pulse'

).render();

new Card(
    "img/works/odig.jpg",
    "Odig",
    'Odig',
    'Сайт для туристов, которые собираются посетить Японию',
    '/odig'

).render();
new Card(
    "img/works/cesar-1.jpg",
    "cesar",
    'Cesar',
    'Главная страница сайта посвященная продаже NFT изображений',
    '/auxpo'

).render();
new Card(
    "img/works/paralax.jpg",
    "Paralax",
    'Paralax',
    'Сайт демонстрирующий реализацию паралакс эффекта на сайте. Создан на основе разобранного векторного изображения',
    '/paralax'

).render();
new Card(
    "img/works/mavic.png",
    "mavic",
    'Mavic',
    'Лендинг для презентации квадракоптеров DJI Mavic',
    '/mavic'
).render();




const portfolioItem = document.querySelectorAll('.portfolio__item');
const portfolioDescr = document.querySelectorAll('.portfolio__descr');
const portfolioTitle = document.querySelectorAll('.portfolio__title');

portfolioItem[portfolioItem.length - 1].classList.add('portfolio__item-active');
portfolioItem[portfolioItem.length - 1].querySelector('.portfolio__title').classList.add('portfolio__title-active');
portfolioItem[portfolioItem.length - 1].querySelector('.portfolio__descr').classList.add('portfolio__descr-active');



portfolioItem.forEach(item => {

    
    item.addEventListener('click', () => {

        portfolioItem.forEach(allItem => {
            allItem.style.width = '5%';
            item.classList.remove('portfolio__item-active');
        });
        portfolioTitle.forEach(allTitle => {
            allTitle.classList.remove('portfolio__title-active');
        });
        portfolioDescr.forEach(allDescr => {
            allDescr.classList.remove('portfolio__descr-active');
        });

        item.style.width = '100%';
        item.classList.add('portfolio__item-active');
        console.log(item.childNodes);
        item.querySelector('.portfolio__title').classList.add('portfolio__title-active');
        item.querySelector('.portfolio__descr').classList.add('portfolio__descr-active');
    });
});