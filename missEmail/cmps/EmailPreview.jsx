import emailsService from '../services/emailsService.js';

export default class EmailPreview extends React.Component {

    state = {
        isStarred: false,
        isRead: false
    }

    componentDidMount = () => {
        this.setStarred();
        this.setRead();
    }

    setStarred = () => {
        this.setState({ isStarred: this.props.email.isStarred })
    }

    setRead = () => {
        this.setState({ isRead: this.props.email.isRead })
    }

    handleClick = () => {
        this.props.onSelectEmail(this.props.email);
    }

    onDeleteMail = () => {
        this.props.onDeleteEmail(this.props.email)
        emailsService.saveMailsToStorage(this.props.emails, 'All Emails');
    }

    onStarMail = () => {
        this.props.email.isStarred = !this.props.email.isStarred
        emailsService.saveMailsToStorage(this.props.emails, 'All Emails');
        this.setStarred()
    }

    onReadMailToggle = () => {
        this.props.email.isRead = !this.props.email.isRead;
        emailsService.saveMailsToStorage(this.props.emails, 'All Emails');
        (this.props.email.isRead) ? this.props.updateUnreaded(-1) : this.props.updateUnreaded(1)
        this.props.setPrecentageUnread(this.props.emails)
        this.setRead()
    }


    render() {
        const { email } = this.props;
        let newclassName = "email-card fill flex space-around column"
        if (email.isRead) newclassName += " readedStyle"

        return (
            <div className={newclassName} onClick={this.handleClick} >
                <div className="user-data fill flex space-between align-center">
                    <p className="userame flex align-center"><small>from:</small>{email.name}</p>
                    <p className="sendAt flex align-center"><small>at:</small>{email.sentAtStr}</p>
                </div>
                <div className="email-card-btns fill flex align-center">
                    <div className="readMail-btn mails-btn" onClick={this.onReadMailToggle}>
                        {
                            (email.isRead) ? <i className="fas fa-bookmark"></i> : <i className="far fa-bookmark"></i>
                        }
                    </div>
                    <div className="starredMail-btn mails-btn" onClick={this.onStarMail}>
                        {
                            (email.isStarred) ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>
                        }
                    </div>
                    <div className="deleteMail-btn mails-btn" onClick={this.onDeleteMail}>
                        <i className="fas fa-trash" ></i>
                    </div>
                </div>
                <p className="subject flex align-center"><small>subj:</small>{email.subject}</p>
            </div>
        )
    }
}


