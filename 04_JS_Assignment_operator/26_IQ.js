let isCI = "true";
let browserMode = (isCI !== true)? "headless" : "headed" ;
console.log("Launching browser in", browserMode, "mode"); // Output: headless
//console.log(isCI !== "true") ;