// Adding and removing elements from an array

let fruits = ["apple", "banana", "grapes"];
console.log("Original array:", fruits);

// Add at the end
fruits.push("mango");
console.log("After push:", fruits);

// Remove from the end
fruits.pop();
console.log("After pop:", fruits);

// Add at the beginning
fruits.unshift("orange");
console.log("After unshift:", fruits);

// Remove from the beginning
fruits.shift();
console.log("After shift:", fruits);

// Insert or remove in the middle
fruits.splice(1, 0, "kiwi");
console.log("After splice insert:", fruits);

fruits.splice(2, 1);
console.log("After splice remove:", fruits);

// Copy a portion of the array
let sliced = fruits.slice(0, 2);
console.log("Sliced array:", sliced);
