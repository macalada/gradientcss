var body = document.querySelector("body");
var css= document.querySelector(".result");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

function setGradient(){
    body.style.background = "linear-gradient(to right," +color1.value +", " +color2.value+")" ;
    css.textContent = body.style.background;
}
window.addEventListener('load', (event) => {
    body.style.background = "linear-gradient(to right, #EC6F66, #F3A183)";
    css.textContent = body.style.background;
  });

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
console.log(body);
console.log(color1.value);
console.log(color2.value);