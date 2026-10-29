function validateStatusCode(status){
    if(status >=200 && status<= 300){
        console.log("Request is fine!");
        return `${status}`
    }
}

const validateStatusCode_Exp = function (status){
    if (status >=200 && status<= 300){
        console.log("Request is success");
    }
}

const validateStatusCode_Arrow = (status1) => {
    if(status1 >=200 && status1<= 300){
        console.log("Reuest is Arrow");
    }
}

console.log(validateStatusCode(201));
console.log(validateStatusCode_Exp(200));
console.log(validateStatusCode_Arrow(204));