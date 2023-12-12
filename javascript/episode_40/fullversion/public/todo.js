import List from './list.js';

const list = new List();

function randomId() {
    return Math.random().toString(36).substring(2, 12);
}

export default class Todo {
    constructor(text, date, color, urgency) {
        this.text = text;
        this.date = date;
        this.color = color;
        this.urgency = urgency;
        this.id = `id-${randomId()}`;
    }

    render(icon) {
        const html = `<div class="todo-item ${this.color}" id="${this.id}">
            <p>${this.text} <i class="fa fal fa-${icon}"></i></p>
            <p>Due Date: ${this.date}</p>
            <p>Urgency: ${this.urgency}</p>
            <button class="remove todo-button">Remove</button>
        </div>`;

        list.dom.insertAdjacentHTML('beforeend', html);
        this.dom = list.dom.querySelector(`#${this.id}`);
    }

    addEvents() {
        const removeButton = this.dom.querySelector('.remove');
        removeButton.addEventListener('click', () => this.remove());
    }

    remove() {
        this.dom.remove();
    }
}
