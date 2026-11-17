let a = 10;
class TestRunner {
    static totalTests = 0;
    static passCount = 0;
    constructor(name, passed) {
        this.name = name;
        TestRunner.totalTests++;
        if (passed) {
            TestRunner.passCount++;
        }
        console.log(a);
    }
    //non-static function
    pall_fn() {
        return this.name;
    }
    static summary_fn() {
        return TestRunner.passCount + "/" + TestRunner.totalTests + " passed";
    }

}

let t1 = new TestRunner("Login Test", true);
console.log(t1.pall_fn());
new TestRunner("Signup Test", false);
//console.log(t1.summary_fn()); // Error, static function cannot be called by object reference
console.log(TestRunner.summary_fn());