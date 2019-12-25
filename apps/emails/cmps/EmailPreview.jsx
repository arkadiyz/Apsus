<<<<<<< HEAD

// import emailsService from '../services/emailsService.js';
const { Link } = ReactRouterDOM

=======
// const { Link } = ReactRouterDOM
>>>>>>> 1ebbdc63429f84ff242d4ba079aee7f84b4c8a0b

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

