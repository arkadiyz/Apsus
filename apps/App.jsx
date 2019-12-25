import NavBar from './cmps/NavBar.jsx'
import Home from './pages/Home.jsx'
import Emails from './emails/pages/EmailHomePage.jsx'
import Notes from './notes/App.jsx'
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
                        <Route component={Emails} path="/emailshomepage/" exact></Route>
                        <Route component={Notes} path="/notes" exact></Route>
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