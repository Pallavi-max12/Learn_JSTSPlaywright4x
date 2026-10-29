let arr =[12,34,10,1];
arr.sort((a,b) => a-b);
let smallest = arr[0];
let secondSmallest = null;

for(i=1; i<arr.length; i++){
    if(arr[i] !== smallest){
        secondSmallest = arr[i];
        break;
    }
}
// Print the result
if (secondSmallest !== null){
    console.log(secondSmallest);
}else{
    console.log("No second smallest found!");
}