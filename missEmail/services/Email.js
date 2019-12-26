import {getRandomID} from './utils.js'

export default class Email {
    constructor(name,subject, bodyText, isRead, sentAt ,email) {
            this.id = getRandomID(),
            // username hard coded !!
            this.name = name, 
            this.email = email, 
            this.subject = subject,
            this.bodyText = bodyText,
            this.isRead = isRead,
            this.sentAt = sentAt
    }
}
