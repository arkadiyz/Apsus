const { NavLink } = ReactRouterDOM

export default function NavBar() {
    return <div className="navBar-container">
        <nav>
            <ul>
                <li className="flex justify-center align-center"><NavLink activeClassName="active" to='/' exact>Home</NavLink></li>
                <li className="flex justify-center align-center"><NavLink activeClassName="active" to='/about'>About</NavLink></li>
                <li className="flex justify-center align-center"><NavLink activeClassName="active" to='/bookshomepage'>Miss Books</NavLink></li>
                <li className="flex justify-center align-center"><NavLink activeClassName="active" to='/AddBookPage' exact>Add Book</NavLink></li>
            </ul>
        </nav>
    </div>
}