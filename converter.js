
function FtoC(f) {
	var out= (parseFloat(f)-32) *5/9;
	document.getElementById("output").innerHTML = out;
	console.log(out);
}

/*
function trig() {
var a= document.getElementById("input").value;
FtoC(a);
}
*/



function CtoF(c) {
	var out= c*9/5+32;
	document.getElementById("output").innerHTML = out;
}



function determineConverter(){
	if (document.getElementById("FtoC").checked) {
		FtoC();
	} else if (document.getElementById("CtoF").checked){
		CtoF();
	}
}

/*
button.getElementById("myBtn").addEventListener("click", determineConverter);
*/