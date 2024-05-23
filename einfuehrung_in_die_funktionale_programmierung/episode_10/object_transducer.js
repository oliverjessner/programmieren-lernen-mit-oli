const restaurants = [
    {
        id: 1,
        name: 'The Green Garden',
        nearMe: true,
    },
    {
        id: 2,
        name: 'LOsteria',
        nearMe: false,
    },
    {
        id: 3,
        name: 'Nagano',
        nearMe: true,
    },
    {
        id: 4,
        name: 'Ludwig Burger',
        nearMe: false,
    },
];
const isNearMe = ({ nearMe }) => nearMe;
const extractName = ({ name }) => name;

function transducer(filterFn, mapFn) {
    return function reducer(result, input) {
        if (filterFn(input)) {
            result.push(mapFn(input));
        }

        return result;
    };
}

console.time('transduce');
const restaurantsNearMe = restaurants.reduce(transducer(isNearMe, extractName), []);
console.timeEnd('transduce');
console.log(restaurantsNearMe);

console.time('none transduce');
const n = restaurants.filter(isNearMe).map(extractName);
console.timeEnd('none transduce');
