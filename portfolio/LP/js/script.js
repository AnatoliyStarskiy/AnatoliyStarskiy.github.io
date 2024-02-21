window.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function () {
        $('input[name=phone]').mask("+7 (999) 999-99-99");
    });


    const slides = document.querySelectorAll('.doctors__slide');
    const slider = document.querySelector('.doctors__slider');
    const prev = document.querySelector('.doctors__slider-prev');
    const next = document.querySelector('.doctors__slider-next');
    const slidesWrapper = document.querySelector('.doctors__slider-wrapper');
    const slidesField = document.querySelector('.doctors__slider-inner');
    const slidesText = document.querySelectorAll('.doctors__slides-text');
    const width = window.getComputedStyle(slidesWrapper).width;

    let offset = 0;

    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });
    slidesText.forEach(slideText => {
        slideText.style.width = (+width.slice(0, width.length - 2) - 30) + 'px';
    });

    slider.style.position = 'relative';


    next.addEventListener('click', () => {

        /* if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        } */

        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;



    });
    prev.addEventListener('click', () => {

        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 2);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(+${offset}px)`;

        

    });
});


