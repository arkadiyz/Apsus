import storageService from '../services/storageService.js'
import emailsService from '../services/emailsService.js'

export default class RepliyedEmails extends React.Component {

    state = {
        repliys: [],
        bodyText: '',
        sendTo: '',
        name: '',
        isOnReply: false
    }
    componentDidMount() {
        this.setData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.repliys !== this.props.repliys) {
            this.setData();
        }
    }

    setData = () => {
        let currEmail = this.props.email
        let repliyedMails = this.props.getRepliys();
        if (!repliyedMails) repliyedMails = [];
        else {
            repliyedMails = repliyedMails.filter(repliy => {
                console.log('send', repliy.sendTo);
                console.log('currid', currEmail.id);


                repliy.sendTo === currEmail.id
                this.setState({
                    repliys: repliyedMails,
                    sendTo: this.props.email.id,
                    name: this.props.email.name
                })
            })
        }
    }

    editRepliy = (repliy) => {
        repliy.isEdit = !repliy.isEdit;
        storageService.store('Repliy Mails', this.state.repliys)
        this.setState({ isOnReply: !this.state.isOnReply })
    }


    onSave = (repliy) => {
        event.preventDefault();
        if (this.state.bodyText) {
            emailsService.deletePrevRepliy(repliy)
            let newRepliys = storageService.load('Repliy Mails')
            if (!newRepliys) newRepliys = []
            let newRepliy = {
                sentEmailId: repliy.sentEmailId,
                sendTo: repliy.sendTo,
                bodyText: this.state.bodyText,
                name: this.state.name,
                isEdit: false,
                sentDate: (new Date()).toLocaleDateString()
            }
            newRepliys.push(newRepliy)
            storageService.store('Repliy Mails', newRepliys)

            let sentMails = storageService.load('sentMails')

            if (!sentMails) {
                sentMails = [];
                sentMails.push(newRepliy)
            } else {
                sentMails.push(newRepliy)
            }
            storageService.store('sentMails', sentMails)
        }

        this.setData()

    }

    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }

    render() {
        return <div className="sent-mails-container-wrapper fill">
            <div className="sent-mails-container fill">
                {
                    this.state.repliys.map((repliy, index) => {
                        return <div key={index} className="sent-mail-container flex column align-center">
                            <div className="sent-mail-header fill"></div>
                            <div className="sent-mail-user-info fill flex space-between">
                                <div className="flex justify-center">
                                    <small>from:</small> <p>you</p>
                                </div>
                                <div className="flex justify-center">
                                    <div className="repliy-date flex">
                                        <small> at:</small> <p>{repliy.sentDate}</p>
                                    </div>
                                    <i className="edit-repliy-button fas fa-edit" onClick={() => this.editRepliy(repliy)}></i>
                                </div>
                            </div>
                            <div className="sent-mail-text-container flex column fill">
                            <small> messege:</small> 
                            <p className="sent-mail-body-text fill">{repliy.bodyText}</p>
                            </div>
                            {
                                (repliy.isEdit) ?
                                    <div className="edit-repliy-container">
                                        <div className="send-email-container edit-container fill flex column">
                                            <h3 className="fill header-new-email edit-header">Edit</h3>
                                            <textarea className="send-mail-body-text" rows="10" cols="60" name="bodyText"
                                                onChange={this.inputChange} defaultValue={this.state.bodyText} required></textarea>
                                            <div className="send-email-container-send-btn flex space-between justify-center">
                                                <button className="save-edit-changes" type="submit" onClick={() => this.onSave(repliy)}>save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                    : ''
                            }
                        </div>
                    })
                }
            </div>
            <div className="sent-mail-footer"></div>
        </div>
    }
}
