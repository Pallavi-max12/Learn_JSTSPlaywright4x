let environment = "production";
let baseUrl = (environment === "staging") ? "https://api.production.com": "https://api.staging.com" ;
console.log(baseUrl); // Output: https://api.staging.com

