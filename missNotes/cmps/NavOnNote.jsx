// import mapDynamicComponents from "./mapDynamicComponents.js"

export default class NavOnNote extends React.Component {


componentDidMount(){
    console.log(this.props.note.id,'11111');
    
}


    onDeleteNote = (id) => {
        console.log('NavOnNote Delete is working!!!....🗑️🗑️🗑️🗑️🗑️🗑️');
        console.log(this.props);
        

        this.props.onDeleteNote(id)
        // this.props.onDeleteNote()


    }

    onChangeColor = (id, ev) => { 
        const backgroundColor = ev.target.value
        
        console.log('2222222222',id, ev );
        
        this.props.onChangeColor(backgroundColor,this.props.note.id)
        
        

    }
    pinNote =()=>{
        console.log('NavOnNote');
        
        this.props.pinNote(this.props.note.id)
    }

    render() {


        return [
            <span className="delete-btn btn " onClick={this.onDeleteNote}>🗑️</span>,
            <span onClick={this.pinNote} className="pin-btn btn">📌</span>,
            // <span className="save-btn btn">✔️</span>,
            <label className="color-btn btn"  htmlFor="colorInput">🎨</label>,
            <input type="color" id="colorInput" className ="color" onChange={()=>this.onChangeColor(this.props.note.id, event)} />
            
        ]
    }
}