export default class EmailNavBar extends React.Component {

    state = {
        navState: '',
        onInbox: false,
        onStarred: false,
        onSent: false,
        onDraft: false,
        precentageUnread: 0,
        isNavOpen: false
    }

    componentDidMount = () => {
        this.loadNavState();
        this.setPrecentageUnread()
    }

    loadNavState = () => {
        if (this.state.navState === 'onInbox' && this.props.pageState === 'Email opened') this.props.onUnSelectEmail()
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
        this.setState({ precentageUnread: this.props.precentage })
    }
    onSetNavState = (navState) => {
        this.setState({ navState }, () => this.loadNavState())
    }

    openNav = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }


    render() {
        let newClassName
        if (this.state.isNavOpen) {
            newClassName = "openNav email-nav-container flex column align-center"
        } else newClassName = "email-nav-container flex column align-center"
        
        return <div className=" flex column align-center ">
            <i onClick={this.openNav} className="hamb-menu-nav fas fa-bars"></i>
            <div className={newClassName} >
                <p onClick={() => this.props.onSetNavState('onCompose')} className="fill hamb-item compose-btn"><span className="compose-btn-plus">+</span>COMPOSE</p>
                <div className="emails-nav-container-options">

                    {(this.state.onInbox) ?
                        <div onClick={() => this.props.onSetNavState('onInbox', this.onSetNavState('onInbox'))} className="styleForEmailsNavBar hamb-item  emails-nav-option flex align-center">
                            <p>inbox</p>
                            <p className="unreaded">({this.props.unReadedCount})</p>
                        </div>
                        : <div onClick={() => this.props.onSetNavState('onInbox', this.onSetNavState('onInbox'))} className="emails-nav-option hamb-item  flex align-center">
                            <p>inbox</p>
                            <p className="unreaded">({this.props.unReadedCount})</p>
                        </div>}

                    {(this.state.onStarred) ?
                        <div className="styleForEmailsNavBar">
                            <p className="hamb-item emails-nav-option ">starred</p> </div>
                        : <div className="hamb-item "> <p onClick={() => this.props.onSetNavState('onStarred', this.onSetNavState('onStarred'))} className="emails-nav-option">starred</p></div>}

                    {(this.state.onSent) ?
                        <div className="styleForEmailsNavBar"><p className="hamb-item emails-nav-option">sent</p> </div>
                        : <div className="hamb-item "> <p onClick={() => this.props.onSetNavState('onSent', this.onSetNavState('onSent'))} className="emails-nav-option">sent</p></div>}
                </div>
                <p className="emails-nav-proccess hamb-item ">{this.props.precentage} %  </p>
            </div>
        </div>
    }
}
    // {(this.state.onDraft) ?
    //     <div className="styleForEmailsNavBar"><p className="emails-nav-option">draft</p> </div>
    //     : <div> <p onClick={() => this.props.onSetNavState('onDraft', this.onSetNavState('onDraft'))} className="emails-nav-option">draft</p></div>}