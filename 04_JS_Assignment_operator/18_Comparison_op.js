// Comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison.

// == > loose comparioson, checks if the values are equal (type coercion is performed)

console.log(5 == 5); // Output: true
console.log(5 == '5'); // Output: true (type coercion is performed)
console.log(5 == 10); // Output: false
console.log(5 == '10'); // Output: false
console.log(5 == '5.0'); // Output: true (type coercion is performed)

// === > strict comparison, checks if the values and datatypes are equal (no type coercion is performed)
console.log(5 === 5); // Output: true
console.log(5 === '5'); // Output: false (no type coercion is performed)
console.log(5 === 10); // Output: false
console.log(5 === '10');