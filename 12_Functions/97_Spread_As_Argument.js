
function adding(a,b,c) {
    return a+b+c;
}

let num = [1,2,3,5];
console.log(adding(...num));

//spread
function hasError(...codes){
    return codes.some(c => c>=401);
}

let responseCodes = [200,201,400];
let responseCodes1 = [200,401,201,500];
console.log(hasError(...responseCodes));
console.log(hasError(...responseCodes1));