export default class InputSearch extends React.Component {

    state = {
        filterBy: {
            name: '',
            select: ''
        }
    };

    handleInput = (event) => {
        let field = event.target.name,
            value;

        switch (event.target.type) {
            case 'unread':
                value = 'unread'
                break;

            case 'starred':
                value = 'starred'
                break;

            case 'date':
                value = 'date'
                break;

            default:
                value = 'all'
                break;
        }
        // alue = (evenvt.target.type === 'range') ? +event.target.value : event.target.value;

        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),
            () => this.props.onFilter(this.state.filterBy));
    }

    render() {
        return <div className="search-container">
            <input type='text' name="name" placeholder="search by name"
                className='search-emails'
                value={this.state.filterBy.name}
                onChange={this.handleInput}></input>

            <select type='select' className='select-filter' onChange={this.handleInput}>
                <option value="all">All</option>
                <option value="unread">Unread</option>
                <option value="starred">starred</option>
                {/* <option value="date">date</option> */}
            </select>
        </div >
    }

}
    // render() {
    //     return (
    //         <section className="books-list-filters flex space-between">
    //             <input type="text" name="name" placeholder="Filter by name" value={this.state.filterBy.name} onChange={this.handleInput} />
    //             <div className="price-filter">
    //                 <input type="range" name="price" step="1" min="0" max="200" value={this.state.filterBy.price} onChange={this.handleInput} />
    //                 <span>{this.state.filterBy.price}</span>
    //             </div>
    //         </section>);
    // }