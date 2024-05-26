function createCounter() {
    let count = 0;

    return function () {
        count += 1;
        return count;
    };
}
const counter = createCounter();
const counter2 = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter2());
