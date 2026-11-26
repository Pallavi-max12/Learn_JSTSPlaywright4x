//Readonly

interface Point{
    readonly x:number;
    readonly y:number;
}

const point: Point={
    x:10,
    y:11,
}
console.log(point);

//point.x = 25;
//console.log(point);