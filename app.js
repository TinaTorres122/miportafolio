var night = document.querySelector(".night");
var green = document.querySelector(".green");
var blue = document.querySelector(".blue");
var pink = document.querySelector(".pink");
var orange = document.querySelector(".orange");

var logo = document.querySelector(".logo");
var names = document.querySelector(".names");
var mn1 = document.querySelector(".mn1");
var mn2 = document.querySelector(".mn2");
var mn3 = document.querySelector(".mn3");
var menu2 = document.querySelector(".menu2");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var heading = document.querySelector(".heading");
var para = document.querySelector(".para");
var printIcon = document.querySelector(".printIcon");
var theme = document.querySelector(".theme");
var body = document.querySelector("body");


function changer(cl1,cl2,cl3,cl4) {

    var lg = "linear-gradient(to right,"+ cl2 + ", " + cl4 + ")"

    body.style.background = cl1;
    logo.style.color = cl2;
    names.style.color = cl3;
    mn1.style.color = cl3;
    mn2.style.color = cl3;
    mn3.style.color = cl3;
    menu2.style.color = cl3;
    heading.style.color = cl3;
    para.style.color = cl3;

    printIcon.style.color = cl2;
    theme.style.borderColor = cl2;
    theme.style.background = cl1;
    btn1.style.background = lg;
    btn2.style.background = lg;

}


night.addEventListener("click", function () {
    changer("#000","#09beb2","#fff","#83b104");
})
green.addEventListener("click", function () {
    changer("#fff","#09beb2","#000","#04a6b1");
})
blue.addEventListener("click", function () {
    changer("#fff","#179fff","#000","#077bcd");
})
pink.addEventListener("click", function () {
    changer("#fff","#ff4fe4","#000","#e54fff");
})
orange.addEventListener("click", function () {
    changer("#fff","#ffad4f","#000","#e26e11");
})



















// l
