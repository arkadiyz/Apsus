
import emailsService from '../services/emailsService.js';
import EmailPreview from './EmailPreview.jsx';
import EmailDetails from './EmailDetails.jsx';
import storageService from '../services/storageService.js';

export default class StarredMails extends React.Component {

    state = {
        starredMails : []
    }

    componentDidMount = () => {
        this.loadAllMails();
    }

    loadAllMails = () => {
            let starredMails = [];
            starredMails = this.props.emails.filter(mail => mail.isStarred );
            this.setState({starredMails});
    }

    render() {
        return <div className="emails-list-wrapper fill">
            {
                this.props.selectedEmail ? <EmailDetails email={this.props.selectedEmail} onUnSelectEmail={this.props.onUnSelectEmail} />
                    : <ul className="emails-list flex column fill align-center justify-center clean-list">
                        {this.state.starredMails.map((email, index) => <EmailPreview email={email} key={index}
                            onSelectEmail={this.props.onSelectEmail} onDeleteEmail={this.props.deleteMail} />)}
                    </ul>
            }
        </div>
    }
}