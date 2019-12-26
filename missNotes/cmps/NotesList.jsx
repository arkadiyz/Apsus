import NotePreview from './NotePreview.jsx';

export default class NotesList extends React.Component {


    render() {
        return (    
            <div className="continer-notes">
                 {this.props.notes.map((note, index) => <NotePreview note={note} key={index} />)}
            </div>
        );
    }

}
// onSelectEmail={this.props.onSelectEmail}