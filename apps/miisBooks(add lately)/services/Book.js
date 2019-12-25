import {getRandomID} from './utils.js'

// new Book(googleBook.title , googleBook.subtitle , googleBook.authors ,
// googleBook.publishedDate, googleBook.categories , googleBook.imageLinks.thumbnail  , googleBook.language)]

export default class Book {
    constructor(title, subtitle, authors, publishedDate, categories, thumbnail , language , pageCount , description) {
            debugger
        this.id = getRandomID();
        this.title = title;
        this.subtitle = subtitle;
        this.authors = authors;
        this.publishedDate = publishedDate;
        this.description = description;
        this.pageCount = pageCount;
        this.categories = categories;
        this.thumbnail = thumbnail;
        this.language = language;
        this.listPrice = {
            amount: 100,
            currencyCode: "EUR",
            isOnSale: false
        };
    }
}