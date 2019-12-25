import NotesNavBar from '../cmps/NotesNavBar.jsx'
import NotesService from '../services/NotesService.js'
import NotesList from '../cmps/NotesList.jsx'
import NoteTxt from '../cmps/NoteTxt.jsx'
export default class NotesHomePage extends React.Component {
    state = {
        notes: [],
        selectedNote: null,
        // filterBy: null
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

    onUnSelectNote = () => { this.onSelectNote(null) }

    render() {
        return <div>
            <NotesNavBar></NotesNavBar>
            {/* <NoteTxt></NoteTxt> */}
     
                <NotesList notes={this.state.notes}  />
        </div>
    }
}
// onSelectEmail={this.onSelectEmail}
{/* <EmailDetails email={this.state.selectedEmail} onUnSelectEmail={this.onUnSelectEmail} /> : */ }