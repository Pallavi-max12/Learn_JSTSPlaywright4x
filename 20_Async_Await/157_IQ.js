console.log("A");
async function test() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
    console.log("D");
}
test();
console.log("E");
console.log("F");