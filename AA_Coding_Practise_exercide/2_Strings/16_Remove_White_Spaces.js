let str1 = ' Geeks for Geeks ';
let result = "";
for (i = 0; i < str1.length; i++){
    let ch = str1[i];
    if (ch !== " ") {
        result += ch;
    }
}

console.log(result);