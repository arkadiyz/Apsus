const { NavLink } = ReactRouterDOM
import InputSearch from './InputSearch.jsx'
export default function NavBar() {
    return <div className="navBar-container">
        <nav className = "main-nav">
            <ul className ="ul-main-nav  flex aling-flex-end direction-column">
                <li ><NavLink activeClassName="active" to='/' exact>Home</NavLink></li>
                <li ><NavLink activeClassName="active" to='/emailshomepage'>Email</NavLink></li>
                <li ><NavLink activeClassName="active" to='/Nodes'>Nodes</NavLink></li>
                <li ><NavLink activeClassName="active" to='/about' xact>About</NavLink></li>
            </ul>
            <InputSearch></InputSearch>
        </nav>
    </div>
}