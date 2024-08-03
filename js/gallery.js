let imageCards = document.querySelectorAll(".gallery");
console.log(imageCards);

imageCards.forEach( thisCard => {
    // let photo = thisCard.querySelector(".photo");
    thisCard.addEventListener("mouseenter", function(){
        // console.log(photo);
        // scaling effect on hovers over
        thisCard.firstElementChild.classList.add("scaleUp");
        // fade-in effect for the project titles on hovers over 
        thisCard.firstElementChild.nextElementSibling.classList.add("fadeIn");
        thisCard.firstElementChild.nextElementSibling.nextElementSibling.classList.add("fadeInText");
    })
})


imageCards.forEach( thisCard => {
    thisCard.addEventListener("mouseleave", function(){
        
        setTimeout(function(){
            thisCard.firstElementChild.classList.remove("scaleUp");
        }, 500)

        thisCard.firstElementChild.nextElementSibling.classList.remove("fadeIn");
        thisCard.firstElementChild.nextElementSibling.nextElementSibling.classList.remove("fadeInText");
    })
})
