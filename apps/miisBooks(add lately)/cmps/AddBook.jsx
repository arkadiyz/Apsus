import booksService from "../services/booksService.js"

export default class AddBook extends React.Component {

    state = {
        books: null,
        selectedBook: null
    }

    componentDidMount() {
        this.setBooks();
    }

    setBooks() {
        let booksToAdd = []
        booksToAdd = this.props.books
        this.setState({ books: booksToAdd })
    }

    addGoogleBook = (book) => {
        booksService.addBook(book);
    }

    render() {
        return (!this.state.books) ? '' :
            this.state.books.map((book, i) => {
                return <div key={i} className="books-title-container">
                    <p>{book.title}</p>
                    <p className="add-book" onClick={ () => {this.addGoogleBook(book)} }>+</p>
                </div>
            })
    }
}