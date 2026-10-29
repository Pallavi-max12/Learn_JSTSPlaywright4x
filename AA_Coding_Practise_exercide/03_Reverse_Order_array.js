let arr = [1,2,3,4,5];
let arr1 = [...arr];
let arr2 = [2,4,6,8];
let copy = Array.from(arr2);
let result = "";
let result1 = "";

// Using sort method
// console.log("using sort method");
// let desc = arr1.sort((a,b) => b-a);
// console.log(desc);

//Using reverse method
// console.log("Using Reverse method");
// let reverseArray = copy.reverse();
// console.log(reverseArray);
// console.log(arr2);
// console.log(copy);

//using for loop
for (i= arr.length-1; i>=0; i--){
    result += arr[i]+ " ";
     console.log(result);
}
//console.log(result);