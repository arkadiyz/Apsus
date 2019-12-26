import Email from './Email.js'

export default {
    getEmails,
    getEmailById,
    deleteMail
};


let gEmails = []

addMail()

function addMail() {
    gEmails = [...gEmails, new Email('Dani','Wa  sadas dasda sdkankladn ssap', 'sdasd jashdjahksjdhakjshjk jasdjkahsjkdhajkshdjk jashdjkhajksdhahdkjhasjkdhkaj jhadjhasjdhka jhasjdhjaksh jahsdjkhasjkhdjkah jkahdjhaksjdhajkhdkjahkdjahjkdhakh ajshdkjahs', false, '22/02/2019','batalinvlad@gmail.com')]
    gEmails = [...gEmails, new Email('Toni','Wass sadasdadas ap', 'sdasd jashdjahksjdhakjshjk jasdjkahsjkdhajkshdjk jashdjkhajksdhahdkjhasjkdhkaj jhadjhasjdhka jhasjdhjaksh jahsdjkhasjkhdjkah jkahdjhaksjdhajkhdkjahkdjahjkdhakh ajshdkjahs', false, '25/02/2019','batalinvlad@gmail.com')]
    gEmails = [...gEmails, new Email('Avner' ,'Wa  sadasdssa  ssap', 'sdasd jashdjahksjdhakjshjk jasdjkahsjkdhajkshdjk jashdjkhajksdhahdkjhasjkdhkaj jhadjhasjdhka jhasjdhjaksh jahsdjkhasjkhdjkah jkahdjhaksjdhajkhdkjahkdjahjkdhakh ajshdkjahs', false, '27/06/2019','batalinvlad@gmail.com')]
    gEmails = [...gEmails, new Email('Michael' ,'Wassasdasda asdasda da   ap', 'sdasd jashdjahksjdhakjshjk jasdjkahsjkdhajkshdjk jashdjkhajksdhahdkjhasjkdhkaj jhadjhasjdhka jhasjdhjaksh jahsdjkhasjkhdjkah jkahdjhaksjdhajkhdkjahkdjahjkdhakh ajshdkjahs', false, '03/12/2019','batalinvlad@gmail.com')]
    gEmails = [...gEmails, new Email('miki', 'Wassaasdasda asdasda fdsfs sp', 'sdasd jashdjahksjdhakjshjk jasdjkahsjkdhajkshdjk jashdjkhajksdhahdkjhasjkdhkaj jhadjhasjdhka jhasjdhjaksh jahsdjkhasjkhdjkah jkahdjhaksjdhajkhdkjahkdjahjkdhakh ajshdkjahs', false, '06/12/2019' ,'batalinvlad@gmail.com')]
    gEmails = [...gEmails, new Email('vlad', 'Wassap askdkasjdkajskdjkasjkdajsk', 'sdasd jashdjahksjdhakjshjk jasdjkahsjkdhajkshdjk jashdjkhajksdhahdkjhasjkdhkaj jhadjhasjdhka jhasjdhjaksh jahsdjkhasjkhdjkah jkahdjhaksjdhajkhdkjahkdjahjkdhakh ajshdkjahs', false, '06/12/2019', 'batalinvlad@gmail.com')]
    gEmails = [...gEmails, new Email('shaked','Wassapaasda ashjhajskad', 'sdasd jashdjahksjdhakjshjk jasdjkahsjkdhajkshdjk jashdjkhajksdhahdkjhasjkdhkaj jhadjhasjdhka jhasjdhjaksh jahsdjkhasjkhdjkah jkahdjhaksjdhajkhdkjahkdjahjkdhakh ajshdkjahs', false, '06/12/2019' ,'batalinvlad@gmail.com' )]
    gEmails = [...gEmails, new Email('noam','Wassap sadasdasdasdas', 'sdasd jashdjahksjdhakjshjk jasdjkahsjkdhajkshdjk jashdjkhajksdhahdkjhasjkdhkaj jhadjhasjdhka jhasjdhjaksh jahsdjkhasjkhdjkah jkahdjhaksjdhajkhdkjahkdjahjkdhakh ajshdkjahs', false, '06/12/2019', 'batalinvlad@gmail.com')]
    gEmails = [...gEmails, new Email('yoni','Wassap asdasdasda', 'sdasd jashdjahksjdhakjshjk jasdjkahsjkdhajkshdjk jashdjkhajksdhahdkjhasjkdhkaj jhadjhasjdhka jhasjdhjaksh jahsdjkhasjkhdjkah jkahdjhaksjdhajkhdkjahkdjahjkdhakh ajshdkjahs', false, '06/12/2019' , 'batalinvlad@gmail.com')]
}

function getEmails(filterBy) {
    // const emails = (!filterBy) ? [...gEmails] :
    // gEmails.filter(email => email.title.includes(filterBy.name) && email.listPrice.amount <= filterBy.price);
    return Promise.resolve(gEmails);
}

function deleteMail(mail){
    gEmails = gEmails.filter(gMail => gMail.id !== mail.id)
}

function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email)
}