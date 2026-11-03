let string = 'Hello World'.toLowerCase();
let n = string.length;
let vowels = 'aeiou';
let countV = 0;
let countC = 0;



for (i=0; i<n; i++) {
    let ch = string[i];
 if (ch >= 'a' && ch <= 'z') {
    if(vowels.includes(ch)){
        countV++ ;
    }else {
    countC++ ;
 }

 } 

}

console.log("Vowels: ",countV);
console.log("Consonants: ",countC);