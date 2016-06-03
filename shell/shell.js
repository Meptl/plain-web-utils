function onInput() {
    // DOM Elements of interest
    var inputElem = document.getElementById("text-input");
    var output1 = document.getElementById("out1");
    var output2 = document.getElementById("out2");
    var output3 = document.getElementById("out3");

    // Clear current output
    output1.innerHTML = "";
    output2.innerHTML = "";
    output3.innerHTML = "";

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
    document.getElementById("text-input").focus();
}
