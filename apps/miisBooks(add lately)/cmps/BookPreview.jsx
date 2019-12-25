const { Link } = ReactRouterDOM
import booksService from '../services/booksService.js';

export default class BookPreview extends React.Component {
    handleClick = () => {
        this.props.onSelectBook(this.props.book);
    }

    render() {
        const { book } = this.props;
        return (
            <Link to={`/books/${book.id}`}>
                <li onClick={this.handleClick} className="books-list-card flex column">
                    <img src={book.thumbnail} />
                    <span className="book-name">{book.title}</span>
                    <small className="price">{booksService.getBookPriceString(book.listPrice.amount, book.listPrice.currencyCode)}</small>
                </li>
            </Link>
        )
    }
}