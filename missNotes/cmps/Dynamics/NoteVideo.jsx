import {urlForVideo} from '../../services/utils.js'
export default class NoteVideo extends React.Component {

    componentDidMount = () => {


    }

    render() {
        const { note } = this.props;
        // this.props.note.type
        const url = urlForVideo(note.input)

        console.log('input note video ', url);
        


        return (

            <React.Fragment>
               
                    <iframe src={url} frameborder="2" ></iframe>


             
            </React.Fragment>
        )
    }
}


