var h3 = document.querySelector("h3");
var h4 = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	h3.textContent = body.style.background + ";";
	h4.textContent = "Color 1 Hex: " + color1.value + " Color 2 Hex: " + color2.value;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);