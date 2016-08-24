// decodes the audio file and returns a blob for it
// The file was base64 encoded on a python wsgi script
// The problem is atob converts the base64 string to a char array.
// See: https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
function extractFile(base64) {
    var bin_ch = atob(base64);
    var bin_nums = new Array(bin_ch.length);
    for (var i = 0; i < bin_ch.length; i++)
        bin_nums[i] = bin_ch.charCodeAt(i);

    var bin_arr = new Uint8Array(bin_nums);
    var blob = new Blob([bin_arr], {type: "application/data"});
    return blob;
}
function onInput() {
    // DOM Elements of interest
    var url = document.getElementById("text-input").value;
    var submit_button = document.getElementById("submit").children[0];

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/scripts/youtube-mp3.wsgi", true);
    //xhr.responseType = "arraybuffer";
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // Stop spinning the submit button
            submit_button.classList.remove("spin");
            if (xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                // base64 decode the data of the response and blobify it
                var blob = extractFile(response.data);
                var objectUrl = URL.createObjectURL(blob);

                // Create an <a> tag and force click
                // This is necessaru to rename the blob url
                var dl = document.createElement("a");
                document.body.appendChild(dl);
                dl.style.display = "none";
                dl.href = objectUrl;
                dl.download = response.filename;
                dl.click();

            }
        }
    };
    xhr.send(url);

    // Spin the submit button
    submit_button.classList.add("spin");

    return false; // Prevents page reload on form submission
}

// Focus input on load
window.onload = function() {
    document.getElementById("text-input").focus();
}
