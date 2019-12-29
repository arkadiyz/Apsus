import Note from './Note.js';
import Todo from './Todo.js';
import { getRandomID } from './utils.js'
import storageService from './storageService.js'

export default {
    addNote,
    getNotes,
    editNoteTxt,
    deleteNote,
    setColorNote,
    addTodo,
    changeSelected,
    changeInputTodo,
    changeLocationNotes
};


let gNotes = []

addData();

function addData() {

    if (storageService.load('gNotes') === 'undefined' || storageService.load('gNotes') === null) {
        addNote('text', 'משמרות לבשועה הבא חמישי שישי שבת לילה ').then(() => {
        })

        addNote('img', 'https://www.pitria.com/wp-content/uploads/2015/12/%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA-%D7%9E%D7%93%D7%94%D7%99%D7%9E%D7%95%D7%AA-2015-%D7%A4%D7%9C%D7%99%D7%A7%D7%A8-8.jpg ')
            .then(() => {
            })
        addNote('img', 'https://images1.calcalist.co.il/PicServer3/2019/09/15/934981/1P.jpg').then(() => {
            console.log("gNotes".gNotes);
        })
        addNote('todos', 'משימוש היום').then(() => {



        })


    } else {

        gNotes = storageService.load('gNotes')
    }

}

function addNote(type, text) {

    switch (type) {

        case 'todos':
            gNotes = [...gNotes, new Todo(type, text)]
            break;

        default:
            gNotes = [...gNotes, new Note(type, text)]
            break;

    }
    storageService.store('gNotes', gNotes)
    return Promise.resolve();
}

function getNotes(filterBy) {


    gNotes = storageService.load('gNotes')
    return Promise.resolve(gNotes);
}

function getNoteById(noteId) {

    // const note = gNotes.find(note => note.id === noteId)
    const note = storageService.load('gNotes').find(note => note.id === noteId)

    return Promise.resolve(note)
}
function getIndexNoteById(noteId){
    const indexNode = storageService.load('gNotes').findIndex(note => note.id === noteId)

    return Promise.resolve(indexNode)
}
function deleteNote(noteId) {

    return getNoteById(noteId).then((DelNote) => {
        console.log(DelNote);
        
        
        gNotes = gNotes.filter((note) => note.id !== DelNote.id)
        // gNotes = gNotes.map(tmpNote => tmpNote.id === note.id ? note : tmpNote)

        storageService.store('gNotes', gNotes)

        return Promise.resolve(true)
    })
}
function setColorNote(color, id) {
    return getNoteById(id).then((currNote) => {
        currNote.backgroundColor = color
        gNotes = gNotes.map(tmpNote => tmpNote.id === currNote.id ? currNote : tmpNote)

        storageService.store('gNotes', gNotes)

        return Promise.resolve(true)

    })
}
function editNoteTxt(newInput, id) {
    return getNoteById(id).then((currNote) => {
        currNote.input = newInput
        gNotes = gNotes.map(tmpNote => tmpNote.id === currNote.id ? currNote : tmpNote)
        storageService.store('gNotes', gNotes)
    })
}



function addTodo(id, todo) {
    return getNoteById(id).then((currNote) => {
        currNote.todos.push({
            todoId: getRandomID(),
            todo: todo,
            isSelected: false
        })


        gNotes = gNotes.map(tmpNote => tmpNote.id === currNote.id ? currNote : tmpNote)
        console.log('Add Todo on load', currNote);

        storageService.store('gNotes', gNotes)



        return Promise.resolve()
    })
}

function getTodoById(noteId, todoId) {
console.log('noteId, todoId',noteId, todoId);

    return getNoteById(noteId).then((note) => {
        const todo = note.todos.find(currTodo => currTodo.todoId === todoId)

        return Promise.resolve(todo)
    })

}


function changeSelected(noteId, todoId) {
    console.log('noteId, todoId',noteId, todoId);
    debugger
    return getTodoById(noteId, todoId).then((todo) => {
        todo.isSelected = !todo.isSelected

        gNotes = gNotes.map((tmpNote) => {
            
            if (tmpNote.id === noteId) {
                tmpNote.todos = tmpNote.todos.map((tmpTodo) => {
                    return tmpTodo.todoId === todoId ? todo : tmpTodo
                })
            }
            return tmpNote

        })
        storageService.store('gNotes', gNotes)
    })

}

function changeInputTodo(input, noteId, todoId) {

    return getTodoById(noteId, todoId).then((todo) => {
        todo.todo = input

        gNotes = gNotes.map((tmpNote) => {
            
            if (tmpNote.id === noteId) {
                tmpNote.todos = tmpNote.todos.map((tmpTodo) => {
                    return tmpTodo.todoId === todoId ? todo : tmpTodo
                })
            }
            return tmpNote

        })
        storageService.store('gNotes', gNotes)
    })

}

function changeLocationNotes(noteId) {
    debugger
    return getIndexNoteById(noteId).then((indexNode)=>{
        debugger
        console.log('1  ',gNotes);
        var currNote = gNotes.splice(indexNode,1)
        console.log('2 ',gNotes);
        debugger
        gNotes.unshift(currNote[0]);
        console.log('3v',gNotes);
        debugger
        storageService.store('gNotes', gNotes)
    })
}
