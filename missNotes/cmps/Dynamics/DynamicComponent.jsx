
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
        debugger
        this.setState({ componentName: type })
    }


    render() {
        const { note } = this.props;
        debugger
        // this.setComponent(note.type)
        const Cmp = this.getComponent(note.type);

        return <React.Fragment   >
            <Cmp name={note.type} note = {note}></Cmp>

        </React.Fragment>
    }
}
