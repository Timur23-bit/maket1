let slide2 = document.querySelector('.slide');
let slide1 = document.querySelector('.callback');
let general1 = document.querySelector('.general');
let phone = document.querySelector('.footer__chat');
let esc1 = document.querySelector('.callback__logo');
let phone1 = document.querySelector('.header__chat');

phone1.addEventListener('click', function (evt){
    evt.preventDefault();

    slide1.classList.add('--opacity-callback');
    general1.classList.add('--opacity-hidden-callback');
    slide2.classList.add('--opacity-hidden-callback');
    slide2.classList.remove('--opacity');
});

phone.addEventListener('click', function (evt){
    evt.preventDefault();

    slide1.classList.add('--opacity-callback');
    general1.classList.add('--opacity-hidden-callback');
    slide2.classList.add('--opacity-hidden-callback');
    slide2.classList.remove('--opacity');
});

esc1.addEventListener('click',function (evt) {
    evt.preventDefault();

    slide1.classList.remove('--opacity-callback');
    general1.classList.remove('--opacity-hidden-callback');
    general1.classList.remove('--opacity-hidden');
    slide2.classList.remove('--opacity-hidden-callback');
});