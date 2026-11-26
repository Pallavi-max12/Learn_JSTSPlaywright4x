function getString(name:String): String{
    return "Amit";
}

getString("Pallavi");

function getFirstResult<T>(result:T[]):T{
    return result[2]!;
}

let firstNumber = getFirstResult <number>([200,300,400]);
let firstString = getFirstResult<String>(["Login","SignUp","Cart"]);
let firstBoolean = getFirstResult<boolean>([true,false,true]);

console.log("First code:", firstNumber);
console.log("First test:", firstString);
console.log("First test:", firstBoolean);