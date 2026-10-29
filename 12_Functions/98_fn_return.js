function statusCode(code) {

    if(code >= 200 && code<  300){
        return "Success";
    }else if (code >= 400 && code < 500){
        return "Client Error";
    } else if (code >=500){
        return "Server Error";
    }
}

console.log(statusCode(201));
console.log(statusCode(404));
console.log(statusCode(500));