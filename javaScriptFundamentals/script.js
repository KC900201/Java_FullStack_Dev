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