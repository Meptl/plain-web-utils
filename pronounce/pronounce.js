function onInput() {
    // DOM Elements of interest
    var inputElem = document.getElementById("text-input");

    // Get input then clear it
    var text = inputElem.value;

    new Audio("http://www.onelook.com/pronounce/macmillan/US/"
            + text + "-American-English-pronunciation.mp3").play();

    return false; // Prevents page reload on form submission
}

// Focus input on load
window.onload = function() {
    document.getElementById("text-input").focus();
}
