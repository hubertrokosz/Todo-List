import './style.css';
import { initModal } from './modalManager.js';
import { handleFormSubmission, setMinimumDueDate } from './formHandler.js';
import { createProject } from './domCreator.js';
import { retrieveData } from './DOMLocalStorage.js'
import { delegateEvent } from './domCreator.js';
import { createFirstProject } from './domCreator.js';

document.addEventListener('DOMContentLoaded', function() {
    //retrieveData();
    createFirstProject();
    initModal();
    setMinimumDueDate();
    delegateEvent();
    handleFormSubmission('myForm');
    createProject();
});

