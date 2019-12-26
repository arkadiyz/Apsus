const { NavLink } = ReactRouterDOM
import InputSearch from './InputSearch.jsx'
export default function NavBar() {
    return <div className="navBar-container">
        <nav className="main-nav flex space-between align-center">
            <div>LOGO</div>
            <InputSearch></InputSearch>
            <ul className="ul-main-nav">
                <li className="li-main-nav" ><NavLink activeClassName="active" to='/' exact>Home</NavLink></li>
                <li className="li-main-nav" ><NavLink activeClassName="active" to='/emailshomepage'>Email</NavLink></li>
<<<<<<< HEAD
                <li className="li-main-nav" ><NavLink activeClassName="active" to='/Nodes'>Nodes</NavLink></li>
=======
                <li className="li-main-nav" ><NavLink activeClassName="active" to='/noteshomepage'>Nodes</NavLink></li>
>>>>>>> 6e067e5a171981428160be62abca5756caec9279
                <li className="li-main-nav" ><NavLink activeClassName="active" to='/about' exact>About</NavLink></li>
            </ul>
        </nav>
    </div>
}