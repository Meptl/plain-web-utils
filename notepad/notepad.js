// DOM Elements of interest
var inputElem = document.getElementById("text-input");

window.onload = function() {
    inputElem.onkeypress = function() {
        // Remove page title
        document.getElementById("title").style.display = "none";

        // Only call this function once
        inputElem.onkeypress = "";
    }

    if (typeof(Storage) !== "undefined") {
        inputElem.onchange = function() {
            localStorage.setItem("notepad", inputElem.value);
        };
    }

    inputElem.focus();

    // Try to retrieve localStorage
    if (typeof(Storage) !== "undefined") {
        inputElem.value = localStorage.getItem("notepad");

        // Call "first input" handler if we have stored data.
        if (inputElem.value !== "")
            inputElem.onkeypress();
    }
}

