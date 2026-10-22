let Original = [1,2,3,4];
let copy = [...Original];
//console.log(Original);
//console.log(copy);

let copy1 = Original.slice();
console.log(copy1);
copy1.push(10);
copy1.push(11);
console.log(Original);
console.log(copy);
console.log(copy1);

//deep_copy_array

let deep_copy_array = Original;
deep_copy_array.push(99);
console.log(Original);
console.log(deep_copy_array);
