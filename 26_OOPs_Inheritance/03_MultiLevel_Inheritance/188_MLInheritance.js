// Grandfather -> Father -> Son
class BasePage{
    constructor(name){
        this.name = name;
    }
    open(){
        console.log("[Open]", this.name);
    }
}
class AuthPage extends BasePage{
    login(user){
        console.log("[Login]", user);
    }
}
class AdminPage extends AuthPage{
    constructor(){
        super("Admin Panel");
    }
    manageUsers(){
        console.log("[Admin] managing users");
    }
}
let admin = new AdminPage();
admin.open();
admin.login("superadmin");
admin.manageUsers();