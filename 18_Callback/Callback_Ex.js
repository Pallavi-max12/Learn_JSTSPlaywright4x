function greet() {
    console.log("Hello Pallavi");
}

function welcome(callback) {
    console.log("Lets learn Callbacks!");
    callback();
    //console.log("Welcome to the world of Callbacks!");
}
console.log("Before calling welcome function");

welcome(greet);
console.log("After calling welcome function");