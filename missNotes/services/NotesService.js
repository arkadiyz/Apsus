import Note from './Note.js';
import Todo from './Todo.js';
import {getRandomID} from './utils.js'

export default {
    addNote,
    getNotes,
    editNoteTxt,
    deleteNote,
    setColorNote,
    addTodo,
    changeSelected
};


let gNotes = []


function addNote(type, text) {
    
    switch (type) {

        case 'todos':
            gNotes = [...gNotes, new Todo(type,text)]
            break;

        default:
            gNotes = [...gNotes, new Note(type, text)]
            break;

    }
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
    
    return getNoteById(noteId).then((DelNote) => {
        
        gNotes = gNotes.filter((note) => note.id !== DelNote.id)
        // storageService.store('gNotes', gNotes)
        return Promise.resolve(true)
    })
}
function setColorNote(color, id) {
    return getNoteById(id).then((currNote) => {
        currNote.backgroundColor = color
        console.log('currNote.backgroundColor', currNote);
        
        return Promise.resolve(true)

    })
}
function editNoteTxt(newInput, id) {
    return getNoteById(id).then((currNote) => {
        currNote.input = newInput

        console.log("currNote", currNote);
        console.log("gNote", gNotes);

    })
}



function addTodo(id,todo) {
    return getNoteById(id).then((currNote)=>{
        currNote.todos.push({
            todoId:getRandomID(),
            todo:todo,
            isSelected:false
        })
        
        console.log('NoteService adTodo currNotes',gNotes);
        console.log('NoteService adTodo new gNotes',gNotes);
        
        return Promise.resolve()
    })   
}

function getTodoById(noteId,todoId) {
    
    return getNoteById(noteId).then((note)=>{
        console.log('note.todos',note.todos);
        
        debugger
        const todo = note.todos.find(currTodo => currTodo.todoId === todoId)
        console.log(' const todo',todo);

        debugger
        return Promise.resolve(todo)
    })

}

function changeSelected (noteId ,todoId) {

    return getTodoById(noteId,todoId).then((todo)=>{
        todo.isSelected = !todo.isSelected
        console.log('Check isSelected ',todo);
        debugger
        return Promise.resolve();
    })
    
}

