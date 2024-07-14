// TASK: trigger a sound when a user focus = lister on any of the inputs text, telephone, or email field.

// step 1: define audio
let audio = document.getElementById("clickAudio");
console.log(audio)
// step 2: difine input
let inputs = document.querySelectorAll(".inputs");
console.log(inputs)
// step 3: add an event listener focus
inputs.forEach( thisInput => {
    thisInput.addEventListener("focus", function(){
        // step 4: play the audio
        clickAudio.play();
        // Change the style of the input
        thisInput.classList.add("focus"); 
        })
    });
    
inputs.forEach( theInput => {
    theInput.addEventListener("blur", function(){
        // remove all focus styles
        theInput.classList.remove("focus");
        // validate the input field
        // validate the form
        if (theInput.value === ""){
            // add a particular style
            theInput.classList.add("error");
            // show that the form field is empty
            theInput.previousElementSibling.firstElementChild.style.display = "inline";
            theInput.previousElementSibling.lastElementChild.style.display = "inline";
        }else{
            theInput.classList.remove("error");
            theInput.previousElementSibling.firstElementChild.style.display = "none";
            theInput.previousElementSibling.lastElementChild.style.display = "none";
        }
        })
    
    })



    
//  when user clicks on the suubmit botton,
//  show pop up
// Step 1: define button
let submitBotton = document.getElementById("submitBTN");
console.log(submitBotton)
// Step 2: define popup
let popupBox =document.getElementById("pageCover");
console.log(popupBox)

// Step 3: add an event listener click - doesn't work
let messageP = document.getElementById("popUpMessage");
console.log(messageP);

submitBotton.addEventListener("click", function(event){
    event.preventDefault();
    // console.log(event);

    // if ALL inputs are NOT empaty pop up
    if(
        inputs[0].value !== "" &&
        inputs[1].value !== "" &&
        inputs[2].value !== "" &&
        inputs[3].value !== "" 
    ){

    // create a unique text message
    let message = `Awesome, ${inputs[0].value} ${inputs[1].value}! <br/> Your message is on its way to me. Expect a reply soon at ${inputs[2].value}. <br/> Can't wait to connect!`
    console.log(message);
    // plcae the text inside "popUpMessage" 
    messageP.innerHTML = message;
    // show pop up 
    popupBox.style.display = "block";


    } else {
    // show error style for input
        inputs.forEach( thisInput => {
            if(thisInput.value === ""){
                // thisInput.classList.add("error-message")
                thisInput.style.border = "1px solid #d9534f";
            }
        })
    }
    
})

// // if popup has the display block
let closeBTN = document.getElementById("popUpClose");
console.log(close);

closeBTN.addEventListener("click", function(){
    popupBox.style.display = "none";
})







