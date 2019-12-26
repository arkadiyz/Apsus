

export default class EmailDetails extends React.Component {
    render() {
        const { email } = this.props;
        return <div className="email-wrapper">
            <div className="email-container fill">
                <button className="email-go-back-btn" onClick={this.props.onUnSelectEmail}> BACK </button>
                <div className="user-info flex column align-center">
                    <div className="user-info-header flex space-between">
                        <p>{email.subject}</p>
                        <div className="flex">
                            <button>D</button><button>S</button>
                        </div>
                    </div>
                    <p>{email.name} <small>  ({email.email}) </small></p>
                    <p>{email.sentAt}</p>
                </div>
                <div className="email-bodyText">
                    <p className="email-bodyText-text">
                        {email.bodyText}
                    </p>
                </div>
            </div>
        </div>
    }

}