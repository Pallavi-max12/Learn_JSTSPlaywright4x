let nums = [10,25,30,45];
let results = nums.find(temp => temp>20);
console.log(results);

//findIndex
let index = nums.findIndex(n=> n>25);
console.log(index);

let LastI = nums.findLast(n=> n>20);
console.log(LastI);

let Lastindx = nums.findLastIndex(n=> n>20);
console.log(Lastindx);