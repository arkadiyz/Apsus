import {getRandomID} from './utils.js'

export default class Email {
    constructor(name,subject, bodyText, sentAt ,email) {
            this.id = getRandomID(),
            // username hard coded !!
            this.name = name, 
            this.email = email, 
            this.subject = subject,
            this.bodyText = bodyText,
            this.isRead = false,
            this.isStarred = false,
            this.sentAt = sentAt
    }
}
