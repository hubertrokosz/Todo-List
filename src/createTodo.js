function createTodo(projectName, title, description, dueDate, priority) {
    return {
        projectName: projectName,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    };
}

export { createTodo };