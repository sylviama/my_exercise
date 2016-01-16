var colors= ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var html = "";
for (i=0; i<colors.length; i+=1) {
	for (j=0; j<reindeer.length; j+=1) {
	html+= "<li>"+ colors[i] + " "+ reindeer[j] + "</li>";
      }
}

/*var html ="";
for (i=0; i<=combine.length; i+=1) {
	html += "<li>" +combine[i] +"</li>";
} */

document.getElementById("coloredReindeer").innerHTML = html;

