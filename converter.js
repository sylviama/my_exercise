
function FtoC() {
	var inputValue=document.getElementById("input").value;
	var out= (parseFloat(inputValue)-32) *5/9;
	document.getElementById("output").innerHTML = out;
	console.log(out);
}



function CtoF() {
	var inputValue=document.getElementById("input").value;
	var out= inputValue *9/5+32;
  document.getElementById("output").innerHTML = out;
	console.log (out);
}



function determineConverter(){
	if (document.getElementById("FtoC").checked) {
		FtoC();
	} else if (document.getElementById("CtoF").checked){
		CtoF();
	}
}



/* I don't know how to use this
button.addEventListener("click", determineConverter);
*/