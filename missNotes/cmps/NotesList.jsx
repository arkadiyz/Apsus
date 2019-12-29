import NotePreview from './NotePreview.jsx';

export default class NotesList extends React.Component {

    onDeleteNote = (id) => { 
        
        this.props.onDeleteNote(id);
    }

    changeInput = (newInput,id) => {
  
        
        this.props.onChange(newInput,id)

    }

        
    onChangeColor = (backgroundColor,id) => { 

        this.props.onChangeColor(backgroundColor,id)
    }

    addTodo=(id,todos)=>{
        
        this.props.addTodo(id,todos)
    }

    selectTodo = (noteId,todoId) => { 

        this.props.selectTodo(noteId,todoId)
    }

    changeInputTodo = (input,noteId,todoId) => {
        
        this.props.changeInputTodo(input,noteId,todoId);
        // this.setState({ input: ev.target.value })

    }

    pinNote =(noteId)=>{
        console.log('NoteList',noteId);
        this.props.pinNote(noteId)

    }

    render() {
        console.log('NoteLKist render Notes:',this.props.notes);
        
        return (
            <div className="continer-notes" >
                {this.props.notes.map((note, index) => <NotePreview onChange={this.changeInputTodo} note={note} key={index} 
                onChangeColor={this.onChangeColor} changeInputTodo={this.changeInputTodo} 
                onDeleteNote={this.onDeleteNote} addTodo={this.addTodo} 
                pinNote={this.pinNote} selectTodo={this.selectTodo}/>)}
            </div>
        );
    }

}
