const data= [
    {
        title: 'Cikolatali Pankek',
        price : '$ 14.99',
        img: "1.jpg",
        category: "lunch",
        content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit'
    },
    {
        title: 'Cilekli Pankek',
        price : '$ 13.99',
        img: "1.jpg",
        category: "breakfast",
        content : 'Lorem ipsum dolor, sit amet '
    },
    {
        title: 'Recelli Pankek',
        price : '$ 11.99',
        img: "1.jpg",
        category: "breakfast",
        content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor'
    },
    {
        title: 'Sade Pankek',
        price : '$ 9.99',
        img: "1.jpg",
        category: "shakes",
        content : 'Lorem ipsum dolor'
    },
]

function Show(index){
    let html = 
    `
        <div class="card">
            <img src="${data[index].img}" alt="">
            <div class="cardBody">
                <div class="cardBody-item">
                    <h4>${data[index].title}</h4>
                    <span>${data[index].price}</span>
                </div>
                <p>${data[index].content}</p>
            </div>
        </div>
    `;
    document.querySelector('.content').insertAdjacentHTML('beforeend', html);
}


const ShowAll = document.querySelector('.categoryBTN');
const ShowBreakfast = document.querySelector('.breakfastBTN');
const ShowLunch = document.querySelector('.lunchBTN');
const ShowShakes = document.querySelector('.shakesBTN');

for (let i = 0; i < data.length; i++) {
    Show(i)
}



ShowAll.addEventListener("click",  ()=>{
    document.querySelector('.content').innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        Show(i)
    }
});

function ShowCategory(category){
    document.querySelector('.content').innerHTML = '';

    for(let i = 0; i < data.length; i++){
        if(data[i].category == category){
            Show(i);
        }
    }
}

ShowBreakfast.addEventListener('click', ()=>{
   ShowCategory('breakfast')
})

ShowLunch.addEventListener('click', ()=>{
    ShowCategory('lunch')
})

 
ShowShakes.addEventListener('click', ()=>{
    ShowCategory('shakes')
})
 
