    function checkInput() {
        //the value from the HTML input element
        let inputValue = document.getElementById("myInput").value;
        let outputElement = document.getElementById("outputMessage");

        // if/else statement
        if (inputValue === "EMPOWERMENT") {
            outputElement.innerHTML = "You got it right!";
        } else if (inputValue === "IDK") {
            outputElement.innerHTML = "You can do better!";
        } else {
            outputElement.innerHTML = "Try again!";
        }
    }