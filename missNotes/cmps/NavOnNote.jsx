// import mapDynamicComponents from "./mapDynamicComponents.js"

export default class NavOnNote extends React.Component {

    onDeleteNote = (id) => {
        console.log('NavOnNote Delete is working!!!....🗑️🗑️🗑️🗑️🗑️🗑️');
        console.log(this.props);
        

        this.props.onDeleteNote(id)
        // this.props.onDeleteNote()


    }

    onChangeColor = (ev) => { 
        const backgroundColor = ev.target.value
        this.props.onChangeColor(backgroundColor,this.props.note.id)
        
        console.log(' func for chang color ',backgroundColor);
        

    }
    pinNote =()=>{
        console.log('NavOnNote');
        debugger
        this.props.pinNote(this.props.note.id)
    }

    render() {


        return [
            <span className="delete-btn btn " onClick={this.onDeleteNote}>🗑️</span>,
            <span onClick={this.pinNote} className="pin-btn btn">📌</span>,
            // <span className="save-btn btn">✔️</span>,
            <label className="color-btn btn" htmlFor="colorInput">🎨</label>,
            <input type="color" id="colorInput" className ="color" onChange={this.onChangeColor} />
            
        ]
    }
}