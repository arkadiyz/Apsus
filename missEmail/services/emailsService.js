import Email from './Email.js'
import storageService from './storageService.js'


export default {
    getEmails,
    getEmailById,
    deleteMail,
    saveMailsToStorage
};

let gEmails = [];

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// randomDate(new Date(2012, 0, 1), new Date())


function getEmails(filterBy , sortBy) {
    
    if (!filterBy) {
        // gEmails = [...(storageService.load('All Emails'))]
        // let gEmails = []
        gEmails.push(new Email('vlad' , 'hey vlad hru?' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))
        gEmails.push(new Email('danny' , 'yo danny' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))
        gEmails.push(new Email('yossi' , 'great to hear from you!' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))
        gEmails.push(new Email('avi' , 'mannnnn' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))
        gEmails.push(new Email('asaf' , 'I got..' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))
        gEmails.push(new Email('shlomi' , 'whatttttt' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))      
        gEmails.push(new Email('moti' , 'are you...' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))
        gEmails.push(new Email('yuri' , 'yooooooooo' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))      
        gEmails.push(new Email('puki' , 'pukiiii my man' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))
        gEmails.push(new Email('muki' , 'commeeee onnn mannn' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))     
        gEmails.push(new Email('shlomit' , 'I loveeee js ... not' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))
        gEmails.push(new Email('arava' , 'react is easy man.. notttt' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))      
        gEmails.push(new Email('simha' , 'nottttttt!!!!@!@!' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))
        gEmails.push(new Email('andrei' , 'Are you sure about that?' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))       
        gEmails.push(new Email('yoni' , 'Push' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))
        gEmails.push(new Email('asi' , 'Pul' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))       
        gEmails.push(new Email('tal' , 'Git andddddd' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))
        gEmails.push(new Email('aviram' , 'Commit' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))
        gEmails.push(new Email('vlad' , 'Shmuel is gay ' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))
        gEmails.push(new Email('danny' , 'heyyyyy' ,'sadjahjkdh sadjashdkj ajas dhjahjkd hajk jashdj ahkjsdhja hskjd ha djas' ,randomDate(new Date(2012, 0, 1), new Date()).toString().substr(0,21) , 'vladbatalin@gmails.com'))
        storageService.store('All Emails' , gEmails)
        return Promise.resolve(gEmails);
    }
    
    gEmails = [...(storageService.load('All Emails'))]
    
    switch (filterBy.select) {
        case 'all':
            gEmails = gEmails.filter(email => email.name.includes(filterBy.name))
            break;

        case 'unread':
            gEmails = gEmails.filter(email => email.name.includes(filterBy.name) && !email.isRead )
            break;

        case 'starred':
            gEmails = gEmails.filter(email =>email.name.includes(filterBy.name) && email.isStarred )
            break;
    }

    // filtered CHECK -> sorted yet .

    return Promise.resolve(gEmails);
}

function saveMailsToStorage(emails, key) {
    storageService.store(key, emails)
}

function deleteMail(mail) {
    gEmails = gEmails.filter(gMail => gMail.id !== mail.id)
    saveMailsToStorage(gEmails, 'All Emails')
    saveMailsToStorage(gEmails, 'Filtered Emails')
}

function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email)
}


