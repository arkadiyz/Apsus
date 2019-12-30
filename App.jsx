import NavBar from './cmps/NavBar.jsx'
import Home from './pages/Home.jsx'
import EmailsHomePage from './missEmail/pages/EmailsHomePage.jsx'
import NotesHomePage from './missNotes/pages/NotesHomePage.jsx'
import BooksHomePage from './missBooks/pages/BooksHomePage.jsx'
import BookPage from './missBooks/pages/BookPage.jsx'
import AddBookPage from './missBooks/pages/AddBookPage.jsx';



const AppRouter = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const AppHistory = createBrowserHistory()

class App extends React.Component {

    render() {
        return (
            <main>
                
                <AppRouter history={AppHistory}>
                    <NavBar></NavBar>
                    <Switch>
                        <Route component={Home} path="/" exact></Route>
                        <Route component={EmailsHomePage} path="/emailshomepage" exact></Route>
                        <Route component={NotesHomePage} path="/noteshomepage" exact></Route>
                        <Route component={BooksHomePage} path="/bookshomepage" exact></Route>
                        <Route component={BookPage} path="/books/:id" exact></Route>               
                        <Route component={AddBookPage} path="/addbookpage" exact></Route>
                    </Switch>
                    
                </AppRouter>
                
            </main>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)