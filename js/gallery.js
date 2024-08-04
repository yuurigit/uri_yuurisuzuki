let imageCards = document.querySelectorAll(".gallery");
console.log(imageCards);

imageCards.forEach(thisCard => {
    thisCard.addEventListener("mouseenter", function(){
        // Add scaling effect to img or video
        let media = thisCard.querySelector("img, video");
        if (media) {
            media.classList.add("scaleUp");
        }
        // Add fade-in effect to the shade and project titles
        let shade = thisCard.querySelector(".shade");
        let textOverlay = thisCard.querySelector("p");

        if (shade) {
            shade.classList.add("fadeIn");
        }
        if (textOverlay) {
            textOverlay.classList.add("fadeInText");
        }
    });
});

imageCards.forEach(thisCard => {
    thisCard.addEventListener("mouseleave", function(){
        // Remove scaling effect from img or video
        let media = thisCard.querySelector("img, video");
        if (media) {
            setTimeout(function(){
                media.classList.remove("scaleUp");
            }, 500);
        }

        // Remove fade-in effect from the shade and project titles
        let shade = thisCard.querySelector(".shade");
        let textOverlay = thisCard.querySelector("p");

        if (shade) {
            shade.classList.remove("fadeIn");
        }
        if (textOverlay) {
            textOverlay.classList.remove("fadeInText");
        }
    });
});