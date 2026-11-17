class BasePage{
    constructor(page_name)
    {
        this.page_name = page_name;
    }
    openPage(){
        console.log("Opening the page: " + this.page_name);
    }
    closePage(){
        console.log("Closing the page: " + this.page_name);
    }
}
class LoginPage extends BasePage{}

let page = new LoginPage("Login Page");
page.openPage();
page.closePage();