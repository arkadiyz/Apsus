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
                

                break;
            case 'img':
                this.setState({ placeholder: 'Please enter img url' })
                
                break;
            case 'video':
                this.setState({ placeholder: 'Please enter video' })
                
                break;
            case 'audio':
                this.setState({ placeholder: 'Please enter audio ' })
                
                break;

                case 'todos':
                    this.setState({ placeholder: 'Please enter first todos  ' })
                    
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
        
        console.log('onChangeInputqqq', ev);
        // ev.preventDefault();
        this.props.onAddNewNotes(this.state)

        console.log('addNewNotes in NotesNavBar', this.props);

    }
    render() {
        return <div className="nav-bar-notes flex space-between">
            <input onChange={this.onChangeInput} type="text" className="nav-bar-input " placeholder={this.state.placeholder}></input>
            <span onClick={() => this.setType('text')} className="add-notes-btn" >TXT</span>
            <span onClick={() => this.setType('img')} className="add-notes-btn" >🖼️</span>
            <span onClick={() => this.setType('video')} className="add-notes-btn">🎥</span>
            <span onClick={() => this.setType('audio')} className="add-notes-btn" >🔊</span>
            <span onClick={() => this.setType('todos')} className="add-notes-btn" >📋</span>
            
            <span className="add-notes-btn" onClick={this.onAddNewNotes}>Add Note</span>
        </div>
    }
}


