const getResult = (score) => {
    if(score>70) return "PASS";
    return "FAIL"
}

console.log("The Result is: ", getResult(80));
console.log("The Result is: ", getResult(55));