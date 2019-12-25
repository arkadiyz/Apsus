// import emailsService from '../services/emailsService.js';
const { Link } = ReactRouterDOM


export default class NotePreview extends React.Component {

    handleClick = () => {
        this.props.onSelectEmail(this.props.note);
    }

    render() {
        const { note } = this.props;
        return (
            <Link className="notes-txt" to={`/emailshomepage/${note.id}`}>
            <div className="note-list-card " onClick={this.handleClick} >
                <p className="subject">{note.txt}</p>
            </div>
            </Link>
            )
        }
    }
    


