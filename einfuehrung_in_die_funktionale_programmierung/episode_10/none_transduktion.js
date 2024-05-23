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
const restaurantsNearMe = restaurants.filter(isNearMe).map(extractName);
console.log(restaurantsNearMe);
