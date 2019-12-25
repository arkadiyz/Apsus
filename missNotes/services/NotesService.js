import Note from './Note.js'

export default {
    getNotes,
    getNotesById
};


let gNotes = []

addMail()

function addMail() {
    gNotes = [...gNotes, new Note('text', 'Vlad1 is the garbage!')]
    gNotes = [...gNotes, new Note('text', 'Vlad2 is the garbage!')]
    gNotes = [...gNotes, new Note('text', 'Vlad3 is the garbage!')]
    gNotes = [...gNotes, new Note('text', 'Vlad4 is the garbage!')]
    gNotes = [...gNotes, new Note('text', 'Vlad5 is the garbage!')]
    gNotes = [...gNotes, new Note('text', 'Vlad6 is the garbage!')]
    gNotes = [...gNotes, new Note('text', 'Vlad7 is the garbage!')]
    gNotes = [...gNotes, new Note('text', 'Vlad8 is the garbage!')]
    gNotes = [...gNotes, new Note('text', 'Vlad9 is the garbage!')]
}

function getNotes(filterBy) {
    // const emails = (!filterBy) ? [...gEmails] :
    // gEmails.filter(email => email.title.includes(filterBy.name) && email.listPrice.amount <= filterBy.price);
    return Promise.resolve(gNotes);
}

function getNotesById(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note)
}