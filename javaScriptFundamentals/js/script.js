// Function lecture

function greeting() {
    return "Hello World";
}

console.log(greeting());

// Using parameters
function howOld(age) {
//    return `My age is ${age}`;
    return "My return is " + age;
}

console.log(howOld(0));

// Argument parsing
const total = function(x, y) {
    return x + y;
}

console.log(total(244, 233));

// unanonymous function 
const add = (x, y) => {
    return x + y;
}

console.log(add(3, 4));

// Learning Scope (Global - Local)
// --------------------------------

let color = "Pink"; // global scope

const favoriteColor = () => {
    let color = "Pink"; // local scope
    return "Hey, my favorite color is " + color; 
}

// console.log(color);

// Static scope
// --------------------

// Scope A
const testName = () => {
    // Scope B
    let name = "Lara";
    const myOtherName = () => {
        // Scope C
    }
}

num = 0;

while (num < 10) {
    console.log(num);
    num++;
}

num2 = 0;

console.log("Do while loop");
do {
    if(num2 === 5) {
        break;
    } else {
        console.log(num2);
        num2++;
    }
} while (num2 < 10)