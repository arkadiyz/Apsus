import Note from './Note.js'

export default {
    addNote,
    getNotes,
    editNoteTxt,
    deleteNote,
    setColorNote
};


let gNotes = []


function addNote(type,text) {
    gNotes = [...gNotes,new Note(type,text)]
    return Promise.resolve();
}

function getNotes(filterBy) {  
    
    return Promise.resolve(gNotes);
}

function getNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note)
}

function deleteNote(noteId) {
    debugger
    return getNoteById(noteId).then((DelNote)=>{
        debugger
        gNotes = gNotes.filter((note) => note.id !== DelNote.id)
        // storageService.store('gNotes', gNotes)
        return Promise.resolve(true)
    })
}
function setColorNote(color,id){
     return getNoteById(id).then((currNote)=>{
        currNote.backgroundColor = color
        console.log('currNote.backgroundColor',currNote);
        debugger
        return Promise.resolve(true)
        
    })
}
function editNoteTxt(newInput,id) {
    return getNoteById(id).then((currNote)=>{
        currNote.input = newInput

        console.log("currNote",currNote);
        console.log("gNote",gNotes);
        
    })
}