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
                    targetElement.parentNode.classList.toggle('completed');
                    storeData();
                }
                else if (targetElement.classList.contains('delete-btn')) {
                    targetElement.parentNode.remove();
                    storeData();
                }
                else if (targetElement.classList.contains('delete-project')) {
                    //console.log('button3 clicked');
                    deleteDropDown();
                    targetElement.parentNode.parentNode.remove();
                    
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

function deleteDropDown() {
    const dropdown = document.getElementById('containerSelect');

    const spans = document.querySelectorAll('.element.first');

    spans.forEach(element => {
        let newElement = element.textContent.slice(0, -1);
        console.log(newElement);
        for (let i = 0; i < dropdown.options.length; i++) {
            if (newElement == dropdown.options[i].value) {
                dropdown.remove(i);
                break;
            }
        }
    });

    
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

            const deleteProjectBtn = document.createElement('button');
            deleteProjectBtn.textContent = "x";
            deleteProjectBtn.classList.add('delete-project');
            span.appendChild(deleteProjectBtn);

            updateDropdown(projectName);
        }
    });

    storeData();
}

function createFirstProject() {
    const project = document.getElementById('projects');
    const projectName = 'Projects';

    const container = document.createElement('div');
        
    container.setAttribute('data-id', projectName);
    container.classList.add('project');
    project.appendChild(container);
    
    const span = document.createElement('span');
    span.classList.add('element', 'first');
    span.textContent = projectName;
    container.appendChild(span);

    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.textContent = "x";
    deleteProjectBtn.classList.add('delete-project');
    span.appendChild(deleteProjectBtn);

    updateDropdown(projectName);
}

export { createTask, createProject, delegateEvent, createFirstProject };