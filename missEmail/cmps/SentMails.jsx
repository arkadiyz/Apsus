import storageService from '../services/storageService.js'

export default class SentMails extends React.Component {

    state = {
        sentMails: []
    }
    componentDidMount() {
        this.setData();
    }

    setData = () => {
        let sentMails = storageService.load('sentMails')
        if (!sentMails) sentMails = [];
        else {
            this.setState({ sentMails })
        }
    }

    render() {
        return <div className="sent-mails-container-wrapper fill">
            <div className="sent-mails-container-wrapper-header fill">
                <h3 className="sent-mails-header-h3">Sent Mails</h3></div>
            <div className="sent-mails-container fill">
                {
                    this.state.sentMails.map((mail, index) => {
                        return <div key={index} className="sent-mail-container flex column align-center">
                            <div className="user-info-sent-mail fill flex space-between">
                                <div className="flex align-center">
                                    <small>sent to:</small><p>{mail.name}</p>
                                    <small className="padding-left5px">from:</small><p>you</p>
                                </div>
                                
                                <div className="flex align-center">
                                    <small>at:</small><p>{mail.sentDate}</p>
                                </div>
                            </div>
                            <div className="sent-mail-body-text-contianer fill flex column">
                                <small>subj:</small><p>{mail.subject}</p>
                                <p className="sent-mail-bodyText fill">{mail.bodyText}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="sent-mails-container-wrapper-footer fill"></div>
        </div>
    }
}

