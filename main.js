//creare una variabile per ogni elemento necessario
const menu = document.querySelector(".fa-bars");
console.log(menu);

const chiudi = document.querySelector(".close");
console.log(chiudi);

const hamburgerMenu = document.querySelector(".hamburger-menu");
console.log(hamburgerMenu);

//addEventListener
menu.addEventListener("click", function() {
    hamburgerMenu.classList.add("active")                        //click --> display block 
})


chiudi.addEventListener("click", function() {
    hamburgerMenu.classList.remove("active")                     //click --> display none 
})
