import {getRandomID} from './utils.js'

export default class Email {
    constructor(subject, bodyText, isRead, sentAt) {
            this.id = getRandomID(),
            // username hard coded !!
            this.username = 'dani', 
            this.subject = subject,
            this.bodyText = bodyText,
            this.isRead = isRead,
            this.sentAt = sentAt
    }
}
