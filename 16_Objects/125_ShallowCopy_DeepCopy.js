//1. Call By reference -one object,  2 names

let a = { status1: "PASS"}
let b = a;
b.status1 = "fail";
console.log(a.status1);

//Shallow copy (...spread method), new object but inner object is shared.
console.log("_____________________**___________________")
let user1 = {
    name: "Pallavi",
    Address:{
        City: "Gorakhpur"
    }
};

let copy1 = {...user1};
copy1.Address.City = "Bangalore";
copy1.name = "Aditya";

console.log(user1);
console.log(copy1);

//Deep Copy, structuredClone -- everything is new
let user2 = { name: "Pramod", address: { city: "Delhi" } };
let copy2 = structuredClone(user2);
copy2.name = "Amit";
copy2.address.city = "Mumbai";
console.log(user2.name);          // Pramod  (safe)
console.log(user2.address.city);