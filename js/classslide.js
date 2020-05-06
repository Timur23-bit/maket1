let container1 = document.querySelector('.brands__swiper-container');
let wrapper1 = document.querySelector('.brands__swiper-wrapper');
let card1 = wrapper1.children;
let containerPrice = document.querySelector('.price__swiper-container');
let wrapperPrice = document.querySelector('.price__swiper-wrapper');
let cardPrice = wrapperPrice.children;
let containerDevice = document.querySelector('.device__swiper-container');
let wrapperDevice = document.querySelector('.device__swiper-wrapper');
let cardDevice = wrapperDevice.children;

console.log(cardDevice);

if (window.innerWidth < 768) {
    container1.classList.add('swiper-container');
    wrapper1.classList.add('swiper-wrapper');
    containerPrice.classList.add('swiper-container');
    wrapperPrice.classList.add('swiper-wrapper');
    containerDevice.classList.add('swiper-container');
    wrapperDevice.classList.add('swiper-wrapper');

    for (let i = 0; i <=card1.length-1; i++){
        card1[i].classList.add('swiper-slide');
    }
    for (let i = 0; i <=cardPrice.length-1; i++){
        cardPrice[i].classList.add('swiper-slide');
    }
    for (let i = 0; i <=cardDevice.length-1; i++){
        cardDevice[i].classList.add('swiper-slide');
    }
}
window.addEventListener('resize', function () {
    if (window.innerWidth < 768){
        container1.classList.add('swiper-container');
        wrapper1.classList.add('swiper-wrapper');
        containerPrice.classList.add('swiper-container');
        wrapperPrice.classList.add('swiper-wrapper');
        containerDevice.classList.add('swiper-container');
        wrapperDevice.classList.add('swiper-wrapper');

        for (let j = 0; j <=card1.length-1;j++){
            card1[j].classList.add('swiper-slide');
        }
        for (let j = 0; j <=cardPrice.length-1; j++){
            cardPrice[j].classList.add('swiper-slide');
        }
        for (let j = 0; j <=cardDevice.length-1; j++){
            cardDevice[j].classList.add('swiper-slide');
        }

    } else if (window.innerWidth >= 768){
        container1.classList.remove('swiper-container');
        wrapper1.classList.remove('swiper-wrapper');
        containerPrice.classList.remove('swiper-container');
        wrapperPrice.classList.remove('swiper-wrapper');
        containerDevice.classList.remove('swiper-container');
        wrapperDevice.classList.remove('swiper-wrapper');

        for (let i  = 0; i <=card1.length-1; i++) {
            card1[i].classList.remove('swiper-slide');
        }
        for (let i = 0; i <=cardPrice.length-1; i++){
            cardPrice[i].classList.remove('swiper-slide');
        }
        for (let i = 0; i <=cardDevice.length-1; i++){
            cardDevice[i].classList.remove('swiper-slide');
        }
    }
});
