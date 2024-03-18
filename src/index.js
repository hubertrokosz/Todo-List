import './style.css';
import { initModal } from './modalManager.js';
import { handleFormSubmission, setMinimumDueDate } from './formHandler.js';
import { deleteTodo } from './domCreator.js';

initModal();
setMinimumDueDate();

document.addEventListener('DOMContentLoaded', function() {
    handleFormSubmission('myForm');
    deleteTodo();
});

