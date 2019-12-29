import Email from './Email.js'
import storageService from './storageService.js'


export default {
    getEmails,
    getEmailById,
    deleteMail,
    saveMailsToStorage,
    deletePrevRepliy,
    getRepliys
};

let gEmails = [];

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// randomDate(new Date(2012, 0, 1), new Date())


function getEmails(filterBy, sortBy) {

    if (!filterBy) {
        gEmails = storageService.load('All Emails')
        if (!gEmails) {
            gEmails = []
            gEmails.push(new Email('vlad', 'hey vlad hru?', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('danny', 'yo danny', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('yossi', 'great to hear from you!', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('avi', 'mannnnn', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('asaf', 'I got..', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('shlomi', 'whatttttt', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('moti', 'are you...', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('yuri', 'yooooooooo', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('puki', 'pukiiii my man', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('muki', 'commeeee onnn mannn', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('shlomit', 'I loveeee js ... not', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('arava', 'react is easy man.. notttt', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('simha', 'nottttttt!!!!@!@!', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('andrei', 'Are you sure about that?', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('yoni', 'Push', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('asi', 'Pul', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('tal', 'Git andddddd', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('aviram', 'Commit', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('vlad', 'Shmuel is gay ', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('danny', 'heyyyyy', 'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas', randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            storageService.store('All Emails', gEmails)
        }
        return Promise.resolve(gEmails);
    }
    
    gEmails = [...(storageService.load('All Emails'))]

    switch (filterBy.select) {
        case 'all':
            gEmails = gEmails.filter(email => email.name.includes(filterBy.name))
            break;

        case 'unread':
            gEmails = gEmails.filter(email => email.name.includes(filterBy.name) && !email.isRead)
            break;

        case 'starred':
            gEmails = gEmails.filter(email => email.name.includes(filterBy.name) && email.isStarred)
            break;
    }

    switch (sortBy) {
        case 'older':
            gEmails = gEmails.sort(function sortByDate(email1, email2) {
                return new Date(email1.sentAt) - new Date(email2.sentAt)
            })
            break;
        case 'newer':
            gEmails = gEmails.sort(function sortByDate(email1, email2) {
                return new Date(email2.sentAt) - new Date(email1.sentAt)
            })
            break;
        case 'subject':
            gEmails = gEmails.sort(function sortByDate(email1, email2) {
                return email1.subject > email2.subject ? 1 :
                    (email1.subject < email2.subject ? -1 : 0)
            })
            break;
    }

    return Promise.resolve(gEmails);
}

function saveMailsToStorage(emails, key) {
    storageService.store(key, emails)
}

function deletePrevRepliy(currRepliy) {
    let allRepliyes = storageService.load('Repliy Mails')
    allRepliyes = allRepliyes.filter(repliy => repliy.sentEmailId !== currRepliy.sentEmailId)
    storageService.store('Repliy Mails', allRepliyes)

    allRepliyes = storageService.load('sentMails')
    allRepliyes = allRepliyes.filter(repliy => repliy.sentEmailId !== currRepliy.sentEmailId)
    storageService.store('sentMails', allRepliyes)
}

function getRepliys() {
    const repliyes = storageService.load('Repliy Mails')
    return repliyes
}


function deleteMail(mail) {
    gEmails = gEmails.filter(gMail => gMail.id !== mail.id)
    saveMailsToStorage(gEmails, 'All Emails')
}

function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email)
}


function updateEmailRepliys(emailId, repliys) {

}