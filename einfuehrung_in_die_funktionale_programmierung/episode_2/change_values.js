function deepFreeze(object) {
    for (const temp of Object.values(object)) {
        if ((temp && typeof temp === 'object') || typeof temp === 'function') {
            deepFreeze(temp);
        }
    }

    return Object.freeze(object);
}

const oliver = deepFreeze({
    name: 'oliver',
    age: 32,
    smartphone: {
        brand: 'Apple',
        name: 'iPhone',
    },
});

function rename(obj, newName) {
    const newObj = structuredClone(obj);

    return deepFreeze({
        ...newObj,
        name: newName,
    });
}

const bernhard = rename(oliver, 'bernhard');

console.log(oliver);
console.log(bernhard);
