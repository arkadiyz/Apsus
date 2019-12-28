import storageService from '../services/storageService.js'

export default class SentMails extends React.Component {

    render() {
        let sentMails = storageService.load('sentMails')
        if (!sentMails) sentMails = [];
        return <div className="sent-mails-container-wrapper fill">
            <div className="sent-mails-container fill">
                {
                    sentMails.map((mail, index) => {
                        return <div key={index} className="sent-mail-container flex column align-center">
                            <div className="flex">
                                <p>{mail.sendTo}</p>
                                <p>{mail.sentDate}</p>
                            </div>
                            <p>{mail.subject}</p>
                            <p className="sent-mail-bodyText">{mail.bodyText}</p>
                        </div>
                    })
                }
            </div>
        </div>
    }
}

