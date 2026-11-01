const user = {
    name: "Pramod",
    age: "60",
    Education: "B.Tech",

    printName(){
        return this.name;
    },
    printDetail(){
        return `Hello I am ${this.name}, I am ${this.age} years old. I am a ${this.Education} graduate` ;
    }
}

console.log(user.printName());
console.log(user.printDetail());