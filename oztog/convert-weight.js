// DOM Elements of interest
var inputElem = document.getElementById("text-input");
var output1 = document.getElementById("out1");
var output2 = document.getElementById("out2");

function errorMessage() {
    inputElem.classList.add("flash-red");
    setTimeout(function() {
        inputElemclassList.remove("flash-red");
    }, 500);
}

function onInput() {
    // Clear current output
    output1.innerHTML = "";
    output2.innerHTML = "";

    // Get input then clear it
    var text = inputElem.value;
    inputElem.value = "";

    var weightValue = parseFloat(text);
    if (weightValue) {
        inputElem.value = weightValue;

        var gram = weightValue * 28.3495;
        var ounces = weightValue * 0.035274;

        output1.innerHTML = gram.toPrecision(4) + "g";
        output2.innerHTML = ounces.toPrecision(4) + "oz";
    } else {
        errorMessage();
    }

    return false; // Prevents page reload on form submission
}

// Focus input on load
window.onload = function() {
    // remove input overlay on first input
    inputElem.onkeypress = function() {
        output1.innerHTML = "";
        output2.innerHTML = "";
        output1.classList.remove("light-font");
        output2.classList.remove("light-font");

        // Only call this function once
        inputElem.onkeypress = "";
    }
    inputElem.focus();
}
