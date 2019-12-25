import booksService from '../services/booksService.js';
import BookDetails from '../cmps/BookDetails.jsx';
import BooksList from '../cmps/BooksList.jsx';

export default class Home extends React.Component {
    state = {
        books: [],
        selectedBook: null,
        filterBy: null
    }

    componentDidMount = () => {
        this.loadBooks();
    }

    loadBooks = () => {
        booksService.getBooks(this.state.filterBy).then(books => {
            this.setState({ books })
        })
    }

    onFilter = (filter) => {
        this.setState({ filterBy: filter }, () => {
            this.loadBooks()
        }
        );
    }

    onSelectBook = (book) => {
        this.setState(() => ({ selectedBook: book }));
    }

    onUnSelectBook = () => { this.onSelectBook(null) }

    render() {
        return [
                  <div className="logo" key="1">Miss Books</div>,
                  <div className="after-logo" key="2">read - enjoy - buy</div>,
                  <div className="container" key="3">,
                  {this.state.selectedBook ?
                    <BookDetails book={this.state.selectedBook} onUnSelectBook={this.onUnSelectBook} /> :
                    <BooksList books={this.state.books} onSelectBook={this.onSelectBook} onFilter={this.onFilter} />
                  }
                  </div>
                ]
    }
}