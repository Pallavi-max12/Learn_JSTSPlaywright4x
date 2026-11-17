let myPromise = new Promise((resolve, reject) => {
    let loginSuccess = false;

    if (loginSuccess) {
        resolve("Login Successful");
    } else {
        reject("Login Failed");
    }
});

myPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise has been settled.");
});