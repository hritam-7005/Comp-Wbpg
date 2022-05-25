function load() {
    var overlay = document.getElementById("loading-overlay");
    var text = document.getElementById("load-overlay-text");
    text.innerHTML ="Welcome";
    setTimeout(function() {
        text.style.transform="scale(1)";
        text.style.opacity="0.5";
        setTimeout(function() {
            overlay.style.transform="translate(-100%)";
        }, 800);
    }, 500)
}