const users = [
    { firstName: 'Oliver', lastName: 'Jessner' },
    { firstName: 'Steve', lastName: 'Jobs' },
    { firstName: 'Bill', lastName: 'Gates' },
];
const getPropName = propName => obj => obj[propName];

console.log(users.map(getPropName('lastName')));
