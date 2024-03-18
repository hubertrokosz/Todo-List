const modal = document.getElementById('myModal');

function closeModal() {
    if (modal) modal.style.display = "none";
}

function initModal() {
    const addTask = document.getElementById('task');
    const span = document.getElementById('close');
    
    if (addTask) {
        addTask.addEventListener('click', function() {
            modal.style.display = "block";
        });
    }
    
    if (span) {
        span.addEventListener('click', closeModal);
    }
    
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });
}

export { initModal, closeModal };