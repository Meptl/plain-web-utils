// DOM Elements of interest
var inputElem = document.getElementById("text-input");
var outputD = document.getElementById("decimal");
var outputH = document.getElementById("hex");
var outputB = document.getElementById("binary");

function errorMessage() {
    inputElem.classList.add("flash-red");
    setTimeout(function() {
        inputElem.classList.remove("flash-red");
    }, 500);
}

function convertNum() {
    // Clear current output
    outputD.innerHTML = "";
    outputH.innerHTML = "";
    outputB.innerHTML = "";

    // Get input then clear it
    var text = inputElem.value;
    inputElem.value = "";

    var decValue = Number(text);
    var hexParse = parseInt(text, 16);
    // Ensure valid hex since parseInt does not. 'asdf' is interpreted as 'a'
    if (/[^0-9A-F]+/i.test(text))
        hexParse = null; // Will fall into error message

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
    } else {
        errorMessage();
    }


    return false; // Prevents page reload on form submission
}

// Focus input on load
window.onload = function() {
    // remove input overlay on first input
    inputElem.onkeypress = function() {
        document.getElementById("input-overlay").style.display = "none";
        outputD.innerHTML = "";
        outputH.innerHTML = "";
        outputB.innerHTML = "";
        outputD.classList.remove("light-font");
        outputH.classList.remove("light-font");
        outputB.classList.remove("light-font");

        // Only call this function once
        inputElem.onkeypress = "";
    }
    inputElem.focus();
}
