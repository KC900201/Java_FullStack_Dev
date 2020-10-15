// Practicing JavaScript

// Variables
/*
const age = 19;

if (age >= 21) {
    console.log("Age is more than 21");
} else {
    console.log("Age is less than or equal to 1");
    console.log("You aren\'t old enough to drink legally");
}
*/

// If - else statements
// comparative elements
const a = 21; 
const b = 100;

if (a === b) {
    console.log("Both values are equal");
} else if (a > b) {
    console.log("A is larger than B");
} else if (a < b) {
    console.log("A is smaller than B");
} else {
    console.log("Both values are not defined");
}

// Switch statement
var s = "C";

switch (s) {
    case "A":
        console.log("Prompt a");
        break;
    case "B":
        console.log("Prompt b");
        break;
    case "C":
        console.log("Prompt c");
        break;
    default:
        console.log("Test complete");
        break;
}