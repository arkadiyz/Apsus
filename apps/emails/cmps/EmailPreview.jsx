// const { Link } = ReactRouterDOM
import emailsService from '../services/booksService.js';

export default class EmailPreview extends React.Component {

    // handleClick = () => {
    //     this.props.onSelectBook(this.props.book);
    // }

    render() {
        const { email } = this.props;
        return (
            // <Link to={`/books/${book.id}`}>
            <li className="emails-list-card flex column">
                <p className="subject">{email.subject}</p>
                <p className="sendAt">{book.sendAt}</p>
            </li>
            // </Link>
            )
        }
    }
    
    // <small className="price">{booksService.getBookPriceString(book.listPrice.amount, book.listPrice.currencyCode)}</small>
// onClick={this.handleClick} 

