let tests = ["login","checkout","search"];

for (i=0; i<tests.length; i++){
    console.log(i,tests[i]);
}

console.log("--------------for of-----");
for (let test of tests){
    console.log(test);
}
console.log("--------ForEach loop---------");

tests.forEach((test,index) =>  {
    console.log(`${test}: ${index}`);
});

//entries() - index+ value
console.log("=========entries()");
for(let[i,test] of tests.entries()){
    console.log(i,test);
}

console.log("----------in---------")
let students = ['Pallavi','Garima','Tejas','Veer'];
for (let student in students){
    console.log(student, "->", students[student]);
}