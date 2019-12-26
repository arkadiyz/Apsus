import NotesSetvice from '../services/NotesService.js'

export default class NotesNavBar extends React.Component {
    state = {
        input: '',
        type: null,
        placeholder: null
    }

    setType = (type) => {
        // this.setState({ type: 'text' })
        console.log('placenolder', type);
        
        debugger
        switch (type) {
            case 'text':
                this.setState({ placeholder: 'Please enter Text' })
                debugger

                break;
            case 'img':
                this.setState({ placeholder: 'Please enter img url' })
                debugger
                break;
            case 'video':
                this.setState({ placeholder: 'Please enter video Text' })
                debugger
                break;
            case 'audio':
                this.setState({ placeholder: 'Please enter audio Text' })
                debugger
                break;
            default:
                break;
        }
        this.setState({ type })

    }

    onChangeInput = (ev) => {
        console.log('onChangeInput', ev.target.value);
        this.setState({ input: ev.target.value })
    }

    onAddNewNotes = (ev) => {
        debugger
        console.log('onChangeInputqqq', ev);
        // ev.preventDefault();
        this.props.onAddNewNotes(this.state)

        console.log('addNewNotes in NotesNavBar', this.props);

    }
    render() {
        return <div className="nav-bar-notes flex space-between">
            <input onChange={this.onChangeInput} type="text" className="nav-bar-input " placeholder={this.state.placeholder}></input>
            <span typeInput="text" onClick={() => this.setType('text')} className="add-notes-btn" >TXT</span>
            <span typeInput="img" onClick={() => this.setType('img')} className="add-notes-btn" >🖼️</span>
            <span typeInput="video" onClick={() => this.setType('video')} className="add-notes-btn">🎥</span>
            <span typeInput="audio" onClick={() => this.setType('audio')} className="add-notes-btn" >🔊</span>
            <span className="add-notes-btn" onClick={this.onAddNewNotes}>Add Note</span>
        </div>
    }
}


