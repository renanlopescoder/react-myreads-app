import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './BookComponent'

class BooksShelves extends Component {

  render () {
    this.props.myBooks.map(
      (book) => {
        if(book.rate === undefined){
          book.rate = [];
        }
        return book
      }
    )
    let currentlyReading = this.props.myBooks.filter(
      (book) => (
        book.shelf === 'currentlyReading'
      )
    )
    let wantToRead = this.props.myBooks.filter(
      (book) => ( book.shelf === 'wantToRead')
    )
    let read = this.props.myBooks.filter(
      (book) => ( 
        book.shelf === 'read'
      )
    )

    return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads <div className="book-icon"></div></h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {
                currentlyReading.map((book) => (
                  <Book key={book.id} book={book} updateBook={this.props.updateBook} rateBook={this.props.rateBook}/> 
                )) 
              }
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {
                wantToRead.map((book) => (
                  <Book key={book.id} book={book} updateBook={this.props.updateBook} rateBook={this.props.rateBook}/>
                )) 
              }
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {
                read.map((book) => (
                  <Book key={book.id} book={book} updateBook={this.props.updateBook} rateBook={this.props.rateBook} />
                )) 
              }
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div> 
    </div>
    )
  }
}

export default BooksShelves