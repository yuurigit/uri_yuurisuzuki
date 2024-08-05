let headerContent = `
 <section class="side-header">
            <div class="logo">
            <img src="/assets/images/logo.png" alt="logo">
            </div>
            <div id="burger">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id="close">&times;</div>
        <nav id="nav" >
            <ul id="navElements">
              <li><a href="about.html" class="nomal-link">About</a></li>
              <li><a href="gallery.html" class="nomal-link">Works</a></li>
              <li><a href="index.html" class="highlighted-link">Contact</a></li>
            </ul>
          </nav>
        </section>
        <nav id="burgerMenu" >
          <ul>
              <li><a href="about.html" class="nomal-link">About</a></li>
              <li><a href="gallery.html" class="nomal-link">Works</a></li>
              <li><a href="index.html" class="highlighted-link">Contact</a></li>
          </ul>
        </nav>
        <section class="side-footer">
            <div class="social-links">
                <a href="#facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#instagram"><i class="fab fa-instagram"></i></a>
                <a href="#linkedin"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <p>Designed and Developed by Yuuri Suzuki</p>
        </section>  

`


let headerElement = document.getElementById("siteHeader");
headerElement.innerHTML = headerContent;



// berger menu
let burgerIcon = document.getElementById("burger");
let burgerMenu = document.getElementById("burgerMenu");
let closeIcon = document.getElementById("close");
let mainNav = document.getElementById("nav");
let desktopNav = document.getElementById("navElements");


console.log(burgerIcon);
console.log(burgerMenu);
console.log(mainNav);
console.log(desktopNav);


burgerIcon.addEventListener("click", function(){
    // change the display to Flex
    burgerMenu.style.display = "flex";
    burgerIcon.style.display = "none";
    closeIcon.style.display = "block";

    // add the class slide down WITH A DELAY
    setTimeout(function(){
        burgerMenu.classList.add("slideRight");
    }, 10);
  
});


closeIcon.addEventListener("click", function(){

    burgerIcon.style.display = "flex";
    closeIcon.style.display = "none";
    burgerMenu.classList.remove("slideRight");

    setTimeout(function(){
        burgerMenu.style.display = "none";
    }, 500);

});

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

        
        // mainNav.firstElementChild.classList.add(".showUp");

    } else {

        burgerIcon.style.display = "flex";
        mainNav.style.display = "none";

    }
}

window.addEventListener("resize", _checkWidth);
// Initial check when the script loads
_checkWidth();
