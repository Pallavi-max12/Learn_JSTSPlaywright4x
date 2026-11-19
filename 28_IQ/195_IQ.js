class Counter{
    constructor(){
        this.Count  = 0;
    }
    increement(){
        this.Count++;
        return this;
    }
    display(){
        console.log("Count:" + this.Count);
        return this;
    }
}

new Counter().increement().increement().increement().display();