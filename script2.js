function load() {
    var overlay = document.getElementById("loading-overlay");
    var text = document.getElementById("load-overlay-text");
    //text.innerHTML ="<.../>";
    setTimeout(function() {
        text.style.transform="scale(1)";
        text.style.opacity="0.5";
        setTimeout(function() {
            overlay.style.transform="translate(-100%)";
            overlay.style.zIndex="-1";
        }, 800);
    }, 500)
}
//Navigation
function homeNavigate() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    text.innerHTML ="Home"
    setTimeout(function() {
        text.style.transform="scale(1.3)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("./index.html");
        }, 1000);
    }, 1000);
}
function classNavigate1() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    text.innerHTML ="Class VII"
    setTimeout(function() {
        text.style.transform="scale(1.3)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("./Section1.html");
        }, 1000);
    }, 1000);
}
function classNavigate2() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    text.innerHTML ="Class VIII"
    setTimeout(function() {
        text.style.transform="scale(1.3)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("./Section2.html");
        }, 1000);
    }, 1000);
}
function classNavigate3() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    text.innerHTML ="Class IX"
    setTimeout(function() {
        text.style.transform="scale(1.3)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("./Section3.html");
        }, 1000);
    }, 1000);
}
function classNavigate4() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    text.innerHTML ="Class X"
    setTimeout(function() {
        text.style.transform="scale(1.3)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("./Section4.html");
        }, 1000);
    }, 1000);
}
function classNavigate5() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    text.innerHTML ="Class XI"
    setTimeout(function() {
        text.style.transform="scale(1.3)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("./Section5.html");
        }, 1000);
    }, 1000);
}
function classNavigate6() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    text.innerHTML ="Class XII"
    setTimeout(function() {
        text.style.transform="scale(1.3)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("./Section6.html");
        }, 1000);
    }, 1000);
}