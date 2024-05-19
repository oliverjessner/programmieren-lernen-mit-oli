function factorialAcc(n, accumulator = 1) {
    if (n === 0) {
        return accumulator;
    }
    return factorialAcc(n - 1, n * accumulator);
}

console.log(factorialAcc(1879900));
