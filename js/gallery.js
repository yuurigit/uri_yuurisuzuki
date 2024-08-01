let imageCards = document.querySelectorAll(".gallery");
console.log(imageCards);


imageCards.forEach( thisCard => {
    thisCard.addEventListener("mouseenter", function(){
        // scaling effect on hovers over
        thisCard.classList.add("scaleUp");
        // fade-in effect for the project titles on hovers over 
        // thisCard.firstElementChild.nextElementSibling.classList.add("fadeIn");
        thisCard.firstElementChild.classList.add("fadeInText");
    })
})

imageCards.forEach( thisCard => {
    thisCard.addEventListener("mouseleave", function(){
        
        setTimeout(function(){
            thisCard.classList.remove("scaleUp");
        }, 500)

        // thisCard.firstElementChild.nextElementSibling.classList.remove("fadeIn");
        thisCard.firstElementChild.classList.remove("fadeInText");
    })
})
