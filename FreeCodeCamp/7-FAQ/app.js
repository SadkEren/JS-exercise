const openBTN = document.querySelectorAll(".openBTN");

openBTN.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        const card = btn.closest(".card");
        const cardContent = card.querySelector(".cardContent")
        const faPlus = btn.querySelector(".fa-plus");
        const faMinus = btn.querySelector(".fa-minus");
    
        cardContent.classList.toggle("active");
    
        faPlus.classList.toggle("active");
        faMinus.classList.toggle("active");
    
    })
})

