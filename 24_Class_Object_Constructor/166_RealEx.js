class TestCase{

    constructor(name_given,status_given,priority_given){
        this.name = name_given;
        this.status = status_given;
        this.priority = priority_given;

    }
    display(){
            console.log(this.name + "->" + this.status + "->" + this.priority);
        }

}
let loginTest_Ref = new TestCase("Login Test","Pass","High");
let signupTest_Ref = new TestCase("Signup Test","Fail","Medium");
loginTest_Ref.display();
signupTest_Ref.display();