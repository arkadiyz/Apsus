const { NavLink } = ReactRouterDOM

export default function NavBar() {
    return <div className="navBar-container">
        <nav>
            <ul>
                <li ><NavLink activeClassName="active" to='/' exact>Home</NavLink></li>
                <li ><NavLink activeClassName="active" to='/emailshomepage'>Email</NavLink></li>
                <li ><NavLink activeClassName="active" to='/Nodes'>Nodes</NavLink></li>
                <li ><NavLink activeClassName="active" to='/about' xact>About</NavLink></li>
            </ul>
        </nav>
    </div>
}