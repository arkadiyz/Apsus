// import storageService from '../services/storageService.js'
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
        debugger
        const { email } = this.props;
        if (email) {
            this.setState({})
        }
    }

    onSend = (ev) => {
        debugger
        ev.preventDefault();
        if (this.state.sendTo && this.state.subject && this.state.bodyText) {
            this.setState({
                sentEmailId: getRandomID(),
                sendTo: this.state.sendTo,
                subjuect: this.state.subjuect,
                bodyText: this.state.bodyText
            }, () => {

                let sentMails = storageService.load('sentMails')
                if (!sentMails) {
                    newSentMails = [];
                    newSentMails.push([this.state])
                } else {
                    newSentMails.push([this.state])
                }
                storageService.store('sentMails', newSentMails)
            } )
        }
    }

    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }

    render() {
        return <div className="send-email-container">
            <div className="send-email-container-user-info">
                <h3 className="header-new-email">new messege</h3>
                <input className="send-mail-send-to" type="text" placeholder="to.." name="sendTo"
                    onChange={this.inputChange} defaultValue={this.state.sendTo} required></input>
                <input className="send-mail-subject" type="text" placeholder="subject" name="subject"
                    onChange={this.inputChange} defaultValue={this.state.subject} required></input>
                <textarea className="send-mail-body-text" rows="10" cols="60" name="bodyText"
                    onChange={this.inputChange} defaultValue={this.state.bodyText} required></textarea>
            </div>

            <div className="send-email-container-send-btn">
                <button type="submit" onClick={this.onSave}>send</button>
                <div className="deleteSendMail-btn">
                    <i className="fas fa-trash"></i>
                </div>
            </div>
        </div>
    }
}

