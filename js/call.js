let call = document.querySelector('.callorder');
let slide3 = document.querySelector('.slide');
let general2 = document.querySelector('.general');
let phone2 = document.querySelector('.footer__phone');
let esc2 = document.querySelector('.callorder__logo');
let phone3 = document.querySelector('.header__phone');

phone2.addEventListener('click', function (evt){
    evt.preventDefault();

    call.classList.add('--opacity-callback');
    general2.classList.add('--opacity-hidden-callback');
    slide3.classList.add('--opacity-hidden-callback');
    slide3.classList.remove('--opacity');
});

phone3.addEventListener('click', function (evt){
    evt.preventDefault();

    call.classList.add('--opacity-callback');
    general2.classList.add('--opacity-hidden-callback');
    slide3.classList.add('--opacity-hidden-callback');
    slide3.classList.remove('--opacity');
});

esc2.addEventListener('click',function (evt) {
    evt.preventDefault();

    call.classList.remove('--opacity-callback');
    general2.classList.remove('--opacity-hidden-callback');
    slide3.classList.remove('--opacity-hidden-callback');
    general2.classList.remove('--opacity-hidden');
});