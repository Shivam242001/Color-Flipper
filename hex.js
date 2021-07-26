const vals = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const button = document.getElementById("button");
const color  =  document.querySelector(".color");

btn.addEventListener("click" , function(){
	
	var  hex = "#"
	for(let i=0;i<6;i++){
		var newVal = vals[randomNumber()];
		hex = hex + newVal;

	}
	

	document.body.style.backgroundColor = hex;
	color.textContent = hex;
	
})

function randomNumber(){
	
return   Math.floor (Math.random()*vals.length);

	
}