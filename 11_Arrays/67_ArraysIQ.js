let browsers = ['Chrome','Safari','Firefox','Opera','Edge'];
//console.log(browsers.length);
//console.log(browsers);

//browsers.pop();
//console.log(browsers);

let removed = browsers.shift();
console.log(removed);

console.log(browsers);

for(i=0; i<browsers.length; i++){
    if(browsers[i] === 'Opera'){
        console.log("Automation doest support opera please remove");
        browsers.splice(i,1);
    }
}
console.log(browsers);
console.log(browsers.length);