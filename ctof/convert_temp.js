// DOM Elements of interest
var inputElem = document.getElementById("text-input");
var outputF = document.getElementById("fahrenheit");
var outputC = document.getElementById("celsius");

function convertTemp() {
    // Clear current output
    outputF.innerHTML = "";
    outputC.innerHTML = "";

    // Get input, clear, then convert.
    var text = inputElem.value;
    inputElem.value = "";

    var tempValue = parseFloat(text);
    if (tempValue) {
        inputElem.value = tempValue;

        // Given value could be both F or C, convert to both.
        var fahrenheit = tempValue * 9 / 5 + 32;
        var celsius = 5 / 9 * (tempValue - 32);
        outputF.innerHTML = fahrenheit.toPrecision(4) + "°F";
        outputC.innerHTML = celsius.toPrecision(4) + "°C";
    }

    return false; // Prevents page reload on form submission
}

// Focus input on load
window.onload = function() {
    // remove input overlay on first input
    inputElem.onkeypress = function() {
        document.getElementById("input-overlay").style.display = "none";
        outputF.innerHTML = "";
        outputC.innerHTML = "";
        outputF.classList.remove("light-font");
        outputC.classList.remove("light-font");

        // Only call this function once
        inputElem.onkeypress = "";
    }
    inputElem.focus();
}
