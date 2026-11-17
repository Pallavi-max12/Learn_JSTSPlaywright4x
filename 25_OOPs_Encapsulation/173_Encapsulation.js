class Person{
    //hide variables
    #child1;
    #child2;
    constructor(name,child1,child2){
        this.name = name;
        this.#child1 = child1;
        this.#child2 = child2;
    }
    getChild(){
        return this.#child1;
        }
    setChild(changed_name){
        this.#child1 = changed_name;

    }
}

let p = new Person("Pallavi","Miti","Sumu");
//console.log(p.#child1);// Error, private field cannot be accessed outside the class
console.log(p.getChild()); // Output: Miti
p.setChild("Tejas Singh");
console.log(p.getChild()); // Output: Tejas Singh
console.log(p.name); // Output: Pallavi
p.name = "Pallavi Aditya";
console.log(p.name); // Output: Pallavi Aditya