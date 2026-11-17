class Car{
    #engine;
    constructor(name,engine_name){
        this.name = name;
        this.#engine = engine_name;
    }
    getEngine(){
        return this.#engine;
    }
    setEngine(engine_name){
        this.#engine = engine_name;
    }
}

let Tesla = new Car("Tesla","Electric");
console.log(Tesla.name);
//console.log(Tesla.#engine);  // Error: Private field '#engine' must be declared in an enclosing class
console.log(Tesla.getEngine());
Tesla.setEngine("Electric V2");
console.log(Tesla.getEngine());