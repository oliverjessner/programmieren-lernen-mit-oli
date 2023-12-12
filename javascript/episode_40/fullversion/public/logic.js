import AbstractFactory from './abstractFactory.js';

const button = document.querySelector('button');
const abstractFactory = new AbstractFactory();

button.addEventListener('click', function () {
    const text = document.querySelector('#text').value;
    const date = document.querySelector('#date').value;
    const color = [...document.querySelectorAll('.colors input[type="radio"]')].find(c => c.checked).value;
    const urgency = document.querySelector('#urgency').value;
    const factory = abstractFactory.createFactory(color);
    const todo = factory.createTodo(text, date, urgency);

    console.log(todo);
});
