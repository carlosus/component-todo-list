import TodoItem from '../src/components/TodoItem.js';

const test = QUnit.test;

QUnit.module('todo item');


test('template', assert => {
    const todo = {
        task: 'Buy Avocados',
        completed: false
    };

    const expected = /*html*/ `
        <li>
            <input type="checkbox" checked>${todo.task}
        </li>
    `;

    const todoItem = new TodoItem({ todo });
    const html = todoItem.renderTemplate();

    assert.htmlEqual(html, expected);
});