function domCreator(todoItem) {

    const project = document.getElementById('project');
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

function deleteTodo() {
    const buttons = document.querySelectorAll('.second button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {

          this.parentNode.remove();
        });
      });
}

export { domCreator, deleteTodo };