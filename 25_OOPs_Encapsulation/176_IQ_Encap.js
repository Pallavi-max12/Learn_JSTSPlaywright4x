class TestCase{
    #status = 'No run';
    static #count = 0;
    constructor(name){
        this.name = name;
        TestCase.#count++;
    }
    run(pass){
        this.#status = pass ? 'Passed' : 'Failed';
    }
    getStatus(){
        return this.#status;
    }
    static getCount(){ return this.#count; }
    static setCount(count){ this.#count = count; }
}
const tc = new TestCase("Login Test");
tc.run(true);
console.log(tc.name, tc.getStatus());
//const tc2 = new TestCase("Signup Test");
new TestCase("Login Test");
new TestCase("Login Test");
new TestCase("Login Test");
console.log("Total Test Cases: ", TestCase.getCount());