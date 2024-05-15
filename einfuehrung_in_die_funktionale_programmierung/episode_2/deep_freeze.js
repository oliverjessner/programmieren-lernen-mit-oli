function deepFreeze(object) {
    for (const temp of Object.values(object)) {
        if ((temp && typeof temp === 'object') || typeof temp === 'function') {
            deepFreeze(temp);
        }
    }

    return Object.freeze(object);
}

const human = deepFreeze({
    name: 'oliver',
    age: 32,
    smartphone: {
        brand: 'Apple',
        name: 'iPhone',
    },
});

human.smartphone.brand = 'Samsung';
