export default class EmailNavBar extends React.Component {

    state = {
        navState: '',
        onInbox: false,
        onStarred: false,
        onSent: false,
        onDraft: false,
        precentageUnread: 0
    }

    componentDidMount = () => {
        this.loadNavState();
        this.setPrecentageUnread()
    }

    loadNavState = () => {
        if(this.state.navState === 'onInbox' && this.props.pageState === 'Email opened') this.props.onUnSelectEmail()
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

    setPrecentageUnread = () => {
        this.setState({precentageUnread:this.props.precentage})
    }
    onSetNavState = (navState) => {
        this.setState({ navState }, () => this.loadNavState())
    }


    render() {
        return <div className="email-nav-container flex column align-center ">
            <p onClick={() => this.props.onSetNavState('onCompose')} className="compose-btn"><span className="compose-btn-plus">+</span>COMPOSE</p>
            <div className="emails-nav-container-options">

                {(this.state.onInbox) ?
                    <div  onClick={() => this.props.onSetNavState('onInbox', this.onSetNavState('onInbox'))} className="styleForEmailsNavBar emails-nav-option flex align-center">
                        <p>inbox</p>
                        <p className="unreaded">({this.props.unReadedCount})</p>
                    </div>
                    : <div onClick={() => this.props.onSetNavState('onInbox', this.onSetNavState('onInbox'))} className="emails-nav-option flex align-center">
                        <p>inbox</p>
                        <p className="unreaded">({this.props.unReadedCount})</p>
                    </div>}

                {(this.state.onStarred) ?
                    <div className="styleForEmailsNavBar">
                        <p className="emails-nav-option">starred</p> </div>
                    : <div> <p onClick={() => this.props.onSetNavState('onStarred', this.onSetNavState('onStarred'))} className="emails-nav-option">starred</p></div>}

                {(this.state.onSent) ?
                    <div className="styleForEmailsNavBar"><p className="emails-nav-option">sent</p> </div>
                    : <div> <p onClick={() => this.props.onSetNavState('onSent', this.onSetNavState('onSent'))} className="emails-nav-option">sent</p></div>}
            </div>
            <p className="emails-nav-proccess">{this.props.precentage} %  </p>
        </div>
    }
}
    // {(this.state.onDraft) ?
    //     <div className="styleForEmailsNavBar"><p className="emails-nav-option">draft</p> </div>
    //     : <div> <p onClick={() => this.props.onSetNavState('onDraft', this.onSetNavState('onDraft'))} className="emails-nav-option">draft</p></div>}