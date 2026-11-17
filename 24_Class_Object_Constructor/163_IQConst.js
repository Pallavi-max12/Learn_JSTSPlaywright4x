class Car{
    // constructor

    constructor(assigned_name){
        this.name = assigned_name;
    }
}

let hyundai_i10 = new Car("Hyundai i10");
console.log(hyundai_i10.name);

let nexon = new Car("Tata Nexon");
console.log(nexon.name);

const i11 = new Car("i11");     // constructor runs → "i10"
const Nexon = new Car("Nexon");
console.log(i11.name);
console.log(Nexon.name);