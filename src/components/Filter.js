import Component from './Component.js';

class Filter extends Component {
    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');

        form.addEventListener('input', () => {
            console.log(form.elements['radio'].value);
            
            this.props.onFilter({
                task: form.elements['filter'].value,
                completed: form.elements['radio'].value
            });
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <section >
                <form class="filter-section">
                    <input class="filter" name="filter" placeholder="SEARCH">
                    <span class="glass">🔍</span>
                    
                    <label for="all">
                        <input type="radio" name="radio" value="all">
                        All
                    </label>
                    <label for="completed">
                        <input type="radio" name="radio" value="true">
                        Completed
                    </label>
                    <label for="uncomplete">
                        <input type="radio" name="radio" value="false">
                        Uncomplete
                    </label>
                </form>
            </section>
        `;
    }
}

export default Filter;