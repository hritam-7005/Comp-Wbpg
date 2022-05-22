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
    //if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //    document.getElementById("scrollBtn").style.display = "block";
    //} else {
    //    document.getElementById("scrollBtn").style.display = "none";
    //}
    if (winScroll > 500) {
        ltn.classList.add("active-nav");
        ltn.classList.add("shadow-lg");
    } else {
        ltn.classList.remove("active-nav");
        ltn.classList.remove("shadow-lg");
    }
}
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