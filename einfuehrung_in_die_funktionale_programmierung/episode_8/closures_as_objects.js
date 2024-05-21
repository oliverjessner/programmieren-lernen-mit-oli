function createHuman(name, age, sex) {
    return function (data) {
        if (data === 'name') {
            return name;
        }
        if (data === 'age') {
            return age;
        }
        if (data === 'sex') {
            return sex;
        }
    };
}

const oliver = createHuman('oliver', 32, 'm');

console.log(oliver('name'));
console.log(oliver('age'));
