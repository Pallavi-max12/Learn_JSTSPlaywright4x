let n = [10,1,21,2];
console.log(n);
n.sort((a,b) => a-b);
console.log(n);

let desc = n.sort((a,b)=> b-a);
console.log(desc);

let fruits = ['cherry','guava','apple','Banana','Cherry'];
fruits.sort((a,b) => a.localeCompare(b));
console.log(fruits);

