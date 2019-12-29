import { urlForVideo } from '../../services/utils.js'
import NavOnNote from '../NavOnNote.jsx'
export default class NoteVideo extends React.Component {

    componentDidMount = () => {


    }

    pinNote = (noteId) => {
        console.log('NotesHomePage', noteId);

        this.props.pinNote(noteId)

    }

    onChangeColor = (backgroundColor,id) => { 

        this.props.onChangeColor(backgroundColor,id)
    }

    render() {
        const { note } = this.props;
        // this.props.note.type
        const url = urlForVideo(note.input)


        return (

            <div className ="border-notes">
                <iframe src={url} frameBorder="2" ></iframe>

                <div className="container-note-txt-btn">
                    <NavOnNote note={note} onDeleteNote={this.onDeleteNote}
                        pinNote={this.pinNote} onChangeColor={this.onChangeColor}></NavOnNote>
                </div>


            </div>
        )
    }
}


