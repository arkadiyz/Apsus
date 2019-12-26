import NotesNavBar from '../cmps/NotesNavBar.jsx'
import NotesList from '../cmps/NotesList.jsx'
import NotesService from '../services/NotesService.js'

// import NoteTxt from '../cmps/NoteTxt.jsx'
export default class NotesHomePage extends React.Component {
    state = {
        notes: [],
        selectedNote: null,

    }

    componentDidMount = () => {
        this.loadNotes();
    }

    loadNotes = () => {
        NotesService.getNotes().then(notes => {
            debugger
            this.setState({ notes })
        })
    }

    // onFilter = (filter) => {
    //     this.setState({ filterBy: filter }, () => {
    //         this.loadBooks()
    //     }
    //     );
    // }

    onSelectNote = (note) => {
        this.setState(() => ({ selectedNote: note }));
    }

    onAddNewNotes =(note)=>{
        console.log('addNewNotes in NotesHomePage');

        NotesService.addNote(note.type,note.input).then(() => {
            this.loadNotes();            
        }
            )
             
    }

    onUnSelectNote = () => { this.onSelectNote(null) }

    render() {
        return <div>
            <NotesNavBar  notes={this.state.notes}  onAddNewNotes={this.onAddNewNotes}></NotesNavBar>
            {/* <NoteTxt></NoteTxt> */}
     
                <NotesList notes={this.state.notes}  />
        </div>
    }
}

