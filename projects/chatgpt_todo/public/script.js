let tasks = [];

// Funktion zum Laden der Todos beim Start der App
async function loadTasks() {
    const response = await fetch("/api/todos");
    const data = await response.json();
    tasks = data;
    renderTasks();
}

loadTasks(); // Lade die Todos beim Start der App

// Funktion zum Hinzufügen eines Todos
async function addTask() {
    const taskInput = document.getElementById("taskInput");
    const priorityInput = document.getElementById("priorityInput");
    const taskText = taskInput.value.trim();
    const taskPriority = parseInt(priorityInput.value);

    if (taskText !== "" && !isNaN(taskPriority) && taskPriority >= 1 && taskPriority <= 5) {
        const response = await fetch("/api/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: taskText, priority: taskPriority }),
        });
        const data = await response.json();
        tasks.push(data);
        renderTasks();
        taskInput.value = "";
        priorityInput.value = "";
    }
}

// Funktion zum Aktualisieren eines Todos
async function toggleTask(index) {
    const task = tasks[index];
    task.completed = !task.completed;
    const response = await fetch(`/api/todos/${task.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    const data = await response.json();
    tasks[index] = data;
    renderTasks();
}
🌝
// Funktion zum Löschen eines Todos
async function deleteTask(index) {
    const task = tasks[index];
    const response = await fetch(`/api/todos/${task.id}`, {
        method: "DELETE",
    });
    const data = await response.json();
    if (data.deleted) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Funktion zum Rendern der Todos
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text + " - Priority: " + task.priority;
        if (task.completed) {
            li.classList.add("completed");
        }
        li.addEventListener("click", () => toggleTask(index));
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();
            deleteTask(index);
        });
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
