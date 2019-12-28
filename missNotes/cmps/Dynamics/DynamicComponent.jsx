
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

    onDeleteNote = (newInput,id) => {
        console.log('DynamicComponent func Delete is working!!!....🗑️🗑️🗑️🗑️🗑️🗑️');
        console.log(this.props);
        this.props.onDeleteNote(newInput,id)

    }

    changeInput = (newInput,id) => {
        
        // console.log('New Input in DynamicComponen ',newInput);
        this.props.onChange(newInput,id)

        
        // this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),this.filter)
    }

        
    onChangeColor = (backgroundColor,id) => { 

        this.props.onChangeColor(backgroundColor,id)
    }

    addTodo=(id,todos)=>{
        console.log('DynamicComponent addTodo');
        this.props.addTodo(id,todos)

    }

    selectTodo = (noteId,todoId) => { 
        console.log('DynamicComponent selectTodo',this.props);

        this.props.selectTodo(noteId,todoId)

        
    }
    
    render() {
        const { note } = this.props;
        
        // this.setComponent(note.type)
        const Cmp = this.getComponent(note.type);

        return <React.Fragment   >
            <Cmp name={note.type} note = {note} onChange={this.changeInput} 
            onChangeColor={this.onChangeColor} onDeleteNote={this.onDeleteNote}
             addTodo={this.addTodo} selectTodo={this.selectTodo}></Cmp>

        </React.Fragment>
    }
}
