import { GreenTodoFactory, BlueTodoFactory, RedTodoFactory } from './factory.js';

export default class AbstractFactory {
    constructor() {
        if (!AbstractFactory._instance) {
            AbstractFactory._instance = this;
        }

        return AbstractFactory._instance;
    }

    createFactory(color) {
        if (color === 'green') {
            return new GreenTodoFactory('check');
        }
        if (color === 'red') {
            return new RedTodoFactory('bell');
        }
        if (color === 'blue') {
            return new BlueTodoFactory('home');
        }
    }
}
