const human = Object.freeze({
    name: 'oliver',
    age: 32,
    smartphone: Object.freeze({
        brand: 'Apple',
        name: 'iPhone',
    }),
});

human.smartphone.brand = 'Samsung';

console.log(human);
