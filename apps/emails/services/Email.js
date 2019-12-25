
export default class Email {
    constructor(subject, bodyText, isRead, sentAt) {
        this.subject = subject,
            this.bodyText = bodyText,
            this.isRead = isRead,
            this.sentAt = sentAt;
    }
}
