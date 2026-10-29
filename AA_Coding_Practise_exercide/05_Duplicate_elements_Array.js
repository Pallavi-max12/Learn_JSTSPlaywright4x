let array = [1, 2, 3, 5, 4, 6,3,2,4];
let duplicates = [];

for (let i =0; i<array.length; i++){
    for (let j=i+1; j< array.length; j++){
        if(array[i] === array[j] && !duplicates.includes(array[i])){
            duplicates.push(array[i]);
        }
    }
}
if(duplicates.length > 0)
    {
    console.log(duplicates)
} else{
console.log("No duplicates found");
}
