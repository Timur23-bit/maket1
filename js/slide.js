let slide = document.querySelector('.slide');
let general = document.querySelector('.general');
let header = document.querySelector('.header__left');
let burger = header.querySelector('.logo');


let headerSlide = document.querySelector('.header-slide__left');
let esc = headerSlide.querySelector('.logo');

burger.addEventListener('click', function (evt) {
evt.preventDefault();

slide.classList.add('--opacity');
general.classList.add('--opacity-hidden');
});

esc.addEventListener('click',function (evt) {
    evt.preventDefault();

    slide.classList.remove('--opacity');
    general.classList.remove('--opacity-hidden');

});
