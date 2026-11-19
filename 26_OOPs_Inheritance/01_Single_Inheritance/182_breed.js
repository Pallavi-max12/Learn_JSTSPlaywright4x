class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(this.name + " is eating");
    }
    sleep(){
        console.log(this.name + " is sleeping");    
    }
    foo(){
        console.log("I am foo method of Animal class");
    }
}
class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    bark(){
        super.foo();
        console.log(this.name + " is barking");
    }
}
let dog1 = new Dog("Rex", "Labrador");
dog1.eat();
dog1.sleep();
dog1.bark();
console.log(dog1.name);
console.log(dog1.breed);