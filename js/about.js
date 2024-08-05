document.addEventListener('DOMContentLoaded', function() {
    let image1 = document.getElementById('image1');
    let image2 = document.getElementById('image2');

    image1.addEventListener('mouseenter', function() {
        image1.style.display = 'none';
        image2.style.display = 'inline';
    });

    image2.addEventListener('mouseleave', function() {
        image2.style.display = 'none';
        image1.style.display = 'inline';
    });
});

// week 7 claas
// let yuuri =document.getElementById("myName");
// let title =document.getElementById("myTitle");
// console.log(yuuri);

// window.addEventListener("load", function(){
//     yuuri.classlist.add("slidUp");
//     myTitle.classlist.add("slidUp");

// })



// week 8 class
// let productCards = document.querySelectorAll(".service");
// console.log(productCards);

// productCards.forEach( thisCard => {
//     thisCard.addEventListener("mousecenter" , function(){
//         thisCard.firstElementChild.re

//         thisCard.firstElementChild.nextElementSibling.classList.add("faidIn");
//         thisCard.firstElementChild.nextElementSibling.nextElementSibling.classList.add("faidInText");

//     })
// })


// let burgerIcon = document.getElementById(burger);
// let burgerMenu = document.getElementById(burgermenu);

// burgerIcon.addEventListener("click", function(){
    // change the display flex
    // burgerMenu.style.display = "flex";
    // burgerIcon.style.display = "none";

    // 
