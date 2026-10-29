// var is actual traitor - cheator
// let is sincere person
// const is just const which will not change.

// VARIABLE - Fn Scoped

var a = 10;
console.log(a);

function printHello() {
    console.log("The testing Academy");
    var a = 20;
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log(a);
}

printHello();
console.log("Value of a outside the function is: ",a);