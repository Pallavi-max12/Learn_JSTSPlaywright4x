let getResult = (score) => {
    let result = (score >70)? "PASS": "FAIL";
    return `The score is ${score} and the result is ${result}`;
}

console.log(getResult(45));
console.log(getResult(80));