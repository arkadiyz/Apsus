import NotesSetvice from '../services/NotesService.js'

export default class NotesNavBar extends React.Component {
    state = {
        input: '',
        type: null,
        placeholder: null
    }

    componentDidMount = () => {
        // setType(this.state.type)
    }

    setType = (type) => {
        // this.setState({ type: 'text' })
        console.log('placenolder', type);


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
        { !this.state.type && this.setType('text') }

        const txtSelctClass = (this.state.type === 'text') ? 'add-notes-btn itemOnNav' : 'add-notes-btn';
        const imgSelctClass = (this.state.type === 'img') ? 'add-notes-btn itemOnNav' : 'add-notes-btn';
        const videoSelctClass = (this.state.type === 'video') ? 'add-notes-btn itemOnNav' : 'add-notes-btn';
        const audioSelctClass = (this.state.type === 'audio') ? 'add-notes-btn itemOnNav' : 'add-notes-btn';
        const todosSelctClass = (this.state.type === 'todos') ? 'add-notes-btn itemOnNav' : 'add-notes-btn';
        
        return <div className="nav-bar-notes flex space-between">
            <input onChange={this.onChangeInput} type="text" className="nav-bar-input " placeholder={this.state.placeholder}></input>
            <span className={txtSelctClass} onClick={() => this.setType('text')}  >TXT</span>
            <span className={imgSelctClass} onClick={() => this.setType('img')}  >🖼️</span>
            <span className={videoSelctClass} onClick={() => this.setType('video')}>🎥</span>
            <span className={audioSelctClass} onClick={() => this.setType('audio')}  >🔊</span>
            <span className={todosSelctClass} onClick={() => this.setType('todos')}  >📋</span>

            <span className="add-notes-btn" onClick={this.onAddNewNotes}>Add Note</span>
        </div>
    }
}


