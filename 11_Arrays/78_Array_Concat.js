let a= [1,2];
let b= [3,4];
let c= a.concat(b);
console.log(c);
d = [5,6];
let e = c.concat(d);
console.log(e);
let f= [10,11];

//modern way of concatenation (...)
let con = [ ...e,...f];
console.log(JSON.stringify(con));
//console.log(con.join(", "));