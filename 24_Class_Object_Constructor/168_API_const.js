class APIClient{

    constructor(baseURL){
        this.baseURL = baseURL;
    }

    fullURL(path){
        return `${this.baseURL}/${path}`;
    }
}
let staging = new APIClient("https://staging.api.com");
console.log(staging.fullURL("users"));

let production = new APIClient("https://production.api.com");
console.log(production.fullURL("prod/users"));