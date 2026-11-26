interface Calculator{
    add(a:number,b:number): number;
    sub(a:number,b:number): number;
}

const calC: Calculator={
    add: (a,b) => a+b,
    sub: (a,b) => a-b,

}
console.log(calC.add(100,200));
