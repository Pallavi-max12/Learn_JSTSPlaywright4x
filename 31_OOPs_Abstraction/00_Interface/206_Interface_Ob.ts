interface BasePage{
    url: string
    title: string
}
interface LoginPage extends BasePage{
    usernameSelector: String
    passwordSelector: String
    loginButtonSelector: String
}
interface FreeTrialPage extends BasePage{
    usernameSelector:String
    submitButtonSelector:String
}

const loginPage: LoginPage = {
    url:"/login",
    title:"Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#login-btn"
}
let freeTrialPage: FreeTrialPage = {
    url: "/free-trial",
    title: "Free Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit",
}

console.log("URL:",loginPage.url);
console.log("Free Trial URL:", freeTrialPage.url);