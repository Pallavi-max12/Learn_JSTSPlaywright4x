class TestResult {
    static totalDuration = 0; // static variable

    constructor(testName, duration) {
        this.testName = testName;
        this.duration = duration;

        TestResult.totalDuration += duration;
    }
}

// Input
const n = 3;

const tests = [
    ["loginTest", 1200],
    ["checkoutTest", 3400],
    ["searchTest", 800]
];

let slowest = null;

for (let i = 0; i < n; i++) {
    const test = new TestResult(tests[i][0], tests[i][1]);

    if (slowest === null || test.duration > slowest.duration) {
        slowest = test;
    }
}

console.log(`Total: ${TestResult.totalDuration} ms`);
console.log(`Slowest: ${slowest.testName}`);