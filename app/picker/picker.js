// DOM Elements of interest
var hueBar = document.getElementById("hue");
var satBar = document.getElementById("saturation");
var briBar = document.getElementById("brightness");
var outColor = document.getElementById("outColor");
var outText = document.getElementById("outText");

// Default color chosen.
var currR = 255;
var currG = 0;
var currB = 0;
var currSat = 255;
var currBri = 127;

function restoreColor() {
    /*
    if (typeof(Storage) !== "undefined") {
        currR = localStorage.getItem("R");
        currG = localStorage.getItem("G");
        currB = localStorage.getItem("B");
        currSat = localStorage.getItem("saturation");
        currBri = localStorage.getItem("brightness");
    } else {
        localStorage.setItem("R", currR);
        localStorage.setItem("G", currG);
        localStorage.setItem("B", currB);
        localStorage.setItem("saturation", currSat);
        localStorage.setItem("brightness", currBri);
    }
    */
}

function initCanvas() {
    // Create hue gradient
    var hueCtx = hueBar.getContext("2d");
    var hueGradient = hueCtx.createLinearGradient(0, 0, hueBar.width, 0);

    hueGradient.addColorStop(0,    "rgb(255,   0,   0)");
    hueGradient.addColorStop(0.15, "rgb(255,   0, 255)");
    hueGradient.addColorStop(0.33, "rgb(0,     0, 255)");
    hueGradient.addColorStop(0.49, "rgb(0,   255, 255)");
    hueGradient.addColorStop(0.67, "rgb(0,   255,   0)");
    hueGradient.addColorStop(0.84, "rgb(255, 255,   0)");
    hueGradient.addColorStop(1,    "rgb(255,   0,   0)");

    hueCtx.fillStyle = hueGradient;
    hueCtx.fillRect(0, 0, hueBar.width, hueBar.height);

    // Create saturation gradient
    var satCtx = satBar.getContext("2d");
    var satGradient = satCtx.createLinearGradient(0, 0, satBar.width, 0);

    // from current color to current brightness.
    satGradient.addColorStop(0,    "rgb(255,   0,   0)");
    satGradient.addColorStop(1,    "rgb(255,   0,   0)");

    satCtx.fillStyle = satGradient;
    satCtx.fillRect(0, 0, satBar.width, satBar.height);

    // Create brightness gradient
    var briCtx = briBar.getContext("2d");
    var briGradient = briCtx.createLinearGradient(0, 0, briBar.width, 0);

    briGradient.addColorStop(0, "black");
    briGradient.addColorStop(1, "white");

    briCtx.fillStyle = briGradient;
    briCtx.fillRect(0, 0, briBar.width, briBar.height);
}

function updateOutput() {
    outColor.style.background = "rgb(" + currR + ", " + currG + ", " + currB + ")";
    outText.innerHTML = "#" + currR.toString(16) + currG.toString(16) + currB.toString(16);
}

// Focus input on load
window.onload = function() {
    restoreColor();
    initCanvas();
    updateOutput();
}
