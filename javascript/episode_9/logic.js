const persons = [];

function createPersonObj (name, lastname) {
    return {
        name,
        lastname,
        fullName: name + ' ' + lastname
    };
}

const oli = createPersonObj('Oliver', 'Jessner');
const berni = createPersonObj('Berni', 'Mayer');

persons.push(oli);
persons.push(berni);

console.log(persons);

const find = persons.find(function (person) {
    return person.name === 'Oliver';
});

console.log(find);