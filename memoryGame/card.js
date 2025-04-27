const images = ['img/elma.jpg','img/karpuz.jpg','img/muz.jpg','img/portakal.jpg', 'img/elma.jpg','img/karpuz.jpg','img/muz.jpg','img/portakal.jpg'];
let currentIndex = images.length;

while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    const temp = images[currentIndex];
    images[currentIndex] = images[randomIndex]
    images[randomIndex] = temp;
}

images.forEach(element => {
    let html = `
        <div class="card" onclick="show(this)">
            <img src="img/star.jpg" >
            <img src="${element}" class="hidden">
        </div>
    `;
    document.getElementById('card-body').innerHTML += html 

});


let openedCard = [];

function show(card){
    if(openedCard.length >= 2) return;

    let images = card.querySelectorAll('img');

    let img1 = images[0]
    let img2 = images[1]

    if(!img2.classList.contains('hidden')) return;

    img1.classList.toggle('hidden');
    img2.classList.toggle('hidden');

    openedCard.push(card)

    if(openedCard.length == 2){
        checkCard();
    }
}



function checkCard(){

    let firstCard = openedCard[0];
    let secondCard = openedCard[1];

    firstCardImg  = firstCard.querySelectorAll('img')[1]
    secondCardImg = secondCard.querySelectorAll('img')[1]

    if(firstCardImg.src == secondCardImg.src){
        openedCard = [];
    }else{
        setTimeout(() => {
            
            firstCard.querySelectorAll('img')[0].classList.toggle('hidden');
            firstCard.querySelectorAll('img')[1].classList.toggle('hidden');
            secondCard.querySelectorAll('img')[0].classList.toggle('hidden');
            secondCard.querySelectorAll('img')[1].classList.toggle('hidden');

            openedCard = [];
        }, 1000);
    }
    

    console.log(firstCardImg,secondCardImg);

}


