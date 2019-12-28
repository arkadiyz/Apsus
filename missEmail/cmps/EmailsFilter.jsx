

export default class EmailsFilter extends React.Component {
    state = {
        filterBy: {
            name: '',
            select: 'all',
        }
    };

    handleInput = (event) => {
        let field = event.target.name,
            value = event.target.value;

        switch (event.target.value) {
            case 'unread':
                this.setState({ select: 'unread' })
                break;

            case 'starred':
                this.setState({ select : 'starred'})
                break;

            case 'all':
                this.setState({ select: 'all' })
                break;
        }

        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),
            () => this.props.onFilter(this.state.filterBy));
    }

    render() {
        return <div className="search-container flex justify-center">
            <form action="" onChange={this.handleInput}>

                <input type='text' name="name" placeholder="search by name"
                    className='search-emails'
                    defaultValue={this.state.filterBy.name}
                ></input>

                <select name='select' className='select-filter'>
                    <option defaultValue="all">all</option>
                    <option defaultValue="unread">unread</option>
                    <option defaultValue="starred">starred</option>
                </select>
            </form>
        </div >
    }
}