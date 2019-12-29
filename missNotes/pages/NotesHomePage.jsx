import NotesNavBar from '../cmps/NotesNavBar.jsx'
import NotesList from '../cmps/NotesList.jsx'
import NotesService from '../services/NotesService.js'


export default class NotesHomePage extends React.Component {
    state = {
        notes: [],
        selectedNote: null,
        colorList:null,
        filterBy:null
    }

    componentDidMount = () => {
            this.loadNotes();
    }

    loadNotes = () => {
        console.log('this.state.filterBy',this.state.filterBy);
        
        NotesService.getNotes(this.state.filterBy).then(notes => {
            
            this.setState({ notes })
        })
    }


    onSelectNote = (note) => {
        this.setState(() => ({ selectedNote: note }));
    }

    onAddNewNotes = (note) => {

        NotesService.addNote(note.type, note.input).then(() => {
            this.loadNotes();
        }
        )
    }

    onDeleteNote = (id) => {
        
        NotesService.deleteNote(id).then((isTrue) => {
            console.log(isTrue);
            this.loadNotes();
        })
        
    }
    
    changeInput = (newInput,id) => {
        
        // console.log('New Input in DynamicComponen ',newInput);
        this.props.onChange(newInput,id)
        this.setState()
    }

    changeInput = (newInput,id) => {
        console.log(newInput);
        
        NotesService.editNoteTxt(newInput,id)
    }


    
    onChangeColor = (backgroundColor,id) => { 

        NotesService.setColorNote(backgroundColor,id).then(()=>{
            this.loadNotes()
        })

    }

    addTodo=(id,todos)=>{
        
        NotesService.addTodo(id,todos).then(()=>{
            this.loadNotes()
        })
        
    }

    selectTodo = (noteId,todoId) => { 
        console.log('noteId, todoId',noteId, todoId);
        
        NotesService.changeSelected(noteId,todoId).then(()=>{
            this.loadNotes()
            
        })        
    }

    changeInputTodo = (input,noteId,todoId) => {
        
        NotesService.changeInputTodo(input,noteId,todoId).then(()=>{
            this.loadNotes()
        })
    }

    pinNote =(noteId)=>{
        
        NotesService.changeLocationNotes(noteId).then(()=>{
            this.loadNotes()
        })
        
    }

    searchNotes=(ev)=>{
        console.log(ev.target.value);
        const field = ev.target.name;
        const value = ev.target.value 
        console.log('value',value);
        
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),this.loadNotes)
        
    }
    render() {
        
        return <React.Fragment>
            <NotesNavBar notes={this.state.notes} onAddNewNotes={this.onAddNewNotes}></NotesNavBar>
            <input name="name" className="nav-bar-notes" type="text" onChange ={this.searchNotes}placeholder="Search"></input>

            <NotesList notes={this.state.notes}  changeInput={this.changeInput} onChangeColor={this.onChangeColor} 
             onDeleteNote={this.onDeleteNote} addTodo={this.addTodo} selectTodo={this.selectTodo} 
             changeInputTodo={this.changeInputTodo} pinNote={this.pinNote}/>
        </React.Fragment>
    }
}

