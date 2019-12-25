
// import emailsService from '../services/emailsService.js';
const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {

    handleClick = () => {
        this.props.onSelectEmail(this.props.email);
    }

    render() {
        const { email } = this.props;
        return (
            <Link to={`/emailshomepage/${email.id}`}>
            <li className="emails-list-card flex column" onClick={this.handleClick} >
                <p className="subject">{email.subject}</p>
                <p className="sendAt">{email.sentAt}</p>
            </li>
            </Link>
            )
        }
    }
    
    // <small className="price">{booksService.getBookPriceString(book.listPrice.amount, book.listPrice.currencyCode)}</small>
// onClick={this.handleClick} 

