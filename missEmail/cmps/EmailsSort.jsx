
export default class EmailsSort extends React.Component {

    state = {
        sortBy: 'newer'
    }
    
    onSortBy = (event) => {
        if (event.target.textContent === 'newer/older') {
            if (this.props.sortBy === 'subject') {
                this.setState({ sortBy: 'newer' }, () => {
                    this.props.onSort(this.state.sortBy)
                });
            } else {
                if (this.state.sortBy === 'newer') {
                    this.setState({ sortBy: 'older' }, () => {
                        this.props.onSort(this.state.sortBy)
                    });
                }
                else (this.setState({ sortBy: 'newer' }, () => {
                    this.props.onSort(this.state.sortBy)
                }))
            }
        } else {
            this.setState({sortBy:'subject'} , () => {
                this.props.onSort(this.state.sortBy)
            })
        }
    }

    render() {
        return <div className="emails-sort-container flex">
            <button onClick={this.onSortBy}>subject</button>
            <button onClick={this.onSortBy}>newer/older</button>
        </div>
    }

}