import NavBar from './cmps/NavBar.jsx'
import Home from './pages/Home.jsx'
import EmailsHomePage from './emails/pages/EmailsHomePage.jsx'
import Notes from './notes/App.jsx'
import SelectedEmailPage from './emails/pages/SelectedEmailPage.jsx'
import InputSearch from './cmps/InputSearch.jsx'

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
                        <Route component={SelectedEmailPage} path="/emailshomepage/:id" exact></Route>
                            
                        {/* <Route component={Notes} path="/notes" exact></Route> */}
                        {/* <Route component={SelectedEmailPage} path="/emailshomepage/:id" exact></Route>     */}
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