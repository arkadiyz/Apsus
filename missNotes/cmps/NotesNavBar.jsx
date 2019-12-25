export default class NotesNavBar extends React.Component {
    
    
    render() {
        return <div className="nav-bar-notes flex space-between">
        <input type="text" className="nav-bar-input "></input>
        <span className = "add-notes-btn" onClick={this.addNotesTxt}>🖼️</span>
        <span className = "add-notes-btn">🎥</span>
        <span className = "add-notes-btn">🔊</span>
        <span className = "add-notes-btn">Add Note</span>
    </div>
    }
}


  