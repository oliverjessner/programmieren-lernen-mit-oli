'use strict';
const jsonContent = document.getElementById('json').textContent;
const jsonObj = JSON.parse(jsonContent);
const obj = {
    name: 'oli',
    age: 31,
    programmer: true,
    hobbies: ['programming', 'reading'],
};

if (JSON.stringify(obj) === JSON.stringify(jsonObj)) {
    console.log('both are equal');
}
 