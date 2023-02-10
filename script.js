var css = document.querySelector("h3");
var color1 = document.getElementsByClassName("color1")[0];
var color2 = document.getElementsByClassName("color2")[0];
var body = document.getElementById("body");
var slider = document.getElementById("myRange");
var random = document.getElementById("random");

color1.addEventListener("input", setColors)

color2.addEventListener("input", setColors)

slider.addEventListener("input", setColors)

random.addEventListener("click",randomize)


function randomize(){
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    color1.value = "#" + randomColor1;
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    color2.value = "#" + randomColor2;
    setColors()
}


function setColors(){
	body.style.background = "linear-gradient("+slider.value+"deg, "+color1.value+ " , "+color2.value+")";
	generateCSS();
}


function generateCSS(){
css.textContent = "background-image: "+ body.style.background+";";
}

document.onload = setColors();