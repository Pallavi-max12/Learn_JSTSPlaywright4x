interface Excetable{
    name:string;
    run():void;
    getStatus():string;
}

class TestCase implements Excetable{
    name: string;
    constructor(name:string){
        this.name=name;
    }
    run(): void {
        console.log("[Run]", this.name);
    }
    getStatus(): string {
        return "Pass";  
    }
}
let ob1 = new TestCase("Verify Checkout functionality");
//console.log(ob1);
console.log(ob1.name);
console.log(ob1.run());
console.log(ob1.getStatus());
