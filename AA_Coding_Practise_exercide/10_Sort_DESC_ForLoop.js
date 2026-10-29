let num = [10,56,38,100,90];
let n = num.length;

for(i=0; i<n; i++){
    for(j=0; j<n-i-1; j++){
        if(num[j+1] > num[j]){
            let temp = num[j+1];
            num[j+1] = num[j];
            num[j] = temp;
                    }
    }
}
console.log(num);