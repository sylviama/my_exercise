
function coinCounter(){
	var input = prompt("How much you want to calculate?");
	var quarter = Math.floor(parseFloat(input)/0.25);
	var rest = input - quarter*0.25;
	var dime = Math.floor(rest/0.1);
	rest = rest - dime * 0.1;
	var nickel = Math.floor(rest/0.05);
	rest = rest - nickel*0.05;
	var penny = Math.floor(rest/0.01);

	document.write("<p>Quarters: "+ quarter + "</p><br>");
	document.write("<p>Dimes: "+ dime + "</p><br>");
	document.write("<p>Nickels: " + nickel + "</p><br>");
	document.write("<p>Pennies: " + penny + "</p><br>");
}

coinCounter();

/*Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.*/