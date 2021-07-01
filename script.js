var css = document.querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.querySelector("#gradient")
var newGradient = document.querySelector("#genNew");

window.onload = setGradient();



function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function newGradient() {
    color1.value = {
      r: Math.floor(Math.random()*255),
      g: Math.floor(Math.random()*255),
      b: Math.floor(Math.random()*255)
    };
    color2.value = {
      r: Math.floor(Math.random()*255),
      g: Math.floor(Math.random()*255),
      b: Math.floor(Math.random()*255)
    };
    color1.rgb = 'rgb('+color1.r+','+color1.g+','+color1.b+')';
    color2.rgb = 'rgb('+color2.r+','+color2.g+','+color2.b+')';
    return 'radial-gradient(at top left, '+color1.rgb+', '+color2.rgb+')';
  }
  
  function rollBg() {
    $('.bg.hidden').css('background', newGradient());
    $('.bg').toggleClass('hidden');
  }