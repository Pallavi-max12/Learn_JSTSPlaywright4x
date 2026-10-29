// Searching and checking

let url = "https://staging.vwo.com/api/login?retry=true";
// includes()
let stg = url.includes("staging");
let prd = url.includes("production");
console.log(stg);
console.log(prd);

//startswith, endswith()
let starting = url.startsWith("https");
let start1 = url.startsWith("http:");
let ending = url.endsWith("true")
console.log(starting);
console.log(start1);
console.log(ending);

//indexof , lastIndexof()
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

