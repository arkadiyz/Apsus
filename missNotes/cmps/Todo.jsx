

export default class NoteTodo extends React.Component {

    selectTodo = (ev) => {
        console.log('noteId, todoId',this.props.noteId, this.props.todo.todoId);
        
        this.props.selectTodo(this.props.noteId, this.props.todo.todoId)
    }
    changeInputTodo = (ev) => {
        
        this.props.changeInputTodo(ev.target.value ,this.props.noteId,this.props.todo.todoId);
        // this.setState({ input: ev.target.value })
        // this.props.changeInputTodo(ev.target.value , this.props.noteId,this.props.todoId)

    }

    
    render() {
        const todo = this.props.todo

        const classTodo = (todo.isSelected) ? "todo-line done " : "todo-line"
        const buttonDone = (todo.isSelected) ? "✖️" : "✔️"

        return <React.Fragment>
            <div className='todo-controller'>
                <li >
                    <textarea onChange={this.changeInputTodo} className={classTodo}
                        placeholder="enter new Todo">{todo.todo}

                    </textarea>
                </li>

                <span className="btn" onClick={this.selectTodo}>{buttonDone}</span>
            </div>
        </React.Fragment>
    }
}
// onChange={this.changeInput}
{/* <li><textarea className={classTodo} placeholder="Please enter new Todo" onChange={this.changeInput}
            onClick={this.selectTodo} style={{ background: "green" }} >{todo.todo}</textarea></li> */}