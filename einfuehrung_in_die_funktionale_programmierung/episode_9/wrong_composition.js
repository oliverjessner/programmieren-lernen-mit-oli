function sum(a, b) {
    return a + b;
}

function square(x) {
    return x * x;
}

function compose(a, b) {
    const x = square(a);
    const y = square(b);

    return sum(x, y);
}

console.log(compose(10, 10));
