import EmailPreview from './EmailPreview.jsx';
// import EmailFilter from './BooksFilter.jsx';

export default class EmailsList extends React.Component {

    render() {
        return (
            <div className="Emails-list-wrapper fill">
                <ul className="Emails-list flex column fill align-center justify-center clean-list">
                    {this.props.emails.map((email, index) => <EmailPreview email={email} key={index}
                    onSelectEmail={this.props.onSelectEmail} onDeleteEmail={this.props.deleteMail}/>)}
                </ul>
            </div>
        );
    }

}
