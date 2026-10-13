// number separators (underscore) - introduced in ES2021
let million = 1_000_000;
console.log(million); // Output: 1000000
let binarySep = 0b1010_1010; // Binary with separator
console.log(binarySep); // Output: 170
let hexSep = 0xFF_FF; // Hexadecimal with separator
console.log(hexSep); // Output: 65535

//===========================================
// BigInt Literals- for arbitrarily Large integers
//===========================================

// BigInt literals are created by appending 'n' to the end of an integer
let bigInt1 = 1234567890123456789012345678901234567890n;
console.log(bigInt1); // Output: 1234567890123456789012345678901234567890n      

let big2 = BigInt("1234567890123456789012345678901234567890");
console.log(big2); // Output: 1234567890123456789012345678901234567890n

let bigfromNum = BigInt(42);
console.log(bigfromNum); // Output: 42n
console.log(typeof bigfromNum); // Output: bigint
console.log(typeof bigInt1); // Output: bigint