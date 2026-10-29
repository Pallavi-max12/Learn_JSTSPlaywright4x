let url = "https://www.google.com";
let status = 'pass';
let message = `The test completed in ${320} ms`;
console.log(message);

//single quotes
let a = 'Hello';
//double quotes
let b ="World!";

// Template literals (backticks) — allows expressions & multiline
let name = "Alice";
let msg = `Hello, ${name}!, 2+2 = ${2+2}` ;
console.log(msg);

// Multiline
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;

console.log(report);
console.log(String(200));