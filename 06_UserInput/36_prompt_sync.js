const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: "));
console.log("the entered number is", num);
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}