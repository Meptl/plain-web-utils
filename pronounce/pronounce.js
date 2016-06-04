function onInput() {
    // DOM Elements of interest
    var inputElem = document.getElementById("text-input");

    // Get input then clear it
    var text = inputElem.value.toLowerCase();

    // To listen for a File Not Found error we have to bind to the source tag
    var audio = new Audio();
    var source = document.createElement("source");
    source.src = "http://www.onelook.com/pronounce/macmillan/US/" + text +
        "-American-English-pronunciation.mp3";
    audio.appendChild(source);
    audio.volume = 0.5;

    source.addEventListener("error", function() {
        inputElem.value = "";
    });

    audio.play();


    return false; // Prevents page reload on form submission
}

// Focus input on load
window.onload = function() {
    document.getElementById("text-input").focus();
}
