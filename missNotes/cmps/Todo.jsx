

export default class NoteTodo extends React.Component {

    selectTodo = () => {
        console.log('selectTodo', this.props);
        this.props.selectTodo(this.props.noteId, this.props.todo.todoId)
    }

    render() {
        const todo = this.props.todo
        const classTodo = (todo.selectTodo)?" btn done":"btn"
        const buttonDone  = (todo.selectTodo)?"✔️":"✖️"
        console.log('classTodo',classTodo);
        debugger

        return <li><p contenteditable="true" className={classTodo} placeholder="Please enter new Todo" onChange={this.changeInput}
    style={{ background: "green" }} >{todo.todo}</p><button  onClick={this.selectTodo} >{buttonDone}</button></li>
    }
}

{/* <li><textarea className={classTodo} placeholder="Please enter new Todo" onChange={this.changeInput}
            onClick={this.selectTodo} style={{ background: "green" }} >{todo.todo}</textarea></li> */}