
import NavOnNote from '../NavOnNote.jsx'
import Todo from '../Todo.jsx'
export default class NoteTodo extends React.Component {

    componentDidMount = () => {


    }

    addTodo = () => {
        console.log('NoteTodo addTodo');
        this.props.addTodo(this.props.note.id, 'sadsd')
    }

    selectTodo = () => { 
        console.log('selectTodo');
        
    }


    selectTodo = (noteId,todoId) => { 
        console.log('NoteTodo selectTodo',this.props);

        this.props.selectTodo(noteId,todoId)

        
    }

    render() {
        // const { note } = this.props;
        const { note } = this.props;
        console.log('noteTodo  log for todos ', note.todos);

        
        return (
            <div className="border-notes" >

                <div className="notes-txt " style={{ background: note.backgroundColor }}>
                    <h2>{note.input}</h2>
                    <ul>
                        {note.todos.map((todo, index) => {
                            return <Todo className="btn " noteId={note.id} todo={todo} selectTodo={this.selectTodo} key={index}></Todo>
                        })}
                    </ul>
                </div>
                <div className="container-note-txt-btn">
                    <NavOnNote note={note} onDeleteNote={this.onDeleteNote} onChangeColor={this.onChangeColor}></NavOnNote>
                    <span className="add-btn btn" onClick={this.addTodo}>➕</span>
                </div>

            </div>
        )
    }
}


