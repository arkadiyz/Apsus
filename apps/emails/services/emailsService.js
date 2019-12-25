import Email from './Email.js'

export default {

    getEmails
};


let gEmails =[]

addMail()

function getEmails() {
    return gEmails
}

function addMail() {
    debugger
    gEmails = [...gEmails ,new Email('Wassap','Pick up!',false,'22/02/2019')]
    gEmails = [...gEmails ,new Email('Wassap','Pick up!',false,'25/02/2019')]
    gEmails = [...gEmails ,new Email('Wassap','Pick up!',false,'27/06/2019')]
    gEmails = [...gEmails ,new Email('Wassap','Pick up!',false,'03/12/2019')]
    gEmails = [...gEmails ,new Email('Wassap','Pick up!',false,'06/12/2019')]
    gEmails = [...gEmails ,new Email('Wassap','Pick up!',false,'06/12/2019')]
    gEmails = [...gEmails ,new Email('Wassap','Pick up!',false,'06/12/2019')]
    gEmails = [...gEmails ,new Email('Wassap','Pick up!',false,'06/12/2019')]
    gEmails = [...gEmails ,new Email('Wassap','Pick up!',false,'06/12/2019')]
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
