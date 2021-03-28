const Btn1 = document.querySelector(".btn1");
const Btn2 = document.querySelector(".btn2");
const Btn3 = document.querySelector(".btn3");
const Btn4 = document.querySelector(".btn4");
const Btn5 = document.querySelector(".btn5");
const Btn6 = document.querySelector(".btn6");
const Btn7 = document.querySelector(".btn7");
const Btn8 = document.querySelector(".btn8");

Btn1.addEventListener("click", color1);
Btn2.addEventListener("click", color2);
Btn3.addEventListener("click", color3);
Btn4.addEventListener("click", color4);
Btn5.addEventListener("click", color5);
Btn6.addEventListener("click", color6);
Btn7.addEventListener("click", color7);
Btn8.addEventListener("click", color8);

function color1() {
  event.preventDefault();

  document.body.style.backgroundColor = " rgb(174, 174, 223)";
}
function color2() {
  event.preventDefault();
  document.body.style.backgroundColor = " yellow";
}
function color3() {
  event.preventDefault();
  document.body.style.backgroundColor = " rgb(138, 219, 138)";
}
function color4() {
  event.preventDefault();
  document.body.style.backgroundColor = " rgb(241, 95, 205)";
}
function color5() {
  event.preventDefault();
  document.body.style.backgroundColor = " rgb(206, 117, 117)";
}
function color6() {
  event.preventDefault();
  document.body.style.backgroundColor = " rgb(95, 241, 217)";
}
function color7() {
  event.preventDefault();
  document.body.style.backgroundColor = " rgb(175, 149, 149)";
}
function color8() {
  event.preventDefault();
  document.body.style.backgroundColor = "  rgb(241, 219, 95)";
}
