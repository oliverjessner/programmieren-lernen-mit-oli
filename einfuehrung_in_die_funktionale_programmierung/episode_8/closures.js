function createMultiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(10));
console.log(double(5));
console.log(double(100));
console.log(triple(10), triple(5), triple(100));
