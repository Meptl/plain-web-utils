// DOM Elements of interest
var inputElem = document.getElementById("text-input");
var output1 = document.getElementById("out1");
var output2 = document.getElementById("out2");

function errorMessage() {
    inputElem.classList.add("flash-red");
    setTimeout(function() {
        inputElem.classList.remove("flash-red");
    }, 500);
}

function onInput() {
    // Clear current output
    output1.innerHTML = "";
    output2.innerHTML = "";

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
        inputElem.placeholder = "";
        output1.innerHTML = "";
        output2.innerHTML = "";
        output1.classList.remove("light-font");
        output2.classList.remove("light-font");

        // Only call this function once
        inputElem.onkeypress = "";
    }
    inputElem.focus();
}
