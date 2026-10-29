function getStatusCode(){
    console.log(status_code); //hoisted and var status_code is created and initialized with undefied.
    var status_code = 200;
    console.log(status_code);
}
getStatusCode();