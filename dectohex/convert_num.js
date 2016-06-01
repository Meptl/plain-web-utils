function convertNum() {
    // DOM Elements of interest
    var inputElem = document.getElementById("text-input");
    var outputD = document.getElementById("decimal");
    var outputH = document.getElementById("hex");
    var outputB = document.getElementById("binary");

    // Clear current output
    outputD.innerHTML = "";
    outputH.innerHTML = "";
    outputB.innerHTML = "";

    // Get input
    var text = inputElem.value;

    var decValue = Number(text);
    var hexParse = parseInt(text, 16);

    if (decValue) {
        if (text.startsWith("0x")) {
            // We know this is a hex value that was given.
            outputD.innerHTML = decValue;
            outputB.innerHTML = "0b" + decValue.toString(2);
        } else {
            var hexValue = decValue.toString(16);

            // Given value could be both F or C, convert to both.
            outputD.innerHTML = hexParse;
            outputH.innerHTML = "0x" + hexValue;
            outputB.innerHTML = "0b" + parseInt(hexValue, 16).toString(2);
        }
    } else if (hexParse) {
        // Hex was given without a preceding 0x
        outputD.innerHTML = hexParse;
        outputB.innerHTML = "0b" + hexParse.toString(2);
    }

    return false; // Prevents page reload on form submission
}

// Focus input on load
window.onload = function() {
    document.getElementById("text-input").focus();
}
