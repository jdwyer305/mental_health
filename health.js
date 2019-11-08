function changeColor(){
	var text = document.getElementById("email").style.color = "white";
}

function backToNormal(){
	var text = document.getElementById("email").style.color = "#155900";
}

function newPicture(){
	document.getElementById("scrabble").src="https://jpdwyer.rhody.dev/images/world.jpg";
}

function oldPicture(){
	document.getElementById("scrabble").src="https://jpdwyer.rhody.dev/images/scrabble.jpg";
}

function changeStyle(){
	
	var yes = confirm("Are you positive you want to see the secret message?");

	if(yes == true){
		var paragraph = document.getElementsByClassName("message");
		var changeText = paragraph[0].innerHTML = "You're Awesome!";
	}

}

function validateTextBox(){
	var box = document.getElementById("email");
	if(box.value == ""){
		alert("You must fill out the form");
		box.focus();
		box.style.border = "solid 3px red";
		return false;
	}
	else{
		box.style.border = "none";
	}
}

