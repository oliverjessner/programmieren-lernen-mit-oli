const human = Object.freeze({
    name: 'oliver',
    age: 32,
});

human.name = 'Bernhard';

console.log(human);
