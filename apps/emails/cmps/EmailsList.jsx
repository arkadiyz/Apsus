import EmailPreview from './EmailPreview.jsx';
// import EmailFilter from './BooksFilter.jsx';

export default class EmailsList extends React.Component {

    render() {
        return (
            <div className="Emails-list-wrapper">
                <ul className="Emails-list clean-list">
                    {this.props.emails.map((email, index) => <EmailPreview email={email} key={index}
                    onSelectEmail={this.props.onSelectEmail} />)}
                </ul>
            </div>
        );
    }

}
