function onInput() {
    // DOM Elements of interest
    var url = document.getElementById("text-input").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/scripts/youtube-mp3.wsgi", true);
    xhr.responseType = "arraybuffer";
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var blob = new Blob([xhr.response], {type: "audio/mp4"});
            var objectUrl = URL.createObjectURL(blob);
            window.open(objectUrl);
        }
    };
    xhr.send(url);

    return false; // Prevents page reload on form submission
}

// Focus input on load
window.onload = function() {
    document.getElementById("text-input").focus();
}
