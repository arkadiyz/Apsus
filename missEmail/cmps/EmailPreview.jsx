
import emailsService from '../services/emailsService.js';

// const { Link } = ReactRouterDOM


export default class EmailPreview extends React.Component {

    handleClick = () => {
        this.props.onSelectEmail(this.props.email);
    }



    onDeleteMail = () => {
        this.props.onDeleteEmail(this.props.email)
    }

    render() {
        const { email } = this.props;
        return (
            <div className="email-card fill flex space-around">
                <div className="user-data fill" onClick={this.handleClick} >
                    {/* <Link className="link fill flex space-between" to={`/emailshomepage/${email.id}`}> */}
                    <p className="userame">{email.name}</p>
                    <p className="subject">{email.subject}</p>
                    <p className="sendAt">{email.sentAt}</p>
                    {/* </Link> */}
                </div>
                <div className="deleteMail-btn flex align-center justify-center">
                    <i className="fas fa-trash" onClick={this.onDeleteMail}></i>
                </div>
            </div>
        )
    }
}

    // <small className="price">{booksService.getBookPriceString(book.listPrice.amount, book.listPrice.currencyCode)}</small>
// onClick={this.handleClick} 

