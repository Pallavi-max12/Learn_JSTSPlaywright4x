//Call by reference, one object, 2 names.
let a = {status: "PASS"};
let b = a ;
b.status = "Fail";
console.log(a.status);
console.log(b.status);

let replace = "banana".replace(/a/g, "P");
console.log(replace);
let rpl = "Banana".replaceAll("n", "O");
console.log(rpl);
