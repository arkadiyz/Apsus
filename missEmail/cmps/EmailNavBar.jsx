export default class EmailNavBar extends React.Component {

    
    
    render() {
        return <div className="email-nav-container flex column align-center ">
            <p className="compose-btn"><span className="compose-plus-btn">+</span>COMPOSE</p>
            <div className="emails-nav-container">
                <p className="emails-nav-option">inbox</p>
                <p className="emails-nav-option">starred</p>
                <p className="emails-nav-option">sent mail</p>
                <p className="emails-nav-option">draft</p>
            </div>
                <p className="emails-nav-proccess">PROCCESS: 78%</p>
        </div>
    }
}