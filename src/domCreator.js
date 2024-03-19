function createTask(todoItem) {

    const project = document.querySelector(`[data-id="${todoItem.projectName}"]`);
    const priority = document.createElement('div');
    priority.classList.add('element', 'second');

    switch (todoItem.priority) {
        case 'low':
            priority.classList.add('lowPriority');
        break;
        case 'medium':
            priority.classList.add('mediumPriority');
        break;
        case 'high':
            priority.classList.add('highPriority');
        break;
    }

    project.appendChild(priority);

    const title = document.createElement('span');
    title.classList.add('title');
    title.textContent = todoItem.title;

    priority.appendChild(title);

    const description = document.createElement('span');
    description.classList.add('desc');
    description.textContent = todoItem.description;

    priority.appendChild(description);

    const date = document.createElement('span');
    date.classList.add('dueDate');
    date.textContent = todoItem.dueDate;

    priority.appendChild(date);

    const button = document.createElement('button');
    button.innerHTML = '&times;';
    button.onclick = function() {
        priority.remove();
    };

    priority.appendChild(button);

}

function updateDropdown(containerId) {
    const dropdown = document.getElementById('containerSelect');
    const option = document.createElement('option');
    option.value = containerId;
    option.textContent = containerId;
    dropdown.appendChild(option);
  }

function createProject() {
    const addProject = document.getElementById('newProject');

    addProject.addEventListener('click', () => {
        const project = document.getElementById('projects');
        const projectName = prompt('Enter new project name');
        
        if (projectName) {
            const container = document.createElement('div');
        
            container.setAttribute('data-id', projectName);
            container.classList.add('project');
            project.appendChild(container);
    
            const span = document.createElement('span');
            span.classList.add('element', 'first');
            span.textContent = projectName;
            container.appendChild(span);

            updateDropdown(projectName);
        }
    });
}

function deleteTodo() {
    const buttons = document.querySelectorAll('.second button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {

          this.parentNode.remove();
        });
      });
}

export { createTask, deleteTodo, createProject };