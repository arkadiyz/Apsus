
import emailsService from '../services/emailsService.js';

const { Link } = ReactRouterDOM


export default class EmailPreview extends React.Component {

    handleClick = () => {
        this.props.onSelectEmail(this.props.email);
    }



    onDeleteMail = (event) => {
        debugger
        // event.stopPropagation()
        this.props.onDeleteEmail(this.props.email)
    }

    render() {
        const { email } = this.props;
        return (
            <div className="email-card fill flex space-around">
                <li className="fill" onClick={this.handleClick} >
                    <Link className="link fill flex space-between" to={`/emailshomepage/${email.id}`}>
                        <p className="subject">{email.subject}</p>
                        <p className="sendAt">{email.sentAt}</p>
                    </Link>
                </li>
                <p className="deleteMail-btn" onClick={this.onDeleteMail}>X</p>
            </div>
        )
    }
}

    // <small className="price">{booksService.getBookPriceString(book.listPrice.amount, book.listPrice.currencyCode)}</small>
// onClick={this.handleClick} 

