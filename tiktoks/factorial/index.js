function factorialRecursive(number) {
    return number > 1 ? number * factorialRecursive(number - 1) : 1;
}

function factorialIterative(number) {
    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}

// 5! = 1 * 2 * 3 * 4 * 5 = 120
console.log(factorialIterative(4));
console.log(factorialRecursive(4));

/* 
n   n!
0   1
1   1
2   2
3   6
4   24
5   120
6   720
7   5 040
8   40 320
9   362 880
10  3 628 800
11  39 916 800
12  479 001 600
13  6 227 020 800
14  87 178 291 200
15  1 307 674 368 000
*/
