import filterTodos from '../src/filter-todos.js';

const test = QUnit.test;

QUnit.module('todo filter');

const todos = [
    {
        task: 'Buy Tortilla Chips',
        completed: false
    },
    {
        task: 'Buy Avocados',
        completed: false
    },
    {
        task: 'Buy Red Onions',
        completed: false
    }
];

test('filter by task', assert => {
    const filter = {
        task: 'Buy Tortilla Chips',
        completed: ''
    };

    const expected = filterTodos(todos, filter);

    assert.deepEqual(expected, [{
        task: 'Buy Tortilla Chips',
        completed: false
    }]);
});
