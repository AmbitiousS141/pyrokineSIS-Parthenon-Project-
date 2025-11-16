function checkInput() {
    let inputValue = document.getElementById("myInput").value;
    let outputElement = document.getElementById("outputMessage");
        
    if (inputValue === "inhale confidence exhale doubt") {
            outputElement.innerHTML = "You got it correct. Amazing!";
        } else if (inputValue === "IDK") {
            outputElement.innerHTML = "You can do better";
        } else {
            outputElement.innerHTML = "Try again!"
        }
    }