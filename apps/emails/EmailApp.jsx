<<<<<<< HEAD:apps/emails/App.jsx
import EmailsHomePage from './pages/EmailsHomePage.jsx'
import SelectedEmailPage from './pages/SelectedEmailPage.jsx'

const EmailsRouter = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const EmailsHistory = createBrowserHistory()
=======
import EmailHomePage from './pages/EmailHomePage.jsx'
>>>>>>> 1ebbdc63429f84ff242d4ba079aee7f84b4c8a0b:apps/emails/EmailApp.jsx

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