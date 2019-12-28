// import mapDynamicComponents from "./mapDynamicComponents.js"

export default class NavOnNote extends React.Component {

    onDeleteNote = (newInput, id) => {
        console.log('NavOnNote Delete is working!!!....🗑️🗑️🗑️🗑️🗑️🗑️');
        console.log(this.props);
        

        this.props.onDeleteNote(newInput, id)
        // this.props.onDeleteNote()


    }

    onChangeColor = (ev) => { 
        const backgroundColor = ev.target.value
        this.props.onChangeColor(backgroundColor,this.props.note.id)
        
        console.log(' func for chang color ',backgroundColor);
        debugger

    }
    render() {


        return [
            <span className="delete-btn btn " onClick={this.onDeleteNote}>🗑️</span>,
            <span className="pin-btn btn">📌</span>,
            <span className="save-btn btn">✔️</span>,
            <span className="color-btn btn">🎨</span>,
            <input type="color" className ="color" onChange={this.onChangeColor} />
            
        ]
    }
}