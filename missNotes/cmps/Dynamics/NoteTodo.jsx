
import NavOnNote from '../NavOnNote.jsx'
import Todo from '../Todo.jsx'
export default class NoteTodo extends React.Component {

    componentDidMount = () => {


    }

    addTodo = () => {
        console.log('NoteTodo addTodo');
        this.props.addTodo(this.props.note.id,'' )

    }


    selectTodo = (noteId,todoId) => { 
        console.log('NoteTodo selectTodo',this.props);

        console.log('noteId,todoId',noteId,todoId);
        debugger
        this.props.selectTodo(noteId,todoId)

        
    }

    onDeleteNote = () => {
        console.log('DynamicComponent func Delete is working!!!....🗑️🗑️🗑️🗑️🗑️🗑️');
        console.log(this.props);
        this.props.onDeleteNote(this.props.note.id)

    }
    onChangeColor = (backgroundColor,id) => { 

        this.props.onChangeColor(backgroundColor,id)
    }
    
    changeInputTodo = (input,noteId,todoId) => {
        
        this.props.changeInputTodo(input,noteId,todoId);
        // this.setState({ input: ev.target.value })

    }

    pinNote =(noteId)=>{
        console.log('NotesHomePage',noteId);
        
        this.props.pinNote(noteId)
        
    }

    

    render() {
        // const { note } = this.props;
        const { note } = this.props;
        console.log('const { note }',note);
        
        return (
            <div className="border-notes" >

                <div className="notes-txt " style={{ background: note.backgroundColor }}>
                    <h2>{note.input}</h2>
                    <ul className=" list-todos ">
                        {note.todos.map((todo, index) => {
                            return <Todo className="btn " noteId={note.id} todo={todo}
                            changeInputTodo={this.changeInputTodo} selectTodo={this.selectTodo} key={index}></Todo>
                        })}
                    </ul>
                </div>
                <div className="container-note-txt-btn">
                    <NavOnNote note={note} onDeleteNote={this.onDeleteNote} pinNote={this.pinNote} onChangeColor={this.onChangeColor}></NavOnNote>
                    <span className="add-btn btn" onClick={this.addTodo}>➕</span>
                </div>

            </div>
        )
    }
}


