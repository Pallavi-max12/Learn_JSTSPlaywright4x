class Bug{
    constructor(title,severity){
        this.title = title;
        this.severity = severity;
    }
    dispplay(){
        console.log(this.title + " has severity of " + this.severity);
    }
}
let b1 = new Bug("Login Issue","High");
let b2 = new Bug("Signup Issue","Medium");
let b3 = new Bug("Dashboard Issue","Low");
b1.dispplay();
b2.dispplay();
b3.dispplay();