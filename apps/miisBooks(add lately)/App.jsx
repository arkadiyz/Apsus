import NavBar from './cmps/NavBar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import BooksHomePage from './pages/BooksHomePage.jsx';
import BookPage from './pages/BookPage.jsx'
import NotFound from './pages/NotFound.jsx'
import AddBookPage from './pages/AddBookPage.jsx';


const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()


class App extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
                    <NavBar></NavBar>
                    <Switch>
                        <Route component={Home} path="/" exact></Route>
                        <Route component={AddBookPage} path="/addbookpage" exact></Route>
                        <Route component={About} path="/about" exact></Route>
                        <Route component={BooksHomePage} path="/bookshomepage" exact></Route>
                        <Route component={BookPage} path="/books/:id" exact></Route>
                        <Route component={NotFound} path="/"></Route>
                    </Switch>
                </Router>
            </main>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)