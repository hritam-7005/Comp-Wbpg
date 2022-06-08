function load() {
    var overlay = document.getElementById("loading-overlay");
    var text = document.getElementById("load-overlay-text");
    //text.innerHTML ="<.../>";
    setTimeout(function() {
        text.style.transform="scale(1)";
        text.style.opacity="0.5";
        overlay.style.opacity="0";
        setTimeout(function() {
            overlay.style.transform="translate(-100%)";
            overlay.style.zIndex="-1";
        }, 10);
    }, 700)
}
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    var ltn = document.getElementById("layoutTopNavigation");
    var sld = document.getElementById("sld");
    document.getElementById("myBar").style.width = scrolled + "%";
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-top").style.transform = "translateX(0%)";
    } else {
        document.getElementById("scroll-top").style.transform="translate(150%)";
    }
    if (winScroll > 20) {
        ltn.classList.add("active-nav");
        sld.style.top="63px";
    } else {
        ltn.classList.remove("active-nav");
        sld.style.top="70px";
    }
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
            location.replace("/index.html");
        }, 1000);
    }, 1000);
}
function classNavigate1() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    overlay.style.opacity="1";
    text.innerHTML ="Class VII"
    setTimeout(function() {
        text.style.transform="scale(1.3)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("/Sections/Section1.html");
        }, 500);
    }, 500);
}
function classNavigate2() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    overlay.style.opacity="1";
    text.innerHTML ="Class VIII"
    setTimeout(function() {
        text.style.transform="scale(1.3)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("/Sections/Section2.html");
        }, 500);
    }, 500);
}
function classNavigate3() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    overlay.style.opacity="1";
    text.innerHTML ="Class IX"
    setTimeout(function() {
        text.style.transform="scale(1.3)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("/Sections/Section3.html");
        }, 500);
    }, 500);
}
function classNavigate4() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    overlay.style.opacity="1";
    text.innerHTML ="Class X"
    setTimeout(function() {
        text.style.transform="scale(1.3)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("/Sections/Section4.html");
        }, 500);
    }, 500);
}
function classNavigate5() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    overlay.style.opacity="1";
    text.innerHTML ="Class XI"
    setTimeout(function() {
        text.style.transform="scale(1.3)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("/Sections/Section5.html");
        }, 500);
    }, 500);
}
function classNavigate6() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    overlay.style.opacity="1";
    text.innerHTML ="Class XII"
    setTimeout(function() {
        text.style.transform="scale(1.3)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("/Sections/Section6.html");
        }, 500);
    }, 500);
}