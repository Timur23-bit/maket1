let overlay = document.querySelector('.overlay');
let burger = document.querySelector('.header__burger');
let slide = document.querySelector('.slide');
let callback = document.querySelector('.callback');
let callorder = document.querySelector('.callorder');
let closeSlide = document.querySelector('.header-slide__logo');
let closeBack = document.querySelector('.callback__logo');
let closeOrder = document.querySelector('.callorder__logo');
let chat = document.querySelector('.header__chat');
let chatSlide = document.querySelector('.footer__chat');
let phone = document.querySelector('.header__phone');
let slidePhone = document.querySelector('.footer__phone');

burger.addEventListener('click', function(evt){
    evt.preventDefault();

    slide.classList.add('slide--opacity');
    overlay.classList.add('overlay--opacitySlide');
});

closeSlide.addEventListener('click', function(evt){
    evt.preventDefault();

    slide.classList.remove('slide--opacity');
    overlay.classList.remove('overlay--opacitySlide');
});

chat.addEventListener('click', function(evt){
    evt.preventDefault();

    callback.classList.add('slide--opacity');
    overlay.classList.add('overlay--opacityCallback');
    callorder.classList.remove('slide--opacity');
    overlay.classList.remove('overlay--opacityCallorder');
});
chatSlide.addEventListener('click', function(evt){
    evt.preventDefault();

    callback.classList.add('slide--opacity');
    overlay.classList.add('overlay--opacityCallback');
    callorder.classList.remove('slide--opacity');
    overlay.classList.remove('overlay--opacityCallorder');
});
closeBack.addEventListener('click', function(evt){
    evt.preventDefault();

    callback.classList.remove('slide--opacity');
    overlay.classList.remove('overlay--opacityCallback');
});

phone.addEventListener('click', function(evt){
    evt.preventDefault();

    callorder.classList.add('slide--opacity');
    overlay.classList.add('overlay--opacityCallorder');
    callback.classList.remove('slide--opacity');
    overlay.classList.remove('overlay--opacityCallback');
});
slidePhone.addEventListener('click', function(evt){
    evt.preventDefault();

    callorder.classList.add('slide--opacity');
    overlay.classList.add('overlay--opacityCallorder');
    callback.classList.remove('slide--opacity');
    overlay.classList.remove('overlay--opacityCallback');
});

closeOrder.addEventListener('click', function(evt){
    evt.preventDefault();

    callorder.classList.remove('slide--opacity');
    overlay.classList.remove('overlay--opacityCallorder');
});

overlay.addEventListener('click', function(evt){
    evt.preventDefault();

    slide.classList.remove('slide--opacity');
    overlay.classList.remove('overlay--opacitySlide');
    callback.classList.remove('slide--opacity');
    overlay.classList.remove('overlay--opacityCallback');
    callorder.classList.remove('slide--opacity');
    overlay.classList.remove('overlay--opacityCallorder');

});






