import emailsService from '../services/emailsService.js';
// import EmailDetails from '../cmps/EmailDetails.jsx';
import EmailsList from '../cmps/EmailsList.jsx';

export default class EmailHomePage extends React.Component {
    state = {
        emails: [],
        selectedEmail: null,
        // filterBy: null
    }

    componentDidMount = () => {
        debugger
        this.loadEmails();
    }

    loadEmails = () => {
        debugger
        emailsService.getEmails().then(emails => {
            this.setState({ emails })
        })
    }

    // onFilter = (filter) => {
    //     this.setState({ filterBy: filter }, () => {
    //         this.loadBooks()
    //     }
    //     );
    // }

    // onSelectEmail = (email) => {
    //     this.setState(() => ({ selectedEmail: Email }));
    // }

    // onUnSelectEmail = () => { this.onSelectEmail(null) }

    render() {
        return <div className="emails-container">
            <EmailsList emails={this.state.emails} />
        </div>
    }
}

// onSelectEmail={this.onSelectEmail}
        // onFilter={this.onFilter} 
        // {/* {this.state.selectedBook ? */}
        //   {/* // <EmailsDetails email={this.state.selectedEmail} onUnSelectEmail={this.onUnSelectEmail} /> : */}