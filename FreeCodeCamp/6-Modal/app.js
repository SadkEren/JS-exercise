const barsBTN  = document.querySelector("#barsBTN");
const modalBTN = document.querySelector(".btn-modal");

const xCorssBTN  = document.querySelector("#xCorssBTN");
const xCorssBTN2 = document.querySelector("#xCorssBTN2");

const sidebar   = document.querySelector("#sidebar");
const openModal = document.querySelector(".openModal");


barsBTN.addEventListener('click', ()=>{
    sidebar.classList.toggle("active");
})

xCorssBTN.addEventListener('click', ()=>{
    sidebar.classList.toggle("active");
})


modalBTN.addEventListener('click', ()=>{
    openModal.classList.toggle("active");
})


xCorssBTN2.addEventListener('click', ()=>{
    openModal.classList.toggle("active");
})


