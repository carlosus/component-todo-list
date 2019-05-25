import Component from './Component.js';

class TodoItem extends Component {
    render() {
        const listItem = this.renderDOM();
        const todo = this.props.todo;
        const onRemove = this.props.onRemove;
        const onUpdate = this.props.onUpdate;


        const removeButton = listItem.querySelector('button');
        removeButton.addEventListener('click', () => {
            onRemove(todo);
        });
        
        const checkbox = listItem.querySelector('input');
        checkbox.addEventListener('change', () => {
            onUpdate(todo);
        });

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
                <span><button>x</button></span>
            </li>
        `;
    }
}

export default TodoItem;