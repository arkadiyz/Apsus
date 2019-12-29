const { NavLink } = ReactRouterDOM
export default function NavBar() {
    return <nav className="main-nav">
        <img src="../assets/img/logo.png" />
        <ul className="ul-main-nav fill flex">
            <li className="li-main-nav" ><NavLink activeClassName="active" to='/' exact>Home</NavLink></li>
            <li className="li-main-nav" ><NavLink activeClassName="active" to='/emailshomepage'>Email</NavLink></li>
            <li className="li-main-nav" ><NavLink activeClassName="active" to='/noteshomepage'>Nodes</NavLink></li>
            <li className="li-main-nav" ><NavLink activeClassName="active" to='/about' exact>About</NavLink></li>
        </ul>
    </nav>
}