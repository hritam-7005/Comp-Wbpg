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
    var x = screen.height * (55/100);
    var x1 = screen.height * (67.5/100);
    var y = screen.width;
    //document.getElementById("txt1").innerHTML="Screen Height: "+screen.height;
    document.getElementById("txt2").innerHTML="Screen Width: "+y;
    document.getElementById("layout-content").style.marginTop = x1 + "px";
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
    document.getElementById("tt3").style.transform="translate(-150%)";
    document.getElementById("tt4").style.transform="translate(150%)";
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
//Theme Color
var clr = "Teal";
var clrNo = 1;
var or = document.getElementById("or");
var te = document.getElementById("te");
var gr = document.getElementById("gr");
var bl = document.getElementById("bl");
var vi = document.getElementById("vi");
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");
var s5 = document.getElementById("s5");
const icn = document.getElementsByClassName("icn");
function c_or() {icn[clrNo].classList.remove("material-icons"); clrNo = 0;clr = "Or"; ThemeColorChange();}
function c_te() {icn[clrNo].classList.remove("material-icons"); clrNo = 1;clr = "Te"; ThemeColorChange();}
function c_gr() {icn[clrNo].classList.remove("material-icons"); clrNo = 2;clr = "Gr"; ThemeColorChange();}
function c_bl() {icn[clrNo].classList.remove("material-icons"); clrNo = 3;clr = "Bl"; ThemeColorChange();}
function c_vi() {icn[clrNo].classList.remove("material-icons"); clrNo = 4;clr = "Vi"; ThemeColorChange();}
function ThemeColorChange() {
    icn[clrNo].classList.add("material-icons");
    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var s3 = document.getElementById("s3");
    var s4 = document.getElementById("s4");
    var s5 = document.getElementById("s5");
    s1.setAttribute("href", "./Styles/"+clr+"/Style_Common.css");
    s2.setAttribute("href", "./Styles/"+clr+"/Style_Top_Navigation.css");
    s3.setAttribute("href", "./Styles/"+clr+"/Style_Navigation_Drawer.css");
    s4.setAttribute("href", "./Styles/"+clr+"/Style_Header.css");
    s5.setAttribute("href", "./Styles/"+clr+"/Style_Layout_Content.css");
    colr = clr;
    setCookie("themeColor", colr, 365);
}
//Cookies about Theme
let colr = getCookie("themeColor");
function setCookie(theme,color,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = theme + "=" + color + ";" + expires + ";path=/";
}
function getCookie(theme) {
    let name = theme + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }    
    }
    return "";
}
function checkCookie() {
    var lnk = document.getElementById("s1");
    var hrefAttr = lnk.getAttribute("href");
    var thmclr;
    if (colr === "Gr") {thmclr = "Green";}
    else if (colr === "Te") {thmclr = "Teal";}
    else if (colr === "Bl") {thmclr = "Blue";}
    else if (colr === "Or") {thmclr = "Orange";}
    else if (colr === "Vi") {thmclr = "Violet";}
    document.getElementById("txt1").innerHTML=thmclr;
    if (colr != "") {
        var s1 = document.getElementById("s1");
        var s2 = document.getElementById("s2");
        var s3 = document.getElementById("s3");
        var s4 = document.getElementById("s4");
        var s5 = document.getElementById("s5");
        s1.setAttribute("href", "./Styles/"+colr+"/Style_Common.css");
        s2.setAttribute("href", "./Styles/"+colr+"/Style_Top_Navigation.css");
        s3.setAttribute("href", "./Styles/"+colr+"/Style_Navigation_Drawer.css");
        s4.setAttribute("href", "./Styles/"+colr+"/Style_Header.css");
        s5.setAttribute("href", "./Styles/"+colr+"/Style_Layout_Content.css");
    } else {
        colr = hrefAttr.slice(9, 11);
        if (colr != "" && colr != null) {
            setCookie("themeColor", colr, 365);
        }
    }
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
function closeModal() {
    document.getElementById("img-modal").classList.remove("img-modal-opn");
}

//Navigation
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
            location.replace("./Sections/Section1.html");
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
            location.replace("./Sections/Section2.html");
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
            location.replace("./Sections/Section3.html");
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
            location.replace("./Sections/Section4.html");
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
            location.replace("./Sections/Section5.html");
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
            location.replace("./Sections/Section6.html");
        }, 500);
    }, 500);
}