function filterTodos(todos, filter) {
    const lowerCaseFilter = filter.task.toLowerCase();
    console.log(filter);

    return todos.filter(todo => {
        const lowerCaseTask = todo.task.toLowerCase();
        const hasTask = lowerCaseTask.includes(lowerCaseFilter);
        const todoStatus = todo.completed.toString();
        const filterStatus = filter.completed;
        let isCompleted = todoStatus.includes(filterStatus);

        if(filterStatus === 'all') {
            isCompleted = true;
        }

        return hasTask && isCompleted;
    });
}

export default filterTodos;