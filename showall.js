let showAll = document.querySelector('.show-all');
let closeAll =  document.querySelector('.close-show-all');
let cardList = document.querySelector('.swiper-wrapper');
let card = cardList.children;
showAll.addEventListener('click', function(evt){
    evt.preventDefault();

    showAll.classList.add('--hidden');
    closeAll.classList.remove('--hidden');
    for (let i = 1; i <= card.length; i++){
        card[card.length-i].classList.add('--show')
    }
});

closeAll.addEventListener('click', function(evt){
    evt.preventDefault();
    closeAll.classList.add('--hidden');
    showAll.classList.remove('--hidden');
    for (let i = 1; i <= 5; i++){
        card[card.length-i].classList.remove('--show')
    }
});
