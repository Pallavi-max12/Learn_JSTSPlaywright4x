class credentials{
    #apiKey;
    constructor(user,key){
        this.user = user;
        this.#apiKey = key;
    }
    getApiKey(){
        return this.#apiKey;
    }
}
let cred = new credentials("Pallavi","secre_1234");
console.log(cred.user);
console.log(cred.getApiKey());
//console.log(cred.#apiKey);  // Error, private field cannot be accessed outside the class