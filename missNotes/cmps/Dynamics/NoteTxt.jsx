import NavOnNote from '../NavOnNote.jsx'
export default class NoteTxt extends React.Component {

    componentDidMount = () => {
        console.log(this.props);


    }


    changeInput = (ev) => {
        // const field = ev.target.name;
        const value = ev.target.value;
        // console.log(value);
        this.props.onChange(value, this.props.note.id)
        // this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),this.filter)
    }

    onDeleteNote = () => {
        console.log('Last func Delete is working!!!....🗑️🗑️🗑️🗑️🗑️🗑️');
        console.log(this.props);
        

        this.props.onDeleteNote(this.props.note.id)


    }

    
    onChangeColor = (backgroundColor,id) => { 

        this.props.onChangeColor(backgroundColor,id)
    }
    pinNote =(noteId)=>{
        console.log('NotesHomePage',noteId);
        
        this.props.pinNote(noteId)
        
    }

    render() {
        const { note } = this.props;
        // this.props.note.type
        return (

            // <div className="border-notes ">
            <div className="border-notes">
                <textarea className="notes-txt" onChange={this.changeInput}  style={{background: note.backgroundColor}} >{note.input}</textarea>
                <div className="container-note-txt-btn">
                    <NavOnNote note = {note} onDeleteNote={this.onDeleteNote} pinNote={this.pinNote} onChangeColor={this.onChangeColor}></NavOnNote>
                </div>
            </div>
        )
    }
}




