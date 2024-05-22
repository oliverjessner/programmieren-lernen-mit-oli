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

function compose(...fns) {
    return function (input) {
        return fns.reduceRight(function (acc, fn) {
            return fn(acc);
        }, input);
    };
}

const avg = compose(calculateAverageAge, filterFemale);
const val = avg(users);

console.log(val);
