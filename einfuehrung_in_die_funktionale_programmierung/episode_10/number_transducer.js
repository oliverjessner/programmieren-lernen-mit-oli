const numbers = [...new Array(10_000_000)].map((_, i) => i);
const filterEven = num => num % 2 === 0;
const half = num => num / 2;

function transducer(filterFn, mapFn) {
    return function reducer(result, input) {
        if (filterFn(input)) {
            result.push(mapFn(input));
        }

        return result;
    };
}

console.time('transduce');
const transResult = numbers.reduce(transducer(filterEven, half), []);
console.timeEnd('transduce');

console.time('none transduce');
const result = numbers.filter(filterEven).map(half);
console.timeEnd('none transduce');
