function createCounter(name) {
    let count = 0;

    return {
        count: function () {
            count += 1;
            return `${name}: ${count}`;
        },
    };
}
const counter = createCounter('counter');
const counter2 = createCounter('counter2');

console.log(counter.count());
console.log(counter.count());
console.log(counter.count());
console.log(counter2.count());
