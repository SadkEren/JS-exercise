var barsBTN = document.querySelector('#barsBTN');
var togglemenu = document.querySelector('.toggleMenu');

barsBTN.addEventListener('click', ()=>{
    togglemenu.classList.toggle("active")
})

window.addEventListener('resize', () => {
    toggleMenu.classList.remove("active");
});