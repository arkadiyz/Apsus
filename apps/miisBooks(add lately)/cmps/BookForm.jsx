import storageService from '../services/storageService.js'

export default class BookForm extends React.Component {
    state = {
        bookId: '',
        fullName: '',
        rate: '&#11088;',
        date: '',
        reviewTxt: ''
    }

    componentDidMount() {
        this.setFormDataForEdit();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.book !== this.props.book) {
            this.setFormDataForEdit();
        }
    }

    setFormDataForEdit() {
        const { book } = this.props;
        if (book) {
            this.setState({ bookId: book.id, fullName: book.fullName, rate: book.rate, date: book.date, reviewTxt: book.reviewTxt })
        }
    }

    onSave = (ev) => {
        ev.preventDefault();
        if (this.state.fullName && this.state.rate && this.state.date && this.state.reviewTxt) {
            this.setState({ bookId: '', fullname: this.state.fullName, rate: this.state.rate, date: this.state.date, reviewTxt: this.state.reviewTxt })
        }
        let newReviews = storageService.load('reviews')
        if (!newReviews) {
            newReviews = [];
            newReviews.push([this.state])
        } else {
            newReviews.push([this.state])
        }
        storageService.store('reviews', newReviews)
    }

    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }

    render() {
        return <div className="review-container">
            <div className="review-container-user-info">
                <h1>ADD REVIEW!</h1>
                <input className="review-container-user-info-item" type="text" placeholder="fullname" name="fullName"
                    onChange={this.inputChange} defaultValue={this.state.fullName} required></input>
                <select className="review-container-user-info-item" onChange={this.inputChange} value={this.state.rate} name="rate">
                    <option value="1">&#11088;</option>
                    <option value="2">&#11088;&#11088;</option>
                    <option value="3">&#11088;&#11088;&#11088;</option>
                    <option value="4">&#11088;&#11088;&#11088;&#11088;</option>
                    <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088;</option>
                </select>
                    <input className="review-container-user-info-item" type="date"
                        onChange={this.inputChange} name="date" required ></input>
            </div>

            <div className="review-container-textarea-submit">
            <textarea rows="5" cols="50" onChange={this.inputChange} value={this.state.reviewTxt} name="reviewTxt" required> </textarea>
            <button type="submit" value={this.props.book.id} onClick={this.onSave}>Save Review</button>
            </div>
        </div>
    }
}