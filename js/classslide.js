let container1 = document.querySelector('.brands__swiper-container');
let wrapper1 = document.querySelector('.brands__swiper-wrapper');
let card1 = wrapper1.children;
let containerPrice = document.querySelector('.price__swiper-container');
let wrapperPrice = document.querySelector('.price__swiper-wrapper');
let cardPrice = wrapperPrice.children;
let containerDevice = document.querySelector('.device__swiper-container');
let wrapperDevice = document.querySelector('.device__swiper-wrapper');
let cardDevice = wrapperDevice.children;

if (window.innerWidth < 768) {
    container1.classList.add('swiper-container');
    wrapper1.classList.add('swiper-wrapper');
    containerPrice.classList.add('swiper-container');
    wrapperPrice.classList.add('swiper-wrapper');
    containerDevice.classList.add('swiper-container');
    wrapperDevice.classList.add('swiper-wrapper');

    for (let i = 0; i <=card1.length; i++){
        card1[i].classList.add('swiper-slide');
    }
    console.log(card1);
    for (let i = 0; i <=cardPrice.length; i++){
        cardPrice[i].classList.add('swiper-slide');
    }
    for (let i = 0; i <=cardDevice.length; i++){
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

        for (let i = 0; i <=card1.length; i++){
            card1[i].classList.add('swiper-slide');
        }
        for (let i = 0; i <=card1.length; i++){
            card1[i].classList.add('swiper-slide');
        }
        for (let i = 0; i <=card1.length; i++){
            card1[i].classList.add('swiper-slide');
        }

    } else if (window.innerWidth >= 768){
        container1.classList.remove('swiper-container');
        wrapper1.classList.remove('swiper-wrapper');
        containerPrice.classList.remove('swiper-container');
        wrapperPrice.classList.remove('swiper-wrapper');
        containerDevice.classList.remove('swiper-container');
        wrapperDevice.classList.remove('swiper-wrapper');

        for (let i = 0; i <=card1.length-1; i++) {
            card1[i].classList.remove('swiper-slide');
        }
    }
});
