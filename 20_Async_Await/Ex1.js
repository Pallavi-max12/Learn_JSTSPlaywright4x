function saveCustomer(){
    return new Promise((resolve,reject)=> {
        let customerSaved = true;
        if(customerSaved){
            resolve("Customer saved succesfully");
        }else{
            reject("Customer save failed");
        }

    }
)
}
async function displayResult() {
    try{
        let result = await saveCustomer();
        console.log(result);
    }
    catch(error) {
        console.log(error);

    }
    
}
displayResult();