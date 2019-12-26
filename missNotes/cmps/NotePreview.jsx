// import emailsService from '../services/emailsService.js';
import NoteTxt from './Dynamics/NoteTxt'
import DynamicComponent from './Dynamics/DynamicComponent.jsx'
const { Link } = ReactRouterDOM


export default class NotePreview extends React.Component {

    handleClick = () => {
        this.props.onSelectNote(this.props.note);
        
        
    }

    render() {
        const { note } = this.props;
        debugger
        return (
            <Link className="notes-txt" to={`/noteshomepage/${note.id}`}>
            <div className="note-list-card " onClick={this.handleClick} >
            <DynamicComponent note ={note}></DynamicComponent>
                {/* <NoteTxt note={note}></NoteTxt> */}

            </div>
            </Link>
            )
        }
    }
    


