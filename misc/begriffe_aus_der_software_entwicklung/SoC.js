const todos = ['Aufgabe 1', 'Aufgabe 2', 'Aufgabe 3'];

function renderTodos() {
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');

        li.textContent = todo;
        todoList.appendChild(li);
    });
}

function addTodo(todo) {
    todos.push(todo);
    renderTodos();
}

addTodo('Aufgabe 4');
