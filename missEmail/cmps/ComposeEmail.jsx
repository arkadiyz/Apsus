import storageService from '../services/storageService.js'
import { getRandomID } from '../services/utils.js';


export default class ComposeEmail extends React.Component {

    state = {
        sentEmailId: '',
        sentDate: '',
        subject: '',
        bodyText: ''
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
        if ((this.state.sendTo) && (this.state.subject) && (this.state.bodyText)) {
            let newSentEmail = {
                sentEmailId: getRandomID(),
                name:'you',
                sentTo: this.state.sentTo,
                subject: this.state.subject,
                bodyText: this.state.bodyText,
                sentDate: (new Date()).toLocaleDateString()
            }
            let sentMails = storageService.load('sentMails')
            if (!sentMails) {
                sentMails = [];
                sentMails.push(newSentEmail)
            } else {
                sentMails.push(newSentEmail)
            }
            storageService.store('sentMails', sentMails)
            this.props.onSetNavState('onInbox')
        }
    }


    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }

    render() {
        return <div className="send-email-container-wrapper fill flex column justify-center">
            <h3 className="header-new-email flex align-center justify-center">new messege</h3>
            <div className="send-email-container">
                <div className="send-email-container-user-info flex column">
                    <input className="send-mail-send-to" type="text" placeholder="to.." name="sendTo"
                        onChange={this.inputChange} defaultValue={this.state.sentTo} required></input>
                    <input className="send-mail-subject" type="text" placeholder="subject" name="subject"
                        onChange={this.inputChange} defaultValue={this.state.subject} required></input>
                </div>

                <div className="send-mail-textarea-btns flex column align-end">
                    <textarea className="send-mail-body-text" rows="10" cols="60" name="bodyText"
                        onChange={this.inputChange} defaultValue={this.state.bodyText} required></textarea>
                </div>
                <div className="fill flex justify-center">
                    <button className="send-mail-btn" type="submit" onClick={this.onSend}>send</button>
                </div>
                <div className="delete-send-mail-btn"><i className="fas fa-trash"></i></div>
            </div>
            <div className="footer-new-email flex"></div>
        </div>
    }
}

