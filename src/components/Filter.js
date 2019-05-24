import Component from './Component.js';

class Filter extends Component {
    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');
        input.addEventListener('input', () => {
            this.props.onFilter({
                task: input.value
            });
        });
    
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <section class="filter-section">
                <input class="filter" name="filter">
                <span class="glass">🔍</span>
                <label for="all">All<input type="radio" name="radio" value="all"></label>
                <label for="completed">Completed<input type="radio" name="radio" value="completed"></label>
                <label for="uncompleted">Not Done<input type="radio" name="radio" value="uncompleted"></label>
            </section>
        `;
    }
}

export default Filter;