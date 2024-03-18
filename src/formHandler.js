import { closeModal } from './modalManager.js';
import { createTodo } from './createTodo.js';

function setMinimumDueDate() {
    const today = new Date();
    const formattedDate = today.toISOString().substring(0, 10);    
    document.getElementById('dueDate').setAttribute('min', formattedDate);
}

function handleFormSubmission(formId) {

    const form = document.getElementById(formId);
    if (!form) return;

    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const formData = new FormData(this);
        const formProps = Object.fromEntries(formData);

        const todoItem = createTodo(
            formProps.title,
            formProps.description,
            formProps.dueDate,
            formProps.priority,
        );
    
        console.log(todoItem);
        closeModal();
    });
}

export { handleFormSubmission, setMinimumDueDate };