function saveRecord(){
    return new Promise((resolve,reject)=>{
        let recordSaved= false;
        if(recordSaved){
            resolve("Record Saved Successfully");
        }else{
            reject("Record saved Failed");
        }
    });
}
saveRecord().then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
})