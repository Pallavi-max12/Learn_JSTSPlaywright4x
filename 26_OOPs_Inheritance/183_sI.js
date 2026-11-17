class BaseTest{
    setUp(){
        console.log("Base: open Browser")
    }
    }
    class APITest extends BaseTest{
        setUp(){
            console.log("API: open Browser")
        }
    }

    let test = new APITest();
    test.setUp();