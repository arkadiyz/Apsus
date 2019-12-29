
import EmailPreview from './EmailPreview.jsx';
import EmailDetails from './EmailDetails.jsx';

export default class StarredMails extends React.Component {

    state = {
        starredMails: []
    }

    componentDidMount = () => {
        this.loadAllMails();
    }

    loadAllMails = () => {
        let starredMails = [];
        starredMails = this.props.emails.filter(mail => mail.isStarred);
        this.setState({ starredMails });
    }

    render() {
        return <div className="emails-list-wrapper fill">
            {
                this.props.selectedEmail ?
                    <EmailDetails onSelectEmail={this.props.onSelectEmail}
                        onSetPage={this.props.onSetPage}
                        updateUnreaded={this.props.updateUnreaded}
                        email={this.props.selectedEmail}
                        emails={this.props.emails}
                        onUnSelectEmail={this.props.onUnSelectEmail}
                    />
                    : <ul className="emails-list flex column fill align-center justify-center clean-list">
                        {this.state.starredMails.map((email, index) => <EmailPreview
                            emails={this.props.emails} email={email} key={index}
                            updateUnreaded={this.props.updateUnreaded}
                            setPrecentageUnread={this.props.setPrecentageUnread}
                            onSelectEmail={this.props.onSelectEmail} onDeleteEmail={this.props.deleteMail} />)}
                    </ul>
            }
        </div>
    }
}