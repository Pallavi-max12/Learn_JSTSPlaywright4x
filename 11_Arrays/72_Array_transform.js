let scores = [30,50,75,80,65,72];
let grades = scores.map(i => i>60? "Pass": "Fail" );
console.log("map results: ", grades);
// map in javascript transforms the array

//Filter in javascript return the elements of array that meets some specified consitions
let passing = scores.filter(s => s>60);
console.log("Filter results: ", passing);