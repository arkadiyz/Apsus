import booksService from '../services/booksService.js';
import BookBadges from './BookBadges.jsx';
import BookForm from './BookForm.jsx';
import BookReviews from "./BookReviews.jsx"

export default class BookDetails extends React.Component {

    getBookPrice = () => {
        return booksService.getBookPriceString(this.props.book.listPrice.amount, this.props.book.listPrice.currencyCode);
    }

    getPriceColor = () => {
        return this.props.book.listPrice.amount <= 20 ? 'cheap' : 'expensive';
    }



    render() {
        const { book } = this.props;
        return (
            <div className="book-display-wrapper">
                <div className="book-display">
                    <div className="information-wrapper">
                        <section className="information">
                            <button className="go-back" onClick={this.props.goBack}> BACK </button>
                            <h2 className="title">{book.title}</h2>
                            <ul className="more-info-list">
                                <li>Categories: {book.categories.join(',')}</li>
                                <li>Subtitle: {book.subtitle}</li>
                                <li>Authors: {book.authors.join(',')}</li>
                                <li>Publish Year: {book.publishedDate}</li>
                                <li>Pages Count: {book.pageCount}</li>
                                <li>Language: {book.language.toUpperCase()}</li>
                                <li>Description: <p>{book.description}</p></li>
                                <li className="tags">tags:
                        <BookBadges pageCount={book.pageCount} publishDate={book.publishedDate} />
                                </li>
                            </ul>
                        </section>
                        <section className="cover">
                            <div className="cover-wrapper">
                                {book.listPrice.isOnSale ? <span className="on-sale">on sale!</span> : ''}
                                <img src={book.thumbnail} />
                            </div>
                            <span className={`price ${this.getPriceColor()}`}>{this.getBookPrice()}</span>
                        </section>
                    </div>

                    <section className="reviews">
                            <BookForm book={book} onSave={this.onEditBook}></BookForm>
                        

                        {/* <div className="reviews-contianer">
                            <BookReviews bookId={book.id}></BookReviews>
                        </div> */}
                    </section>
                </div>
            </div>);
    }
}