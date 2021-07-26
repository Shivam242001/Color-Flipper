const colors = ["green", "red", "blue", "cyan", "white","black"];
const button = document.getElementById("button");
const color  =  document.querySelector(".color");

btn.addEventListener("click" , function(){
	
	var random = randomNumber();
	document.body.style.backgroundColor = colors[random];
	color.textContent = colors[random];
	
})

function randomNumber(){
	
return   Math.floor (Math.random()*colors.length);

	
}