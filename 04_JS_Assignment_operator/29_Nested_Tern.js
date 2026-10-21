let statusCode = 200;
let category = 
statusCode <300 ? "Success ✅" :
statusCode <400 ? "Redirection 🔄" :
statusCode <500 ? "Client Error ❌" : "Server Error 💥" ;
console.log(`Status Code: ${statusCode} — Category: ${category}`);

