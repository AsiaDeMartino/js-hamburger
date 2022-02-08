//creare una variabile per ogni elemento necessario
const menu = document.querySelector(".fa-bars");
console.log(menu);

const chiudi = document.querySelector(".close");
console.log(chiudi);

const hamburgerMenu = document.querySelector(".hamburger-menu");
console.log(hamburgerMenu);

//addEventListener
menu.addEventListener("click", function() {
    hamburgerMenu.style.display = "block";                   //click --> display block 
})


chiudi.addEventListener("click", function() {
    hamburgerMenu.style.display = "none";                     //click --> display none 
})
