function startBrowser(){
    let name = "Edge";

    function installBrowser(){
        console.log(name);
        //return true;
    }
    return installBrowser();
}

const runTc = startBrowser();
console.log(runTc);