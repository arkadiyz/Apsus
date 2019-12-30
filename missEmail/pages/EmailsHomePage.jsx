import emailsService from '../services/emailsService.js';
import SentMails from '../cmps/SentMails.jsx';
import ComposeEmail from '../cmps/ComposeEmail.jsx';
import EmailsList from '../cmps/EmailsList.jsx';
import EmailNavBar from '../cmps/EmailNavBar.jsx';
import StarredMails from '../cmps/StarredMails.jsx';


export default class EmailsHomePage extends React.Component {
    state = {
        emails: [],
        filterBy: null,
        sortBy: 'newer',
        selectedEmail: null,
        navState: 'onInbox',
        pageState: 'onInbox',
        unReadedCount: 0,
        precentageUnread: 0
    }

    componentDidMount = () => {
        this.loadEmails();
    }

    loadEmails = () => {
        emailsService.getEmails(this.state.filterBy, this.state.sortBy).then(emails => {
            this.setUread(emails)
            this.setPrecentageUnread(emails)
            this.setState({ emails })
        })
    }

    onFilter = (filter) => {
        this.setState({ filterBy: filter }, () => {
            this.loadEmails()
        }
        );
    }

    onSort = (sort) => {
        this.setState({ sortBy: sort }, () => {
            this.loadEmails()
        }
        );
    }

    setUread = (emails) => {
        let unReadedCount = 0;
        emails.forEach(email => {
            if (!email.isRead) unReadedCount++;
        })
        this.setState({ unReadedCount })
    }

    setPrecentageUnread = (emails) => {
        const unReadCount = this.state.unReadedCount
        const emailsCount = emails.length
        if (!emailsCount) return
        let precentageUnread = Math.floor(((emailsCount - unReadCount) / emailsCount) * 100)
        this.setState({ precentageUnread })
    }

    onUpdateUnreaded = (diff) => {
        let unReadedCount = this.state.unReadedCount
        unReadedCount += diff;
        this.setState({ unReadedCount }, () => {
            this.setPrecentageUnread(this.state.emails)
        })
    }

    onSetNavState = (navState) => {
        this.setState({ navState })
    }

    onSetPage = (pageState) => {
        this.setState({ pageState })
    }

    onSelectEmail = (email) => {
        this.setState(() => ({ selectedEmail: email }));
    }

    onUnSelectEmail = () => {
        this.onSelectEmail(null)
        this.setState({ navState: 'onInbox' })
    }

    onDeleteMail = (mail) => {
        emailsService.deleteMail(mail)
        this.onUnSelectEmail();
        this.loadEmails()
    }

    render() {
        return <div className="emails-container flex">
            <EmailNavBar navState={this.state.navState}
                onSetNavState={this.onSetNavState}
                email={this.state.selectedEmail}
                onSelectEmail={this.onSelectEmail}
                unReadedCount={this.state.unReadedCount}
                precentage={this.state.precentageUnread}
                onUnSelectEmail={this.onUnSelectEmail}
                pageState={this.state.pageState}
                onSetPage={this.onSetPage} />

            {(this.state.navState === 'onInbox') ?
                <EmailsList selectedEmail={this.state.selectedEmail}
                    deleteMail={this.onDeleteMail}
                    emails={this.state.emails}
                    onSelectEmail={this.onSelectEmail}
                    onUnSelectEmail={this.onUnSelectEmail}
                    updateUnreaded={this.onUpdateUnreaded}
                    onSetPage={this.onSetPage}
                    setPrecentageUnread={this.setPrecentageUnread}
                    setUread={this.setUread}
                    onFilter={this.onFilter}
                    onSort={this.onSort}
                    sortBy={this.state.sortBy} />
                : (this.state.navState === 'onCompose') ?
                    <ComposeEmail  email={this.state.selectedEmail}
                     onUnSelectEmail={this.onUnSelectEmail}
                        onSetNavState={this.onSetNavState}
                    /> :
                    (this.state.navState === 'onSent') ?
                        <SentMails emails={this.props.emails} /> :
                        (this.state.navState === 'onStarred') ?
                            <StarredMails selectedEmail={this.state.selectedEmail}
                                deleteMail={this.onDeleteMail}
                                emails={this.state.emails}
                                onSelectEmail={this.onSelectEmail}
                                onUnSelectEmail={this.onUnSelectEmail}
                                updateUnreaded={this.onUpdateUnreaded}
                                onSetPage={this.onSetPage}
                                setPrecentageUnread={this.setPrecentageUnread}
                                setUread={this.setUread}
                                onFilter={this.onFilter}
                                onSort={this.onSort}
                                sortBy={this.state.sortBy}
                            /> : ''
            }
        </div>
    }
}
