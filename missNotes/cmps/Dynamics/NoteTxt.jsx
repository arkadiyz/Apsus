
export default class NoteTxt extends React.Component {

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
                <h2>{note.input}</h2>
                <p>{note.input}</p>
            </div>
        )
    }
}




