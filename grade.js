/* Generate an "amount" of grades, and pushes into array. var amount could be set.*/

function GenerateGrade() {
	var grade=Math.round(Math.random()*50) +50;
	return grade;
}

var scores= [];
var amount=10;
for (i=0; i<amount; i+=1) {
	scores.push(GenerateGrade());
}
console.log(scores);

/*Find how many of each grades.*/
var gradeF= 0;
var gradeD= 0;
var gradeC= 0;
var gradeB= 0;
var gradeA= 0;

for (var i=0; i< scores.length; i+=1) {
	if (scores[i]<=60) {
		gradeF+=1;
	} else if (scores[i]<=70) {
		gradeD+=1;
	} else if (scores[i]<=80) {
		gradeC+=1;
	} else if (scores[i]<=90) {
		gradeB+=1;
	} else {
		gradeA+=1;
	}
	
}
console.log ("How many of each grade? A: "+ gradeA + " B: " + gradeB + " C: "+ gradeC + " D: " +gradeD + " F: " +gradeF);

/* Find min: Use i to represent each number in array, and use j to represent the min */

for (i=0, j=0; i<=scores.length; i+=1) {
	if (scores[i]<=scores[j]) {
		j= i;
	}
}
console.log (scores[j]);

/* Find max: Use i to represent each number in array, and use j to represent the max */

for (i=0, j=0; i<=scores.length; i+=1) {
	if (scores[i]>=scores[j]) {
		j=i;
	}
}
console.log (scores[j]);




/* 
Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A
Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
Use console.log to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade?
*/