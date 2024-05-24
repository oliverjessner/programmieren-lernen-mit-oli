function dynamicCurry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

function sum(a, b, c, d) {
    return a + b + c + d;
}

const curriedAdd = dynamicCurry(sum);

console.log(curriedAdd(1, 2, 3, 4));
console.log(curriedAdd(1)(2)(3)(4));
console.log(curriedAdd(1, 2, 3)(4));
console.log(curriedAdd(1)(2, 3, 4));
console.log(curriedAdd(1, 2)(3, 4));
console.log(curriedAdd(1)(2, 3)(4));
console.log(curriedAdd(1, 2)(3)(4));
