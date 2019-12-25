import emailsService from "../services/emailsService.js"
import EmailDetails from "../cmps/EmailDetails.jsx";

export default class SelectedEmailPage extends React.Component {


    state = {
        email: null,
    }

    componentDidMount() {
        this.loadEmail();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadEmail();
        }

    }

    loadEmail() {
        const { id } = this.props.match.params;
        emailsService.getEmailById(id).then(email => {
            this.setState({ email })
        })
    }

    goBack = () => {
        this.props.history.push('/emailshomepage')
    }

    //TO DO LAODING MAKE BETTER CSS

    render() {
        if (!this.state.email) return <div className="loading">Loading...</div>
        return <EmailDetails key="2" email={this.state.email} goBack={this.goBack} />
    }
}






