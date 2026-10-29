let arry = [5,3,8,1];

for(i=0; i<arry.length; i++){
    for(j=0; j< arry.length-i-1; j++){
        if (arry[j]> arry[j+1]){
           let temp = arry[j];
            arry[j] = arry[j+1];
            arry[j+1] = temp;
        }
    }
}
console.log(arry);