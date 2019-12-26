import Note from './Note.js'

export default {
    addNote,
    getNotes,
    getNotesById
};


let gNotes = []


function addNote(type,text) {
    gNotes = [...gNotes,new Note(type,text)]
    return Promise.resolve();
}

function getNotes(filterBy) {  
    
    return Promise.resolve(gNotes);
}

function getNotesById(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note)
}