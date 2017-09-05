function errorMessage() {
    var inputElem = document.getElementById("text-input");
    inputElem.classList.add("flash-red");
    setTimeout(function() {
        inputElem.classList.remove("flash-red");
    }, 500);
}

function onInput() {
    // DOM Elements of interest
    var inputElem = document.getElementById("text-input");

    // Get input then clear it
    var text = inputElem.value.toLowerCase();

    // To listen for a File Not Found error we have to bind to the source tag
    var audio = new Audio();
    var source = document.createElement("source");

    // Request the dictionary API
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.pearson.com/v2/dictionaries/ldoce5/entries?headword=" + text + "&audio=pronunciation");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            var results = response.results;

            for (var i = 0; i < results.length; i++) {
                // Only exact matches
                if (results[i].headword != text)
                    continue;

                source.src = "http://api.pearson.com" + results[i].pronunciations[0].audio[0].url;
                console.log(source.src);
                audio.appendChild(source);
                audio.volume = 0.5;

                source.addEventListener("error", function() {
                    inputElem.value = "";
                    errorMessage();
                });

                audio.play();
            }
        }
    }
    xhr.send();


    return false; // Prevents page reload on form submission
}

// Focus input on load
window.onload = function() {
    document.getElementById("text-input").focus();
}
