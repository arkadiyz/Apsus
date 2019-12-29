// import emailsService from '../services/emailsService.js';
// import NoteTxt from './Dynamics/NoteTxt'
import DynamicComponent from './Dynamics/DynamicComponent.jsx'
// const { Link } = ReactRouterDOM


export default class NotePreview extends React.Component {


    onDeleteNote = (id) => {

        this.props.onDeleteNote(id)

    }
    changeInput = (newInput,id) => {
        
        // console.log('New Input in NotePreview ',newInput);
        this.props.onChange(newInput,id)

        
        // this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),this.filter)
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
        console.log('>>>NotePreview<<',noteId);
        this.props.pinNote(noteId)        
    }

    render() {
        const { note } = this.props;
        console.log("CHECK COLOR ",note);

        return (

            <div className="note-list-card "  >
                <DynamicComponent note={note} onChange={this.changeInput} 
                onChangeColor={this.onChangeColor} changeInputTodo={this.changeInputTodo}
                onDeleteNote={this.onDeleteNote} addTodo={this.addTodo}
                pinNote={this.pinNote} selectTodo={this.selectTodo}></DynamicComponent>

            </div>
        )
    }
}



