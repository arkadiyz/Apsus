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
            gEmails.push(new Email('vlad', 'hey how are you???',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('danny', 'hey man ! hope you are doing great!',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('yossi', 'great to hear from you!',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('avi', 'mannnnn I was ...',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('asaf', 'I got something to tell you !!',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('shlomi', 'whatttttt Are you okey???',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('moti', 'what are you doing sunday???',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('yuri', 'yooooooooo Keep the hard work !!!',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('puki', 'hey here is puki! where is muki?',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('muki', 'hey here is muki! where is puki? ',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('shlomit', 'I loveeee js ... not',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('arava', 'react is easy man.. notttt',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('simha', 'hey vlad how are you???',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('andrei', 'Are you sure about that?',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('yoni', 'Push the fucking gittttttt',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('asi', 'Pull firstttt !!!!',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('tal', 'make sure you typed git add . first !!',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('aviram', 'Commit !!! you forgot commit! ',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('vlad', 'Shmuel is gay',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
            gEmails.push(new Email('danny', 'hey this is danny from linkdin',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, randomDate(new Date(2012, 0, 1), new Date()), 'vladbatalin@gmails.com'))
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