

export default class EmailDetails extends React.Component {
    render() {
        const { email } = this.props;
        return <div className="email-wrapper">
            <div className="email-container">
                <button className="email-go-back-btn" onClick={this.props.goBack}> BACK </button>
                <div className="user-info flex column align-center">
                    <p>{email.username}</p>
                    <p>{email.sentAt}</p>
                    <p>{email.subject}</p>
                </div>
                <p className="email-text">
                    {email.bodyText}
                </p>
            </div>
        </div>
    }

}