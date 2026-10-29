// Type 1 - No param / argument, No Return -> final retunr undefined.

//fn definetion
function greet(){
    console.log("Hi all");
    }

// fn Calling

greet();
greet()


function openBrowser(){
    console.log("Open Browsers");     // open the browser.
}

openBrowser();

let msg = greet();
console.log(msg);       // undefined, as there is no return type value