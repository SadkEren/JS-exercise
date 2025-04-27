const data = [
    {
        img  : "img/pp.jpeg",
        name : "Eren Yazici",
        job  : "Doctor",
        text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum harum corporis fuga!"
    },
    {
        img  : "img/narutoChar.png",
        name : "Narutodaki Karakter",
        job  : "Spor Egitmeni",
        text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum harum corporis fuga!, adipisicing elit. Dolorum harum corporis fuga!.adipisicing elit. Dolorum harum corporis fuga!"
    },
    {
        img  : "img/spiderman.png",
        name : "Peter Parker",
        job  : "Part Time SuperHero",
        text : "Lorem ipsum dolor sit amet consectetur"
    }
]
let index = 0;
var backBTN = document.querySelector('#back');
var resetBTN = document.querySelector('#reset');
var forwadBTN = document.querySelector('#forward');

backBTN.addEventListener('click', ()=>{
    if(index != 0){
        index--
    }else{
        index = data.length
    }
    RenderInfo(index);
})

resetBTN.addEventListener('click', ()=>{
    index = 0;
    RenderInfo(index);
})

forwadBTN.addEventListener('click', ()=>{
    if(index != data.length){
        index++
    }else{
        index = 0
    }
    RenderInfo(index);
})

function RenderInfo(index){
    let html = `
        <div class="p-2 card-header">
            <img class="rounded-circle w-25" src="${data[index].img}" alt="">
        </div>

        <div class="card-body">
            <h5>${data[index].name}</h5>
            <label>${data[index].job}</label>

            <p>${data[index].text}</p>

        </div>
    `;
    document.querySelector('.card').innerHTML = html;
}