var showAll = document.querySelector('.show-all');
var closeAll =  document.querySelector('.close-show-all');
var cardList = document.querySelector('.brands__list');
var card = cardList.children;
showAll.addEventListener('click', function(evt){
    evt.preventDefault();

    showAll.classList.add('--hidden');
    closeAll.classList.remove('--hidden');
    for (var i = 1; i <= card.length; i++){
        card[card.length-i].classList.add('--show')
    }
})

closeAll.addEventListener('click', function(evt){
    evt.preventDefault();
    closeAll.classList.add('--hidden');
    showAll.classList.remove('--hidden');
    for (var i = 1; i <= 5; i++){
        card[card.length-i].classList.remove('--show')
    }
})
