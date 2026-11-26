//Interface used in API testing

interface APIResponse{
    statusCode:number;
    body?:String;
    headers?:Object;
    responseTime:number;

}
const responseDataGET: APIResponse = {
    statusCode:200,
    responseTime: 200
}
console.log(responseDataGET);
const responseDataPOST: APIResponse = {
    statusCode:200,
    body : "{'name':'pramod'}",
    responseTime: 200,
    headers : {}
}
console.log(responseDataPOST);