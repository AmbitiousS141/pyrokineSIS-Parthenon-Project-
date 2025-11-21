function checkInput() {
    let inputValue = document.getElementById("myInput").value;
    let outputElement = document.getElementById("outputMessage");
    
    if (inputValue === "confidence is key") {
            outputElement.innerHTML = "You got it correct. Amazing!";
        } else {
            outputElement.innerHTML = "Try again!!"
        }
    }