function saveRecord()
{
    return new Promise((resolve,reject)=>{
        resolve("Record saved successfully");
    }
)};

async function verifyRecord(){
    try{
        let result = await saveRecord();
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}
verifyRecord();
