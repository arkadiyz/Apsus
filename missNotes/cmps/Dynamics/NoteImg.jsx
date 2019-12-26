
export default class NoteImg extends React.Component {

    componentDidMount = () => {
        console.log(this.props);
        debugger
        
    }

    render() {
        const { note } = this.props;
        // this.props.note.type
        debugger
        return (
            
            <div>
                <img src={note.input}></img>
            </div>
        )
    }
}
