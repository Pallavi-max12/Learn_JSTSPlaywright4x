// every vs some

// every — ALL must pass
console.log([80,90,100,79].every(i => i>=70));
console.log("every output", [45,85,70].every(i => i>65));

//some  at least one must pass
console.log("some output", [80,90,100,55].some(i => i>=70));
console.log("some output", [10,25,35,55].some(i => i>=70));


