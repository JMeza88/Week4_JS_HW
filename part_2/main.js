document.querySelector('#convert').addEventListener("click",compute);

function compute(){
	var farenheit = (parseInt(document.querySelector('#celsius').value) *1.8) +32;
	//var farenheit= (celsiusInt * 1.8) + 32;
	document.querySelector('h1').innerHTML = farenheit
	if (farenheit > 60) {
		document.body.style.background = "url('./images/FireBackground.jpg')"
	}
	else if (farenheit < 30){
		document.body.style.background = "url('./images/coldBackground.jpg')"
	}
	else {
		document.body.style.background = "url('./images/greyBackground.jpg')"
	}
}