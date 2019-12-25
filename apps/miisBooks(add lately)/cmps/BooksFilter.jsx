import AddBook from './AddBook.jsx'

export default class BooksFilter extends React.Component {

    state = {
        filterBy: {
            name: '',
            price: 200
        }
    };

    handleInput = (event) => {
        let field = event.target.name,
            value = (event.target.type === 'range') ? +event.target.value : event.target.value;
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),
            () => this.props.onFilter(this.state.filterBy));
    }

    render() {
        return (
            <section className="books-list-filters flex space-between">
                <input type="text" name="name" placeholder="Filter by name" value={this.state.filterBy.name} onChange={this.handleInput} />
                <div className="price-filter">
                    <input type="range" name="price" step="1" min="0" max="200" value={this.state.filterBy.price} onChange={this.handleInput} />
                    <span>{this.state.filterBy.price}</span>
                </div>
            </section>);
    }
}