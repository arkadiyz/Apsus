import EmailPreview from './EmailPreview.jsx';
import EmailDetails from './EmailDetails.jsx';
import EmailsFilter from './EmailsFilter.jsx';
import EmailsSort from './EmailsSort.jsx';

export default class EmailsList extends React.Component {

    render() {
        return <div className="emails-list-wrapper fill">
            <div className="fill flex space-between align-center">
            <EmailsSort onSort={this.props.onSort} />
            <EmailsFilter onFilter={this.props.onFilter} />
            </div>
            {
                this.props.selectedEmail ?
                    <EmailDetails onSetPage={this.props.onSetPage}
                        updateUnreaded={this.props.updateUnreaded}
                        email={this.props.selectedEmail}
                        onUnSelectEmail={this.props.onUnSelectEmail} />
                        
                    : <ul className="emails-list flex column fill align-center justify-center clean-list">
                        {this.props.emails.map((email, index) =>
                            <EmailPreview email={email} key={index}
                                onSelectEmail={this.props.onSelectEmail}
                                onDeleteEmail={this.props.deleteMail}
                                emails={this.props.emails} 
                                updateUnreaded={this.props.updateUnreaded} 
                                setPrecentageUnread={this.props.setPrecentageUnread}/>)}
                    </ul>
            }
        </div>
    }
}
