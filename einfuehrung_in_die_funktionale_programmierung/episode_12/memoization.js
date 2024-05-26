function memoization(fn) {
    const cache = {};

    return function (...args) {
        const key = args.toString();

        if (!cache[key]) {
            cache[key] = fn(args);
        }

        return cache[key];
    };
}

function factorialRecursive(number) {
    return number > 1 ? factorialRecursive(number - 1) * number : 1;
}

const factorial = memoization(factorialRecursive);

console.time('first');
const first = factorial(8790);
console.timeEnd('first');

console.time('second');
const second = factorial(8790);
console.timeEnd('second', second);
