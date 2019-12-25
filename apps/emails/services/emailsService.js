import Email from './Email.js'

export default {
    getEmails,
    getEmailById
};


let gEmails = []

addMail()

<<<<<<< HEAD
=======


>>>>>>> 1ebbdc63429f84ff242d4ba079aee7f84b4c8a0b
function addMail() {
    gEmails = [...gEmails, new Email('Wassap', 'Pick up!', false, '22/02/2019')]
    gEmails = [...gEmails, new Email('Wassap', 'Pick up!', false, '25/02/2019')]
    gEmails = [...gEmails, new Email('Wassap', 'Pick up!', false, '27/06/2019')]
    gEmails = [...gEmails, new Email('Wassap', 'Pick up!', false, '03/12/2019')]
    gEmails = [...gEmails, new Email('Wassap', 'Pick up!', false, '06/12/2019')]
    gEmails = [...gEmails, new Email('Wassap', 'Pick up!', false, '06/12/2019')]
    gEmails = [...gEmails, new Email('Wassap', 'Pick up!', false, '06/12/2019')]
    gEmails = [...gEmails, new Email('Wassap', 'Pick up!', false, '06/12/2019')]
    gEmails = [...gEmails, new Email('Wassap', 'Pick up!', false, '06/12/2019')]
}

function getEmails(filterBy) {
    // const emails = (!filterBy) ? [...gEmails] :
    // gEmails.filter(email => email.title.includes(filterBy.name) && email.listPrice.amount <= filterBy.price);
    return Promise.resolve(gEmails);
}

function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email)
}