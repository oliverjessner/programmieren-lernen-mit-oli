function fibonacci(n) {
    const fibSequence = [0, 1];
    let currentValue = 1;
    let previousValue = 0;

    if (n <= 2) {
        return fibSequence;
    }

    let iterationsCounter = n - 1;

    while (iterationsCounter) {
        currentValue += previousValue;
        previousValue = currentValue - previousValue;

        fibSequence.push(currentValue);

        iterationsCounter -= 1;
    }

    return fibSequence;
}

console.log(fibonacci(15));
