export default class EmailNavBar extends React.Component {

    state = {
        navState: '',
        onInbox: false,
        onStarred: false,
        onSent: false,
        onDraft: false
    }

    componentDidMount = () => {
        this.loadNavState();
    }

    loadNavState = () => {
        debugger
        this.setState({ navState: this.props.navState }, () => {
            switch (this.state.navState) {
                case 'onInbox':
                    this.setState({
                        onInbox: true,
                        onStarred: false,
                        onSent: false,
                        onDraft: false
                    })

                    break;
                case 'onStarred':
                    this.setState({
                        onStarred: true,
                        onInbox: false,
                        onSent: false,
                        onDraft: false
                    })

                    break;
                case 'onSent':
                    this.setState({
                        onSent: true,
                        onInbox: false,
                        onStarred: false,
                        onDraft: false
                    })

                    break;
                case 'onDraft':
                    this.setState({
                        onDraft: true,
                        onInbox: false,
                        onStarred: false,
                        onSent: false
                    })
                    break;
            }
        })
    }

    onSetNavState = (navState) => {
        this.setState({ navState }, () => this.loadNavState())
    }

    render() {
        return <div className="email-nav-container flex column align-center ">
            <p onClick={() => this.props.onSetNavState('compose')} className="compose-btn"><span className="compose-btn-plus">+</span>COMPOSE</p>
            <div className="emails-nav-container-options">

                {(this.state.onInbox) ?
                    <div className="styleForEmailsNavBar"><p onClick={() => this.props.onSetNavState('onInbox')} className="emails-nav-option">inbox</p> </div>
                    : <div> <p onClick={() => this.props.onSetNavState('onInbox')} className="emails-nav-option">inbox</p></div>}

                {(this.state.onStarred) ?
                    <div className="styleForEmailsNavBar">
                        <p onClick={() => this.props.onSetNavState('onStarred', this.onNavStyle())}
                            className="emails-nav-option">starred</p> </div>
                    : <div> <p onClick={() => this.props.onSetNavState('onStarred', this.onSetNavState('onStarred'))} className="emails-nav-option">starred</p></div>}

                {(this.state.onSent) ?
                    <div className="styleForEmailsNavBar"><p onClick={() => this.props.onSetNavState('onSent')} className="emails-nav-option">sent</p> </div>
                    : <div> <p onClick={() => this.props.onSetNavState('onSent')} className="emails-nav-option">sent</p></div>}

                {(this.state.onDraft) ?
                    <div className="styleForEmailsNavBar"><p onClick={() => this.props.onSetNavState('onDraft')} className="emails-nav-option">draft</p> </div>
                    : <div> <p onClick={() => this.props.onSetNavState('onDraft')} className="emails-nav-option">draft</p></div>}

                <p className="emails-nav-proccess">PROCCESS: 78%</p>
            </div>
        </div>
    }
}