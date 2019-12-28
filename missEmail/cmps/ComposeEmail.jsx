import storageService from '../services/storageService.js'
import { getRandomID } from '../services/utils.js';


export default class ComposeEmail extends React.Component {

    state = {
        sentEmailId: '',
        sendTo: '',
        sentDate: '',
        subject: '',
        bodyText: ''
    }

    componentDidMount() {
        this.setFormDataForEdit();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.email !== this.props.email) {
            this.setFormDataForEdit();
        }
    }

    setFormDataForEdit() {
        const { email } = this.props;
        if (email) {
            this.setState({})
        }
    }

    onSend = (ev) => {
        ev.preventDefault();
        if (this.state.sendTo && this.state.subject && this.state.bodyText) {
            this.setState({
                sentEmailId: getRandomID(),
                sendTo: this.state.sendTo,
                subjuect: this.state.subjuect,
                bodyText: this.state.bodyText,
                sentDate: ( new Date() ).toLocaleDateString()
            }, () => {
                let sentMails = storageService.load('sentMails')
                if (!sentMails) {
                    sentMails = [];
                    sentMails.push(this.state)
                } else {
                    sentMails.push(this.state)
                }
                storageService.store('sentMails', sentMails)
            })
        }
    }

    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }

    render() {
        return <div className="send-email-container-wrapper fill flex justify-center">
            <div className="send-email-container fill">
                <h3 className="header-new-email">new messege</h3>
                <div className="send-email-container-user-info flex column">
                    <input className="send-mail-send-to" type="text" placeholder="to.." name="sendTo"
                        onChange={this.inputChange} defaultValue={this.state.sendTo} required></input>
                    <input className="send-mail-subject" type="text" placeholder="subject" name="subject"
                        onChange={this.inputChange} defaultValue={this.state.subject} required></input>
                </div>
                <textarea className="send-mail-body-text" rows="10" cols="60" name="bodyText"
                    onChange={this.inputChange} defaultValue={this.state.bodyText} required></textarea>

                <div className="send-email-container-send-btn flex space-between">
                    <button type="submit" onClick={this.onSend}>send</button>
                    <div className="deleteSendMail-btn">
                        <i className="fas fa-trash"></i>
                    </div>
                </div>
            </div>
        </div>
    }
}

