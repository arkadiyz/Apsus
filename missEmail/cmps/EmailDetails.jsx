
import emailsService from '../services/emailsService.js';
import storageService from '../services/storageService.js'
import RepliyToEmail from './RepliyToEmail.jsx'
import RepliyedEmails from './RepliyedEmails.jsx'

export default class EmailDetails extends React.Component {

    state = {
        isStarred: false,
        repliyedEmails: emailsService.getRepliys(),
        isUpdate:false,
        isRepliy: false
    }

    componentDidMount = () => {
        this.setRepliyedEmails()
        this.setStarred();
        if (this.props.email.isRead) return
        this.props.email.isRead = true;
        this.props.updateUnreaded(-1)
        this.props.onSetPage('Email opened');
    }

    setRepliyedEmails = () => {
        let repliys = this.getRepliys()
        this.setState({ repliyedEmails: repliys })
    }

    updateRepliyedEmails = (newRepliys) => {
        this.setState({ repliyedEmails: newRepliys,isRepliy:false, isUpdate: true })
    }

    getRepliys = () => {
        const repliys = emailsService.getRepliys();
        return repliys
    }

    setIsRepliy = () => {
        this.setState({ isRepliy: false })
    }

    setStarred = () => {
        this.setState({ isStarred: this.props.email.isStarred })
    }

    onStarMail = () => {
        this.props.email.isStarred = !this.props.email.isStarred
        emailsService.saveMailsToStorage(this.props.emails, 'All Emails');
        this.setStarred()
    }

    onReply = () => {
        this.setState({ isRepliy: !this.state.isRepliy })
    }

    render() {
        const { email } = this.props;
        return <div className="email-wrapper">
            <div className="email-container fill">
                <div className="user-info flex column align-center">
                    <div className="user-info-header fill flex space-between align-center">
                        <p><small>subject:</small>{email.subject}</p>
                        <div className="email-details-btns flex">
                            <i className="repliy-btn fas fa-reply" onClick={this.onReply}></i>

                            <div className="starredMail-btn flex align-center justify-center" onClick={this.onStarMail}>
                                {
                                    (email.isStarred) ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="user-info-name-email flex fill space-between">
                        <div className="user-info-name-email-insider">
                            <p><small> from:  </small>{email.name}</p>
                            <small>({email.email}) </small>
                        </div>
                        <p className="flex align-end"><small>sent at:</small>{email.sentAtStr}</p>
                    </div>
                </div>
                <div className="email-bodyText">
                    <p className="email-bodyText-text">
                        {email.bodyText}
                    </p>
                </div>
            </div>

            <RepliyedEmails getRepliys={this.getRepliys} repliys={this.state.repliyedEmails} email={email} />

            {this.state.isRepliy ?
                <div className="repliy-container">
                    <RepliyToEmail setIsRepliy={this.setIsRepliy} updateRepliyedEmails={this.updateRepliyedEmails} email={email} />
                </div> : ''
            }
        </div>
    }

}