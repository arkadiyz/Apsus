import EmailPreview from './EmailPreview.jsx';
import EmailDetails from './EmailDetails.jsx';

// import EmailFilter from './BooksFilter.jsx';

export default class EmailsList extends React.Component {

    render() {
        return (
            <div className="emails-list-wrapper fill">
                {
                    this.props.selectedEmail ? <EmailDetails email={this.props.selectedEmail} onUnSelectEmail={this.props.onUnSelectEmail} />
                        : <ul className="emails-list flex column fill align-center justify-center clean-list">
                            {this.props.emails.map((email, index) => <EmailPreview email={email} key={index}
                                onSelectEmail={this.props.onSelectEmail} onDeleteEmail={this.props.deleteMail} />)}
                        </ul>
                }
            </div>
        );
    }

}
