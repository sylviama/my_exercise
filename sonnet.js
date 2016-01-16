
/*2. Take the contents of the sonnet div and place it in a variable  */
var para = "How like a winter hath my absence been From thee, the pleasure of the fleeting year! What freezings have I felt, what dark days seen! What old December's bareness everywhere! And yet this time removed was summer's time; The teeming autumn, big with rich increase, Bearing the wanton burden of the prime, Like widow'd wombs after their lords' decease: Yet this abundant issue seemed to me. But hope of orphans, and unfathered fruit; For summer and his pleasures wait on thee, And, thou away, the very birds are mute: Or, if they sing, 'tis with so dull a cheer, That leaves look pale, dreading the winter's near.";


/*Is there a way that don't need to copy again to the varable, but only get by ID?*/


/*3. Find and output the starting position of the word "orphans" */
var position = para.toString().indexOf("orphans");
document.getElementById("question3").innerHTML = position;

/*4. Output the number of characters in the sonnet*/
var numbers = para.length;
document.getElementById("question4").innerHTML = numbers;

/*Replace the first occurance of the string "winter" with "yuletide" */
var yu = para.replace("winter", "yuletide");
document.getElementById("question5").innerHTML = yu;

/*highlight(document.getElementById("question5"), "yuletide", "highlight");*/

/* Replace all occurances of the string "the" with "a large" */
var ALarge = para.replace(/the/g, "a large");
document.getElementById("question6").innerHTML = ALarge;

