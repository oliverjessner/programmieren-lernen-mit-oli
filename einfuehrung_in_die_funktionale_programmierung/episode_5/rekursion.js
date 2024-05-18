function factorialRecursive(number) {
    return number > 1 ? factorialRecursive(number - 1) * number : 1;
}

console.log(factorialRecursive(5));
console.log(factorialRecursive(8799));
