import Todo from './todo.js';

class TodoFactory {
    constructor(icon) {
        this.icon = icon;
    }

    createTodo(text, date, color, urgency) {
        const todo = new Todo(text, date, color, urgency);

        todo.render(this.icon);
        todo.addEvents();

        return todo;
    }
}

export class GreenTodoFactory extends TodoFactory {
    constructor(icon) {
        super(icon);
    }

    createTodo(text, date, urgency) {
        return super.createTodo(text, date, 'green', urgency);
    }
}

export class RedTodoFactory extends TodoFactory {
    constructor(icon) {
        super(icon);
    }

    createTodo(text, date, urgency) {
        return super.createTodo(text, date, 'red', urgency);
    }
}

export class BlueTodoFactory extends TodoFactory {
    constructor(icon) {
        super(icon);
    }

    createTodo(text, date, urgency) {
        return super.createTodo(text, date, 'blue', urgency);
    }
}
