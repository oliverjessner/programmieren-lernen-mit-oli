function currying(fn, ...outerArgs) {
    return function (...innerArgs) {
        return fn(...outerArgs, ...innerArgs);
    };
}

function sum(a, b, c, d) {
    return a + b + c + d;
}

const _add1 = currying(sum, 1);
const _add2 = _add1(2);
const _add3 = _add2(3);
const _add4 = _add3(4);
