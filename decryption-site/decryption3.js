    function checkInput() {
        let inputValue = document.getElementById("myInput").value;
        let outputElement = document.getElementById("outputMessage");

        if (inputValue === "EMPOWERMENT") {
            outputElement.innerHTML = "You got it right!";
        } else {
            outputElement.innerHTML = "Try again!";
        }
    }