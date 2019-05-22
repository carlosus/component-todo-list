import Component from './Component.js';

class TodoItem extends Component {
    renderTemplate() {
        const todo = this.props.todo;

        return /*html*/ `
            <li>
                <input type="checkbox" checked>${todo.task}
            </li>
        `;
    }
}

export default TodoItem;