const people = [
    { name: 'Oli', age: 32 },
    { name: 'Felicitas', age: 13 },
    { name: 'Boris', age: 41 },
    { name: 'Conny', age: 27 },
];
const sortedNames = people.toSorted(function (a, b) {
    return a.name.localeCompare(b.name);
});
const sortedAges = people.toSorted(function (a, b) {
    return a.age > b.age ? -1 : 1;
});
console.log(people);
console.log(sortedNames);
console.log(sortedAges);
