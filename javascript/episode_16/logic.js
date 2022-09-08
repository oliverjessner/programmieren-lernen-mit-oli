'use strict';
const car = {
    color: 'blue',
    brand: 'tesla',
    model: 'x',
    battery: '100 kwh',
    related: {
        model: 'S',
    }
};
const cloneCar = {
    ...car,
    color: 'red',
    related: {
        model: 3
    }
};

console.log(cloneCar);
console.log(car);