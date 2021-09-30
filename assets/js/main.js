var menuBtn = document.getElementById("nav__btn")
var nav = document.getElementById("nav")
var navBtnImg = document.getElementById("nav__btn-img")
nav.style.right == "-25rem";


menuBtn.onclick = function () {
    if (nav.style.right == "-25rem") {
        nav.style.right = "0";
        // navBtnImg.src = "../img/close.png";
    }
    else {
        nav.style.right = "-25rem";
        // navBtnImg.src = "../img/menu.png";
    }
}
