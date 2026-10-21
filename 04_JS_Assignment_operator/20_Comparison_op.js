// Rule of thumb
// == is for loose comparison (does type coercion)
// === is for strict comparison (does not do type coercion, what you usually want to use)

console.log("" == 0); // Output: true ("" is coerced to Number->0)
console.log("0"== 0); // Output: true ("0" is coerced to Number->0)
console.log("" == "0"); // Output: false (no type coercion, both are strings)
// transitivity broken

// === fixes it
console.log("" === 0); // Output: false (no type coercion, one is string, other is number)
console.log("0" === 0); // Output: false (no type coercion, one is string, other is number)
console.log("" === "0"); // Output: false (no type coercion, both are strings)
