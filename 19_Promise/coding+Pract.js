function checkLogin(){

return new Promise( (resolve,reject) =>{
    let loginSuccess = true;
    if(loginSuccess){
        resolve("Login Successful");
    }else{
        reject("Login Failed");
    }

});
}
checkLogin().then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});