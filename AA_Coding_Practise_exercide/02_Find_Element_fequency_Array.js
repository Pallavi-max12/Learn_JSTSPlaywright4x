let arr1 = [1,2,1,3,2];
let count =0;
for (i=0; i<arr1.length; i++){
    console.log("The outer loop:", arr1[i]);
    for(j=1; j<arr1.length; j++){
        console.log("The inner loop:", arr1[j]);
        if (arr1[i]===arr1[j]){
            count = count+1
            console.log("The count:", count);
        }
    }
}