// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorialIterative(number) {
    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log(factorialIterative(5));
