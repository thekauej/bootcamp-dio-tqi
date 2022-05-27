const form = document.getElementById('task-form');
const tasklist = document.getElementById('tasks');

form.onsubmit = function(e){
    e.preventDefault();
    const inputField = document.getElementById('task-input');
    addTask(inputField.value);
    form.reset();
    console.log('teste');
    
};

function addTask(description){
    const taskContainer = document.createElement('div')
    const newTask = document.createElement('input');
    const tasklabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    tasklabel.setAttribute('for', description);
    tasklabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(tasklabel);

    tasklist.appendChild(taskContainer);
}