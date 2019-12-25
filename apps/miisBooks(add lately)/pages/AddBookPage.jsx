import AddBook from "../cmps/AddBook.jsx"

export default class AddBookPage extends React.Component {
    state = {
        booksToAdd: null,
        searchName: ''
    }

    inputChange = (ev) => {
        let searchName = ev.target.value
        this.setState({ searchName })
    }

    onSave = (ev) => {
        ev.preventDefault();
        if (!this.state.searchName) return;
        this.loadBooksTitles(this.state.searchName).then(books => {
            let booksToAdd = [];
            for (let i = 0; i < 5; i++) {
                booksToAdd.push(books.items[i].volumeInfo)
            }
            this.setState({ booksToAdd })
        });
    }


    loadBooksTitles(bookName) {
        var prmAns = axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${bookName}`)
        return prmAns.then((response) => {
            let { data } = response;
            return data;
        })
            .catch(err => {
                return { answer: true, img: 'nodata.png' }
            })
    }
    render() {
        return <div className="add-book-container">
                   <input type="text" placeholder="add book" name="addBook" onChange={this.inputChange} required></input>
                   <button onClick={this.onSave}>ADD</button>
                              {(!this.state.booksToAdd) ? '' : <AddBook books={this.state.booksToAdd} />}
                </div>
    }
}

