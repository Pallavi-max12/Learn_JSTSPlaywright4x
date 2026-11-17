let apiCall = new Promise(function(resolve,reject){
    //resolve({ status: 200});
    reject("API error");

})


apiCall.then(function(data){
    console.log("This is resolve block", data);
}).catch(function(error){
    console.log("Error",error);
}).finally(function(){
    // Always Executed!
     console.log("I will be executed anyhow!!");
});