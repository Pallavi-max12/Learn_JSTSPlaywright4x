let arr = [2, 4, 6, 8, 10, 12, 14];
console.log(arr);
// slice(start, end) — returns new array, 
// does NOT mutate actual -> ( start, end-1) = index = 0
// Don't give the end, it will automatically 
// take from start to end.

console.log(arr.slice(2,5));
console.log(arr.length)
console.log(arr.slice(3));

console.log("-2 index", arr.slice(-2));
console.log("-6 index", arr.slice(-6));
console.log("-5,-2 index", arr.slice(-5,-2));
console.log("-7,-5 index", arr.slice(-7,-5));
console.log("-1 index", arr.slice(-1));