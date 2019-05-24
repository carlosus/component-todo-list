function filterTodos(todos, filter) {
    console.log(todos, filter);
    const lowerCaseFilter = filter.task.toLowerCase();
    return todos.filter(todo => {
        const lowerCaseTask = todo.task.toLowerCase();
        const hasTask = lowerCaseTask.includes(lowerCaseFilter);

        return hasTask;
    });
}

export default filterTodos;