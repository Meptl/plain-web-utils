// DOM Elements of interest
var inputElem = document.getElementById("text-input");

// Focus input on load
window.onload = function() {
    inputElem.onkeypress = function() {
        document.getElementById("title").style.display = "none";

        // Only call this function once
        inputElem.onkeypress = "";
    }

    inputElem.focus();
}
