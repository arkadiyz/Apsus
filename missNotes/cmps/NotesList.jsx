import NotePreview from './NotePreview.jsx';

export default class NotesList extends React.Component {

    onDeleteNote = (id) => { 
        console.log('NotesList func Delete is working!!!....🗑️🗑️🗑️🗑️🗑️🗑️');
        this.props.onDeleteNote(id);
    }

    changeInput = (newInput,id) => {
        
        // console.log('New Input in NotesHomePage ',newInput);
        this.props.onChange(newInput,id)

        
        // this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),this.filter)
    }

        
    onChangeColor = (backgroundColor,id) => { 

        this.props.onChangeColor(backgroundColor,id)
    }

    render() {
        return (
            <div className="continer-notes">
                {this.props.notes.map((note, index) => <NotePreview note={note} key={index} 
                onChangeColor={this.onChangeColor} onChange={this.changeInput} onDeleteNote={this.onDeleteNote} />)}
            </div>
        );
    }

}
