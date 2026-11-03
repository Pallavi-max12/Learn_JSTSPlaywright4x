let str = 'Programming';
let result = '';

for (i=0; i<str.length; i++){
    let ch = str[i];

    if(!result.includes(ch)){
        result += ch;
    }
}
console.log(result);