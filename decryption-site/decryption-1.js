function checkInput() {
    let inputValue = document.getElementById("myInput").value;
    let outputElement = document.getElementById("outputMessage");
        
    if (inputValue === "inhale confidence exhale doubt") {
            outputElement.innerHTML = "You got it correct. Amazing!";
        } else {
            outputElement.innerHTML = "Try again!"
        }
    }