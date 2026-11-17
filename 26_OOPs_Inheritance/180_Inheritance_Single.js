class Father{
    eat(){
        console.log("I am eating");
    }   
}
class Son extends Father{
    walk(){
        console.log("I am walking");        
    }
}
const s = new Son();
s.eat();
s.walk();
const f = new Father();
f.eat();
//f.walk();  // Error, walk is not defined in Father class
