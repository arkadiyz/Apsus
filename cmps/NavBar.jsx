const { NavLink } = ReactRouterDOM
export default class InputSearch extends React.Component {

    state = {
        isOpenMoreApps: false
    }

    openMoreApps = () => {
        this.setState({ isOpenMoreApps: !this.state.isOpenMoreApps })
    }

    render() {
        let newClassName = ''
        if (this.state.isOpenMoreApps) newClassName = "openMoreApps more-apps-container ul-main-nav visible"
        else newClassName = "more-apps-container ul-main-nav hidden"
        return <nav className="main-nav flex space-between align-center">
            <img src="../assets/img/logo.png" />
            <ul className={newClassName}>
                <li className="flex align-center justify-center li-main-nav" ><NavLink className="fill" activeClassName="active" to='/' exact>Home</NavLink></li>
                <li className="flex align-center justify-center li-main-nav" ><NavLink className="fill" activeClassName="active" to='/emailshomepage'>Email</NavLink></li>
                <li className="flex align-center justify-center li-main-nav" ><NavLink className="fill" activeClassName="active" to='/noteshomepage'>Nodes</NavLink></li>
                <li className="flex align-center justify-center li-main-nav" ><NavLink className="fill" activeClassName="active" to='/about' exact>About</NavLink></li>
            </ul>
            <i onClick={this.openMoreApps} className="more-apps-icon fas fa-chevron-circle-down"></i>
        </nav>
    }
}
