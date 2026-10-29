function  greet(name){
    return `Hello, ${name}`
}

let greet1 = function (name){
    return `Hey, ${name}`;
}

// Arrow function
// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>

let greet2 = (name2) => `GoodBye, ${name2}` ;

//print
console.log(greet("Dad"));
console.log(greet1('Mommy'));
console.log(greet2("Year-2026"));