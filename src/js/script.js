const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const close= document.querySelector('.close');
const overlay = document.querySelector('.menu__overlay');

/*
function menuToggle (item){
    item.addEventListener('click', ()=>{
        menu.classList.toggle('active');
        });
}

menuToggle (hamburger);
menuToggle (overlay);
menuToggle (close);
*/

function menuToggle(){
    menu.classList.toggle('active');
}

hamburger.addEventListener('click', menuToggle);
close.addEventListener('click', menuToggle);
overlay.addEventListener('click', menuToggle);

/*
hamburger.addEventListener('click', ()=>{
menu.classList.add('active');
});

close.addEventListener('click',()=>{
menu.classList.remove('active');
});*/