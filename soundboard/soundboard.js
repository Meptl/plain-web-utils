var audioURL;
var inputElem = document.getElementById("file-input");
var buttonElem = document.getElementById("submit");
var label = document.getElementById('upload');
var audio = document.getElementById("audio");

function onInput() {
    //audio.children[0].src = audioURL; // audio child is source
    audio.pause();
    audio.currentTime = 0;
    audio.src = audioURL;
    audio.volume = 0.8;
    audio.play();

    return false; // Prevents page reload on form submission
}

function onUpload() {
    // Save file location
    audioURL = URL.createObjectURL(inputElem.files[0]);

    // Remove upload button
    label.style.display = 'none';

    // Show play button
    buttonElem.style.display = 'block';

    return false;
}

audio.addEventListener("error", function() {
    // Show upload again
    label.style.display = 'block';
    buttonElem.style.display = 'none';
});
