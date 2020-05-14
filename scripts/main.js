var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
function multiply(num1, num2)
{
	return num1*num2;
}
function dtouch()
{
	alert("!!!!!!!");
}

var myImage = document.querySelector("img");
myImage.onclick = function(){	
	var mySrc = myImage.getAttribute("src");
	if(mySrc=== 'images/chess.jpg'){
		myImage.setAttribute('src', 'images/mozzila.jpg');
	}
	else{ 
		myImage.setAttribute('src', 'images/chess.jpg');
	}
	}
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName(){

	var myName = prompt("Please enter your name!");
	localStorage.setItem("name", myName);
	myHeading.textContent = "Chess is cool, " + myName;
}

if (!localStorage.getItem("name")){

	setUserName();
}
else {
	var storedName = localStorage.getItem("name");
	myHeading.textContent = "Chess is cool, " + storedName;
}

myButton.onclick = function()
{
	setUserName();
}


