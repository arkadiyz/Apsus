import BookPreview from './BookPreview.jsx';
import BooksFilter from './BooksFilter.jsx';
export default class BooksList extends React.Component {

    render() {
        return (
            <div className="books-list-wrapper">
                <BooksFilter onFilter={this.props.onFilter} />
                <ul className="books-list clean-list">
                    {this.props.books.map((book, index) => <BookPreview book={book} key={index} onSelectBook={this.props.onSelectBook} />)}
                </ul>
            </div>
        );
    }
}