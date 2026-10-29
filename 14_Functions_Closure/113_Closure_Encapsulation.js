function createUser(name){
    let secret = '1234';
    return {
        getName: () => name,
        getSecret: () => secret
    };
}
const user = createUser("Pramod");
console.log(user.getName());
console.log(user.getSecret());
console.log(secret);  // Error