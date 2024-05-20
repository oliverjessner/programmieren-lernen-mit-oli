const concatUserName = user => `${user.firstName} ${user.lastName}`;
const users = [
    { firstName: 'Oliver', lastName: 'Jessner' },
    { firstName: 'Steve', lastName: 'Jobs' },
    { firstName: 'Bill', lastName: 'Gates' },
];

users.map(user => concatUserName(user));
users.map(concatUserName);
