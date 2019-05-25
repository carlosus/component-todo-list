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

test('filters on task case insensitive', assert => {
    const filter = {
        task: 'TOR',
        completed: false
    };

    const filtered = filterTodos(todos, filter);

    assert.deepEqual(filtered, [{
        task: 'Buy Tortilla Chips',
        completed: false
    }]);
});

test('returns all on no filter', assert => {
    const filter = {
        task: '',
        completed: ''
    };

    const filtered = filterTodos(todos, filter);

    assert.deepEqual(filtered, todos);
});

test('matches completed as well as task', assert => {
    const filter = {
        task: 'r',
        completed: false
    };

    const filtered = filterTodos(todos, filter);

    assert.deepEqual(filtered, [
        {
            task: 'Buy Tortilla Chips',
            completed: false
        },
        {
            task: 'Buy Red Onions',
            completed: false
        }
    ]);
});
