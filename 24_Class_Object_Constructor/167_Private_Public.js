class Browser{

    constructor (name){
        this.name = name;
        this.isOpen = true;
        console.log(name,"Browser is Opened");
    }
    startBrowser(){
        console.log(this.name, "Browser is Started");
    }
    closeBrowser(){
        this.isOpen = false;
        console.log(this.name,"Browser is Closed");
    }

}

let chrome = new Browser("Chrome");
chrome.startBrowser();
chrome.closeBrowser();
let ff = new Browser("Firefox");
ff.startBrowser();
ff.closeBrowser();