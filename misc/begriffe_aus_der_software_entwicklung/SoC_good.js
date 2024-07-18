let todos = ['Aufgabe 1', 'Aufgabe 2', 'Aufgabe 3'];

function addTodo(todo) {
    todos.push(todo);
}

function getTodos() {
    return todos;
}

function renderTodos(todoList) {
    const todoContainer = document.getElementById('todo-list');
    todoContainer.innerHTML = '';

    todoList.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo;
        todoContainer.appendChild(li);
    });
}

addTodo('Aufgabe 4');
renderTodos(getTodos());
