// import storageService from "../services/storageService.js"
// export default class BookReviews extends React.Component {

//     state = {
//         reviews: null
//     }

//     componentDidMount() {
//         this.setReviews();
//     }

//     setReviews() {
//         const allReviews = storageService.load('reviews');
//         let thisBookReviews = [];
//         thisBookReviews = allReviews.filter(review => review.id === this.props.bookId)
//         this.setState({ reviews: thisBookReviews });
//     }

//     render() {
//         return <div className="review-container">
//                     {this.state.reviews.map((review, index) => {
//                     <p>rate:{review.rate}</p>
//                     <p>name:{review.fullname}</p>
//                     <p>date:{review.date}</p>
//                     <p>review:{review.reviewTxt} </p>    
//                 }
//                     )}
//         </div>
//     }

// }
