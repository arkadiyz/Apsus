import emailsService from '../services/emailsService.js';
import EmailDetails from '../cmps/EmailDetails.jsx';
import EmailsList from '../cmps/EmailsList.jsx';
import EmailNavBar from '../cmps/EmailNavBar.jsx' 

export default class EmailsHomePage extends React.Component {
    state = {
        emails: [],
        selectedEmail: null,
        // filterBy: null
    }

    componentDidMount = () => {
        this.loadEmails();
    }

    loadEmails = () => {
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

    onSelectEmail = (email) => {
        this.setState(() => ({ selectedEmail: email }));
    }

    onUnSelectEmail = () => { this.onSelectEmail(null) }

    render() {
        return <div className="emails-container flex">
            <EmailNavBar></EmailNavBar>
            {this.state.selectedEmail ?
                <EmailDetails email={this.state.selectedEmail} onUnSelectEmail={this.onUnSelectEmail} /> :
                <EmailsList emails={this.state.emails} onSelectEmail={this.onSelectEmail} />
            }
        </div>
    }
}

        // onFilter={this.onFilter} 
        // {/* {this.state.selectedBook ? */}
        //   {/* // <EmailsDetails email={this.state.selectedEmail} onUnSelectEmail={this.onUnSelectEmail} /> : */}