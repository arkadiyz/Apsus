import booksService from "../services/booksService.js"
import BookDetails from "../cmps/BookDetails.jsx";

export default class BookPage extends React.Component {
    state = {
        book: null,
        reviews: null
    }
    componentDidMount() {
        this.loadBook();

    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadBook();
        }

    }

    loadBook() {
        const { id } = this.props.match.params;
        booksService.getBookById(id).then(book => {
            this.setState({ book })
        })
    }

    goBack = () => {
        this.props.history.push('/bookshomepage')
    }

    render() {
        if (!this.state.book) return <div className="loading">Loading...</div>
        return <BookDetails key="2" book={this.state.book} goBack={this.goBack} />
    }
}



