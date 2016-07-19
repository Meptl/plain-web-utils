// DOM Elements of interest
var inputElem = document.getElementById("text-input");
var output1 = document.getElementById("out1");
var output2 = document.getElementById("out2");
var output3 = document.getElementById("out3");

var firstSubmit = true;

function onInput() {
    // Clear current output
    output1.innerHTML = "";
    output2.innerHTML = "";
    output3.innerHTML = "";

    if (firstSubmit) {
        output1.classList.remove("light-font");
        output2.classList.remove("light-font");
        output3.classList.remove("light-font");
        firstSubmit = false;
    }

    // Get input then clear it
    var text = inputElem.value;
    inputElem.value = "";

    //
    // Do stuff with input
    //

    return false; // Prevents page reload on form submission
}

// Focus input on load
window.onload = function() {
    // remove input overlay on first input
    inputElem.onkeypress = function() {
        document.getElementById("input-overlay").style.display = "none";
    }
    inputElem.focus();
}
