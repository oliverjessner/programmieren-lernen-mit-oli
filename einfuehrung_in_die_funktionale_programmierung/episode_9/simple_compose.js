const users = [
    { name: 'Alice', age: 25, sex: 'f' },
    { name: 'Bob', age: 25, sex: 'm' },
    { name: 'Charlie', age: 30, sex: 'm' },
    { name: 'David', age: 17, sex: 'm' },
];

function filterUsersOver18(users) {
    return users.filter(user => user.age >= 18);
}

function filterFemale(users) {
    return users.filter(user => user.sex !== 'f');
}

function calculateAverageAge(users) {
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
}

const composeSimple = (fn1, fn2, fn3) => value => fn3(fn2(fn1(value)));
const avg = composeSimple(filterFemale, filterUsersOver18, calculateAverageAge);
const val = avg(users);

console.log(val);
