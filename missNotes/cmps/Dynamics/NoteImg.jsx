import NavOnNote from '../NavOnNote.jsx'
export default class NoteImg extends React.Component {

    componentDidMount = () => {
        console.log(this.props);
        

    }

    onDeleteNote = () => {
        console.log('Note Img func Delete is working!!!....🗑️🗑️🗑️🗑️🗑️🗑️');
        console.log(this.props);
        

        this.props.onDeleteNote(this.props.note.id)


    }

    pinNote =(noteId)=>{
        console.log('NotesHomePage',noteId);
        this.props.pinNote(noteId)  
    }

    onChangeColor = (backgroundColor,id) => { 

        this.props.onChangeColor(backgroundColor,id)
    }

    render() {
        const { note } = this.props;
        // this.props.note.type
        
        return (
            
            <div  className="border-notes"  >
                <img className="node-img" src={note.input}  style={{background: note.backgroundColor}}></img>
                <div className="container-note-txt-btn" >
                    <NavOnNote note = {note} onDeleteNote={this.onDeleteNote}
                    pinNote={this.pinNote} onChangeColor={this.onChangeColor}></NavOnNote>
                </div>
            </div>
        )
    }
}
