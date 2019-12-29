
import mapDynamicComponents from "./mapDynamicComponents.js"

export default class DynamicComponent extends React.Component {
    state = {
        componentName: '',
        note: {}
    }

    componentDidMount = () => {
        console.log(this.props);
        

    }
    getComponent(type) {

        return mapDynamicComponents[type]
    }

    setComponent = (type) => {
        console.log(type);
        
        this.setState({ componentName: type })
    }

    onDeleteNote = (noteId) => {
        console.log(this.props);
        this.props.onDeleteNote(noteId)
        
    }

    changeInput = (newInput,id) => {
        
        // console.log('New Input in DynamicComponen ',newInput);
        this.props.onChange(newInput,id)

        
        // this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),this.filter)
    }

        
    onChangeColor = (backgroundColor,id) => { 
console.log('!!!', backgroundColor, id)

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
        console.log('DynamicComponent',noteId);
        this.props.pinNote(noteId)
    }

    render() {
        const { note } = this.props;
        
        // this.setComponent(note.type)
        const Cmp = this.getComponent(note.type);

        return <React.Fragment>
            <Cmp name={note.type} note = {note} onChange={this.changeInput} 
            onChangeColor={this.onChangeColor} onDeleteNote={this.onDeleteNote}
             addTodo={this.addTodo} selectTodo={this.selectTodo}
             pinNote={this.pinNote} changeInputTodo={this.changeInputTodo}></Cmp>

        </React.Fragment>
    }
}
