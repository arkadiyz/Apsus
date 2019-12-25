import EmailHomePage from './pages/EmailHomePage.jsx'
class App extends React.Component {

    render() {
        return (
            <main>
                <EmailHomePage />
            </main>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)