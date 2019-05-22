import Component from './Component.js';
import Header from './Header.js';
import todos from '../../src/todos-data.js';
import TodoList from './TodoList.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const todoList = new TodoList({ todos });

        const todoListDOM = todoList.render();
        main.appendChild(todoListDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <!-- header -->
                <main>
                <!-- image list goes here -->
                </main>
            </div>
        `;
    }
}

export default App;