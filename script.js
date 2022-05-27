var i = 0;
var j;
var timer;
const pics = document.getElementsByClassName("slide-pic");
const dot = document.getElementsByClassName("dot");
const text = document.getElementsByClassName("heading");
function picRight() {
    clearPrevPic();
    clearTimeout(timer);
    if (i == 4) {i = 0;}
    else {i = i + 1;}
    picChange();
}
function picLeft() {
    clearPrevPic();
    clearTimeout(timer);
    if (i == 0) {i = 4;}
    else {i = i - 1;}
    picChange();
}
function slideShow() {
    picChange();
    var x = screen.height * (70/100);
    var y = screen.width;
    document.getElementById("txt1").innerHTML="Screen Height: "+screen.height;
    document.getElementById("txt2").innerHTML="Screen Width: "+y;
    document.getElementById("layout-content").style.marginTop = x + "px";
    document.getElementById("layout-header").style.height = x + "px";
}
function picChange() {
    pics[i].classList.add("present-img");
    dot[i].classList.add("active");
    text[i].classList.add("present-txt");
    timer = setTimeout(clearPic, 5000);
}
function clearPic() {
    pics[i].classList.remove("present-img");
    dot[i].classList.remove("active");
    text[i].classList.remove("present-txt");
    if (i == 4) {i = 0;}
    else {i = i + 1;}
    picChange();
}
function clearPrevPic() {
    if (i == 0) {j = 4;}
    else {j = i-1;}
    pics[i].classList.remove("present-img");
    dot[i].classList.remove("active");
    text[i].classList.remove("present-txt");
}
function pauseSS() {
    clearTimeout(timer);
    document.getElementById("tt5").style.transform="translate(150%)";
    document.getElementById("tt6").style.transform="translate(0%)";
    document.getElementById("toast-ss-p").classList.add("visible");
    document.getElementById("tt3").style.transform="translate(-100%)";
    document.getElementById("tt4").style.transform="translate(100%)";
    setTimeout(function() {
        document.getElementById("toast-ss-p").classList.remove("visible");
    }, 3000);
}
function startSS() {
    picRight();
    document.getElementById("tt6").style.transform="translate(150%)";
    document.getElementById("tt5").style.transform="translate(0%)";
    document.getElementById("toast-ss-s").classList.add("visible");
    document.getElementById("tt3").style.transform="translate(0%)";
    document.getElementById("tt4").style.transform="translate(0%)";
    setTimeout(function() {
        document.getElementById("toast-ss-s").classList.remove("visible");
    }, 3000);
}
window.onscroll = function() {myFunction()};
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    var ltn = document.getElementById("layoutTopNavigation");
    document.getElementById("myBar").style.width = scrolled + "%";
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-top").style.transform = "translateX(0%)";
    } else {
        document.getElementById("scroll-top").style.transform="translate(150%)";
    }
    if (winScroll > 450) {
        ltn.classList.add("active-nav");
        ltn.classList.add("shadow-lg");
    } else {
        ltn.classList.remove("active-nav");
        ltn.classList.remove("shadow-lg");
    }
    if (winScroll>50 && winScroll<150) {
        document.getElementById("cl").style.opacity="0"
    } else {
        document.getElementById("cl").style.opacity="1"
    }
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*function opacityChange() {
    var ltn = document.getElementById("layoutTopNavigation");
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    ltn.style.opacity="1";
    ltn.addEventListener("mouseleave", function(){
        setTimeout(function() {
            if(winScroll>500){
                ltn.style.opacity="0.5";
            }else{
                ltn.style.opacity="1";
            }
        }, 5000);
    })
}*/
function zoomImg1() {
    let imgSrc = document.getElementById("img").getAttribute("src");
    document.getElementById("img-modal").classList.add("img-modal-opn");
    document.getElementById("img-modal--img").setAttribute("src", imgSrc);
}
function zoomImg2() {
    let imgSrc = document.getElementById("img2").getAttribute("src");
    document.getElementById("img-modal").classList.add("img-modal-opn");
    document.getElementById("img-modal--img").setAttribute("src", imgSrc);
}
function closeModal() {
    document.getElementById("img-modal").classList.remove("img-modal-opn");
}

//Navigation
function classNavigate1() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    text.innerHTML ="Class VII"
    setTimeout(function() {
        text.style.transform="scale(1.5)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("./Sections/Section1.html");
        }, 1000);
    }, 1000);
}
function classNavigate2() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    text.innerHTML ="Class VIII"
    setTimeout(function() {
        text.style.transform="scale(1.5)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("./Sections/Section2.html");
        }, 1000);
    }, 1000);
}
function classNavigate3() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    text.innerHTML ="Class IX"
    setTimeout(function() {
        text.style.transform="scale(1.5)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("./Sections/Section3.html");
        }, 1000);
    }, 1000);
}
function classNavigate4() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    text.innerHTML ="Class X"
    setTimeout(function() {
        text.style.transform="scale(1.5)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("./Sections/Section4.html");
        }, 1000);
    }, 1000);
}
function classNavigate5() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    text.innerHTML ="Class XI"
    setTimeout(function() {
        text.style.transform="scale(1.5)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("./Sections/Section5.html");
        }, 1000);
    }, 1000);
}
function classNavigate6() {
    var text = document.getElementById("nav-overlay-text");
    var overlay = document.getElementById("navigation-overlay");
    overlay.style.transform="translate(0%)";
    text.innerHTML ="Class XII"
    setTimeout(function() {
        text.style.transform="scale(1.5)";
        overlay.style.backgroundColor="rgba(0, 0, 0, 1)";
        setTimeout(function() {
            location.replace("./Sections/Section6.html");
        }, 1000);
    }, 1000);
}