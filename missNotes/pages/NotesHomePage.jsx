import NotesNavBar from '../cmps/NotesNavBar.jsx'
import NotesList from '../cmps/NotesList.jsx'
import NotesService from '../services/NotesService.js'


// import NoteTxt from '../cmps/NoteTxt.jsx'
export default class NotesHomePage extends React.Component {
    state = {
        notes: [],
        selectedNote: null,
        colorList:null

    }

    componentDidMount = () => {
        this.loadNotes();
    }

    loadNotes = () => {
        NotesService.getNotes().then(notes => {
            
            this.setState({ notes })
        })
    }


    onSelectNote = (note) => {
        this.setState(() => ({ selectedNote: note }));
    }

    onAddNewNotes = (note) => {
        console.log('addNewNotes in NotesHomePage');

        NotesService.addNote(note.type, note.input).then(() => {
            this.loadNotes();
        }
        )

    }

    onDeleteNote = (id) => {
        console.log('NotesHomePage Delete is working!!!....🗑️🗑️🗑️🗑️🗑️🗑️');
        NotesService.deleteNote(id).then((isTrue) => {
            console.log(isTrue);
            this.loadNotes();


        })
    }
    changeInput = (newInput,id) => {
        
        // console.log('New Input in DynamicComponen ',newInput);
        this.props.onChange(newInput,id)
        this.setState()

        
        // this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),this.filter)
    }

    changeInput = (newInput,id) => {
        
        console.log('New Input in NotesHomePage ',newInput);
        // this.props.onChange(newInput,id)

        NotesService.editNoteTxt(newInput,id)
        // this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),this.filter)
    }

    // onUnSelectNote = () => { this.onSelectNote(null) }
    
    onChangeColor = (backgroundColor,id) => { 

        // this.props.onChangeColor(backgroundColor,id)
        NotesService.setColorNote(backgroundColor,id).then(()=>{
            this.loadNotes()
        })

    }

    render() {
        return <React.Fragment>
            <NotesNavBar notes={this.state.notes} onAddNewNotes={this.onAddNewNotes}></NotesNavBar>

            <NotesList notes={this.state.notes}  onChange={this.changeInput} onChangeColor={this.onChangeColor} 
             onDeleteNote={this.onDeleteNote} />
        </React.Fragment>
    }
}

