// ============================================================
// Topic: All Number Types in JavaScript
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
*/

//===========================================    
// Integers Literals
//===========================================

// Decimal (base 10)
let decimal = 42;
console.log(decimal); // Output: 42

// Binary (base 2) - prefix with 0b or 0B
let binary = 0b101010; // 42 in decimal
console.log(binary); // Output: 42

// Octal (base 8) - prefix with 0o or 0O
let octal = 0o52; // 42 in decimal
console.log(octal); // Output: 42

// Hexadecimal (base 16) - prefix with 0x or 0X
let hexadecimal = 0x2A; // 42 in decimal
console.log(hexadecimal); // Output: 42 

//===========================================    
// Floating Point Literals
//===========================================   
let float1 = 3.14; // Decimal floating point
console.log(float1); // Output: 3.14

let float2 = -0.5; // Negative floating point
console.log(float2); // Output: -0.5

// exponential notation
let float3 = 1.5e2; // 1.5 * 10^2 = 150
console.log(float3); // Output: 150

let float4 = 2.5e-3; // 2.5 * 10^-3 = 0.0025
console.log(float4); // Output: 0.0025

let float5 = 0.000000123; // Small number
console.log(float5); // Output: 1.23e-7

let float6 = 2E10; // 2 * 10^10 = 20000000000
console.log(float6); // Output: 20000000000
