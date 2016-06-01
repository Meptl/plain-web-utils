function convertTemp() {
    // DOM Elements of interest
    var inputElem = document.getElementById("text-input");
    var outputF = document.getElementById("fahrenheit");
    var outputC = document.getElementById("celsius");

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
    document.getElementById("text-input").focus();
}
