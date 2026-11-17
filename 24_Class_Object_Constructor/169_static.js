class TestRunner{
    static totalTests = 0;
    static passCount = 0;
    constructor(name,passed){
        this.name = name;
        TestRunner.totalTests++;
        if(passed){
            TestRunner.passCount++;
        }
    }
}

let t1 = new TestRunner("Login Test",true);
let t2 = new TestRunner("Signup Test",false);
let t3 = new TestRunner("dashboard Test",true);
let t4 = new TestRunner("Support Test",true);
//let t5 = new TestRunner("Login Test",true);
console.log("Total Tests Run: ",TestRunner.totalTests);
console.log("Total Tests Passed: ",TestRunner.passCount);
console.log("Total Tests Failed: ",TestRunner.totalTests-TestRunner.passCount);
console.log(t1.name);