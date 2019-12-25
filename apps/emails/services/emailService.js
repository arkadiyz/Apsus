import Email from './Email.js'

export default {
    addMail,
    getEmails
};


gEmails =[]



function getEmails() {
    return gEmails
}

function addMail(googleBook) {
    debugger
    gEmails = [...gEmails ,new Email('Wassap','Pick up!',false,'VLAD')]
    gEmails = [...gEmails ,new Email('Wassap','Pick up!',false,'DANI')]
    gEmails = [...gEmails ,new Email('Wassap','Pick up!',false,'GIL')]
    gEmails = [...gEmails ,new Email('Wassap','Pick up!',false,'SHLOMI')]
    gEmails = [...gEmails ,new Email('Wassap','Pick up!',false,'BEN')]
}

function getEmails(filterBy) {
    // const emails = (!filterBy) ? [...gEmails] :
    // gEmails.filter(email => email.title.includes(filterBy.name) && email.listPrice.amount <= filterBy.price);
    return Promise.resolve(gEmails);
}

// function getBookById(emailId) {
//     const email = gEmails.find(email => email.id === emailId)
//     return Promise.resolve(email)
// }
