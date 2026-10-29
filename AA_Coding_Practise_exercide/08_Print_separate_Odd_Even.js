let num = [1,2,3,4];
let n = num.length;
let resultE = "";
let resultO = "";

for(i=0; i<n; i++){
    if(num[i]%2 ===0){
         resultE  += num[i] + " ";
        
    } else{
        resultO += num[i] + " ";
    }
           
}
console.log("Even Numbers:",resultE);
console.log("Odd Numbers:",resultO);