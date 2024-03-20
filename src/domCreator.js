import { storeData } from "./DOMLocalStorage";

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

    const btnComplete = document.createElement('button');
    btnComplete.classList.add('complete-btn');
    const iconCheck = document.createElement('i');
    iconCheck.className = 'material-icons';
    iconCheck.textContent = 'check';
    btnComplete.appendChild(iconCheck);

    priority.appendChild(btnComplete);

    const button = document.createElement('button');
    button.classList.add('delete-btn');
    const iconX = document.createElement('i');
    iconX.className = 'material-icons';
    iconX.textContent = 'close'; 
    button.appendChild(iconX);

    priority.appendChild(button);
    
    storeData();
}

function delegateEvent() {
    const parentContainer = document.getElementById('projects');

    parentContainer.addEventListener('click', function(event) {
        let targetElement = event.target;

        while (targetElement != this) {
            if (targetElement.tagName === 'BUTTON') {
                if (targetElement.classList.contains('complete-btn')) {
                    console.log('button1 clicked');
                    targetElement.parentNode.classList.toggle('completed');
                    storeData();
                }
                else if (targetElement.classList.contains('delete-btn')) {
                    console.log('button 2clicked');
                    targetElement.parentNode.remove();
                    storeData();
                }
                break;
            }
            targetElement = targetElement.parentNode;
        }
    });
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

    storeData();
}

export { createTask, createProject, delegateEvent };