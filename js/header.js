// berger menu
let burgerIcon = document.getElementById("burger");
let burgerMenu = document.getElementById("burgerMenu");
let closeIcon = document.getElementById("close");
let mainNav = document.getElementById("nav");

console.log(burgerIcon);
console.log(burgerMenu);
console.log(mainNav);

burgerIcon.addEventListener("click", function(){
    // change the display to Flex
    burgerMenu.style.display = "flex";
    burgerIcon.style.display = "none";
    closeIcon.style.display = "block";

    // add the class slide down WITH A DELAY
    setTimeout(function(){
        burgerMenu.classList.add("slideDown");
    }, 500)
  
})


closeIcon.addEventListener("click", function(){

    burgerIcon.style.display = "flex";
    closeIcon.style.display = "none";
    burgerMenu.classList.remove("slideDown");

    setTimeout(function(){
        burgerMenu.style.display = "none";
    }, 500)

})

// window.addEventListener("resize", function(){    
//     let currentWidth = window.innerWidth;
//     console.log(currentWidth);

//     if( currentWidth >= 750) {

//         mainNav.style.display = "flex";

//         burgerMenu.style.display = "none";
//         burgerIcon.style.display = "none";
//         closeIcon.style.display = "none";

//         burgerMenu.classList.remove("slideDown");

//         setTimeout(function(){
//         burgerMenu.style.display = "none";
//         }, 600 )

//     } else {

//         burgerIcon.style.display = "block";
//         mainNav.style.display = "none";

//     }
// })

function _checkWidth(){    
    let currentWidth = window.innerWidth;
    // console.log(currentWidth);

    if( currentWidth >= 750) {

        mainNav.style.display = "flex";

        burgerMenu.style.display = "none";
        burgerIcon.style.display = "none";
        closeIcon.style.display = "none";

        burgerMenu.classList.remove("slideDown");

    } else {

        burgerIcon.style.display = "flex";
        mainNav.style.display = "none";

    }
}

window.addEventListener("resize", _checkWidth);