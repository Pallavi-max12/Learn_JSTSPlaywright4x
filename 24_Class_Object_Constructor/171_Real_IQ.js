class Student {
    static collegeName = "PW AT Batch";
    static mentorName = "prrammoddutta";


    constructor(name,score) {
        this.name = name;
        this.score = score;
    }
    static display() {
        console.log(Student.mentorName + " is the mentor of " + Student.collegeName);
    }
    nsf(){
        console.log(this.name);
        console.log(this.name + " are part of the ", Student.collegeName + this.score)
    }
}
let amit = new Student("amit",80);
let miti_jha = new Student("miti_jha",91);
let sumu = new Student("sumu",87);
let padmini = new Student("padmini",99);
console.log(Student.collegeName);
console.log(amit.name);
console.log(miti_jha.name);
console.log(sumu.name);
console.log(padmini.name);
Student.display();
amit.nsf();
miti_jha.nsf();