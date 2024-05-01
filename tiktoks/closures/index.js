function concat(first) {
    // complex

    return function inner(second) {
        return `${first} ${second}`;
    };
}

const greeter = concat('Hello');

console.log(greeter('Oli'));
console.log(greeter('Boris'));
console.log(greeter('Berni'));
