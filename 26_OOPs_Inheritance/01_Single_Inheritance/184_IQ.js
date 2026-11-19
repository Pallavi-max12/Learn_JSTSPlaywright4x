class BaseTest{
    constructor(){
        console.log("Parent")
}
setUp(){
    console.log("Base: open Browser")
}
tearDown(){
    console.log("Base: close Browser")
}
}
class UITest extends BaseTest{
    constructor(){
         console.log("Child constructor");
         super();
    }
    setUp(){
        super.setUp();
        console.log("UI: Maximize Window");
    }
    tearDown(){
        console.log("UI:take screenshot");
        super.tearDown();
    }
}
let b1 = new UITest();
b1.setUp();
b1.tearDown();
