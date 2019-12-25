import EmailsHomePage from './pages/EmailsHomePage.jsx'
import SelectedEmailPage from './pages/SelectedEmailPage.jsx'

const EmailsRouter = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const EmailsHistory = createBrowserHistory()

class App extends React.Component {

    render() {
        return (
            <main>
                <EmailsRouter history={EmailsHistory}>
                    <Switch>
                        <Route component={EmailsHomePage} path="/emailshomepage" exact></Route>
                        <Route component={SelectedEmailPage} path="/emailshomepage/:id" exact></Route>
                    </Switch>
                </EmailsRouter>
            </main>)
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)