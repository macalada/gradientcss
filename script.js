var body = document.querySelector("body");
var css= document.getElementById("result");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var copyBtn = document.querySelector(".copyButton");

function setGradient(){
    body.style.background = "linear-gradient(to right," +color1.value +", " +color2.value+")" ;
    css.textContent = body.style.background;
}

function copyText(){
    var textArea = document.createElement("textarea");
    textArea.value = css.textContent;
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(textArea.value);
    copyBtn.textContent = "Copied!";
}
window.addEventListener('load', (event) => {
    body.style.background = "linear-gradient(to right, #EC6F66, #F3A183)";
    css.textContent = body.style.background;
});

copyBtn.addEventListener('click', copyText);
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
