import storageService from '../services/storageService.js'
import { getRandomID } from '../services/utils.js';


export default class ComposeEmail extends React.Component {

    state = {
        sentEmailId: '',
        name: '',
        sendTo: '',
        sentDate: '',
        bodyText: '',
        isEdit: false
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
            this.setState({
                sentEmailId: getRandomID(),
                sendTo: email.id,
                name: email.name
            })
        }
    }

    onSend = (ev) => {
        ev.preventDefault();
        if (this.state.sendTo && this.state.bodyText) {
            let newRepliy = {
                sentEmailId: getRandomID(),
                name: this.state.name,
                sendTo: this.state.sendTo,
                subject:'none',
                bodyText: this.state.bodyText,
                isEdit: false,
                sentDate: (new Date()).toLocaleDateString()
            };
                let repliyedMails = storageService.load('Repliy Mails')
                if (!repliyedMails) {
                    repliyedMails = [];
                    repliyedMails.push(newRepliy)
                } else {
                    repliyedMails.push(newRepliy)
                }

                storageService.store('Repliy Mails', repliyedMails)

                let sentMails = storageService.load('sentMails')
                if (!sentMails) {
                    sentMails = [];
                    sentMails.push(newRepliy)
                } else {
                    sentMails.push(newRepliy)
                }

                storageService.store('sentMails', sentMails)
                this.props.updateRepliyedEmails(repliyedMails);
        }
    }

    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }

    render() {
        return <div className="repliy-email-container-wrapper fill flex justify-center">
            <div className="repliy-email-container fill">
                <h3 className="header-new-email fill text-center">Replay</h3>
                <div className="repliy-text-area-container flex justify-center">
                    <textarea className="repliy-mail-body-text " rows="10" cols="60" name="bodyText"
                        onChange={this.inputChange} defaultValue={this.state.bodyText} required></textarea>
                </div>

                <div className="repliy-email-container-send-btn flex justify-center">
                    <button className="repliy-send-btn" type="submit" onClick={this.onSend}>Repliy</button>
                </div>
            </div>
        </div>
    }
}

