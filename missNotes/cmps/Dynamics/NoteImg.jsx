
export default class NoteImg extends React.Component {

    componentDidMount = () => {
        console.log(this.props);
        

    }

    render() {
        const { note } = this.props;
        // this.props.note.type
        
        return (
            
            <React.Fragment>
                <img className="node-img" src={note.input}></img>
            </React.Fragment>
        )
    }
}
