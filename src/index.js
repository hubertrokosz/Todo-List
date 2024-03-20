import './style.css';
import { initModal } from './modalManager.js';
import { handleFormSubmission, setMinimumDueDate } from './formHandler.js';
import { createProject } from './domCreator.js';
import { retrieveData } from './DOMLocalStorage.js'
import { delegateEvent } from './domCreator.js';

document.addEventListener('DOMContentLoaded', function() {
    retrieveData();
    initModal();
    setMinimumDueDate();
    delegateEvent();
    handleFormSubmission('myForm');
    createProject();
});

