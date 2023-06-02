const taskInput = document.getElementById('taskHolder');
const addButton = document.getElementById('addTheTask');
const taskList = document.getElementById('taskList');

function addTask () {
    const task = taskInput.value.trim();

    if (task !== '') {
        // Create a new list item and append it to the task list
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);

        // Save the updated task list in local storage
        localStorage.setItem('todoList', taskList.innerHTML);

        // Clear the input field
        taskInput.value = '';
    }
}

addButton.addEventListener('click', addTask)

window.addEventListener('load', () => {
    const savedTasks = localStorage.getItem('todoList');
    if (savedTasks) {
        taskList.innerHTML = savedTasks; // Populate the task list with saved tasks
    }
});