// import emailsService from '../services/emailsService.js';
// import NoteTxt from './Dynamics/NoteTxt'
import DynamicComponent from './Dynamics/DynamicComponent.jsx'
// const { Link } = ReactRouterDOM


export default class NotePreview extends React.Component {


    onDeleteNote = (id) => {
        console.log('NotePreview func Delete is working!!!....🗑️🗑️🗑️🗑️🗑️🗑️');
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
        console.log('NotePreview addTodo');
        this.props.addTodo(id,todos)
    }

    selectTodo = (noteId,todoId) => { 
        console.log('NotePreview selectTodo',this.props);

        this.props.selectTodo(noteId,todoId)
    }

    render() {
        const { note } = this.props;
        console.log("CHECK COLOR ",note);
debugger
        return (

            <div className="note-list-card "  >
                <DynamicComponent note={note} onChange={this.changeInput} 
                onChangeColor={this.onChangeColor} 
                onDeleteNote={this.onDeleteNote} addTodo={this.addTodo} selectTodo={this.selectTodo}></DynamicComponent>
                {/* <NoteTxt note={note}></NoteTxt> */}

            </div>
        )
    }
}



