export default class EmailNavBar extends React.Component {
    render() {
        return <div className="email-nav-container flex column ">
            <p><span>+</span>COMPOSE</p>
            <div>
                <p>inbox</p>
                <p>starred</p>
                <p>sent mail</p>
                <p>draft</p>
            </div>
                <p>PROCCESS: 78%</p>
        </div>
    }
}