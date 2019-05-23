import Component from './Component.js';

class TodoItem extends Component {
    render() {
        const listItem = this.renderDOM();
        
        return listItem;
    }

    renderTemplate() {
        const todo = this.props.todo;
        let checked = '';

        if(todo.completed) {
            checked = 'checked';
        }

        return /*html*/ `
            <li>
                <input type="checkbox" ${checked}>${todo.task}
            </li>
        `;
    }
}

export default TodoItem;