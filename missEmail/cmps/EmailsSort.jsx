
export default class EmailsSort extends React.Component {

    state = {
        sortBy:''
    }

    render(){
        return <div className="emails-sort-container flex">
            <p>SORT BY:</p>
            <button>subject</button>
            <button>date</button>
        </div>
    }

}