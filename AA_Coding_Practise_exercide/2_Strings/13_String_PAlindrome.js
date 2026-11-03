let str = 'racecar'.toLowerCase();
let reverse = "";

for (i=str.length-1; i>=0; i--){
    reverse += str[i];
}

if (str === reverse){
    console.log("YES");
}else{
    console.log("NO");
}