let menu = document.querySelector('.menu__container');
let brandsMenu = document.querySelector('.brands');
let priceMenu = document.querySelector('.price');
let deviceMenu = document.querySelector('.device');
let mainContent = document.querySelector('.main-content');
let btn = menu.children;
let brands = btn[0];
let device = btn[1];
let price = btn[3];
let brandsBtn = brands.querySelector('.btn');
let deviceBtn = device.querySelector('.btn');
let priceBtn = price.querySelector('.btn');

brands.addEventListener('click', function(evt){
    evt.preventDefault();

    deviceBtn.classList.remove('btn--active');
    deviceMenu.classList.remove('brands--visible');
    priceBtn.classList.remove('btn--active');
    priceMenu.classList.remove('brands--visible');
    brandsBtn.classList.add('btn--active');
    brandsMenu.classList.add('brands--visible');
    mainContent.classList.add('main-content--hidden');
});
price.addEventListener('click', function(evt){
    evt.preventDefault();

    deviceBtn.classList.remove('btn--active');
    deviceMenu.classList.remove('brands--visible');
    priceBtn.classList.add('btn--active');
    priceMenu.classList.add('brands--visible');
    mainContent.classList.add('main-content--hidden');
    brandsBtn.classList.remove('btn--active');
    brandsMenu.classList.remove('brands--visible');
});
device.addEventListener('click', function(evt){
    evt.preventDefault();

    deviceBtn.classList.add('btn--active');
    deviceMenu.classList.add('brands--visible');
    mainContent.classList.add('main-content--hidden');
    brandsBtn.classList.remove('btn--active');
    brandsMenu.classList.remove('brands--visible');
    priceBtn.classList.remove('btn--active');
    priceMenu.classList.remove('brands--visible');
});

console.log(btn);