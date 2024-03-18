import './style.css';
import { initModal } from './modalManager.js';
import { handleFormSubmission, setMinimumDueDate } from './formHandler.js';

initModal();
setMinimumDueDate();

document.addEventListener('DOMContentLoaded', function() {
    handleFormSubmission('myForm');
});

