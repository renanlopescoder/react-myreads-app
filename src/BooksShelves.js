import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                  <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                      <div className="book-shelf-changer">
                        <select onChange={
                              (event) => {
                                this.props.updateBook(book, event.target.value)
                              }
                            }>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                          <option value="rate">Rate</option>
                        </select>
                      </div>
                      <div className="book-rate">
                      <select onChange={
                              (event) => {
                                this.props.rateBook(book,book.shelf,event.target.value)
                              }
                            }>
                          <option value="none" disabled>Rate Book</option>
                          <option value="[]">No Rate</option>
                          <option value="[1]">1 Star</option>
                          <option value="[1,2]">2 Star</option>
                          <option value="[1,2,3]">3 Star</option>
                          <option value="[1,2,3,4]">4 Star</option>
                          <option value="[1,2,3,4,5]">5 Star</option>
                        </select>
                      </div>
                    </div>
                    {
                      book.rate.map(
                        (id) => (
                            <div key={id} className="book-starFull"></div>
                        )
                      )
                    }
                    <br />
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
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
                  <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                      <div className="book-shelf-changer">
                        <select onChange={
                              (event) => {
                                this.props.updateBook(book, event.target.value)
                              }
                            }>
                          <option value="none" disabled>Move to...</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                      <div className="book-rate">
                      <select onChange={
                              (event) => {
                                this.props.rateBook(book,book.shelf,event.target.value)
                              }
                            }>
                          <option value="none" disabled>Rate Book</option>
                          <option value="[]">No Rate</option>
                          <option value="[1]">1 Star</option>
                          <option value="[1,2]">2 Star</option>
                          <option value="[1,2,3]">3 Star</option>
                          <option value="[1,2,3,4]">4 Star</option>
                          <option value="[1,2,3,4,5]">5 Star</option>
                        </select>
                      </div>
                    </div>
                    {
                      book.rate.map(
                        (id) => (
                            <div key={id} className="book-starFull"></div>
                        )
                      )
                    }
                    <br />
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
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
                  <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                      <div className="book-shelf-changer">
                        <select name="select" onChange={
                              (event) => {
                                this.props.updateBook(book, event.target.value)
                              }
                            }>
                          <option value="none" disabled>Move to...</option>
                          <option value="read">Read</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                      <div className="book-rate">
                      <select onChange={
                              (event) => {
                                this.props.rateBook(book,book.shelf,event.target.value)
                              }
                            }>
                          <option value="none" disabled>Rate Book</option>
                          <option value="[]">No Rate</option>
                          <option value="[1]">1 Star</option>
                          <option value="[1,2]">2 Star</option>
                          <option value="[1,2,3]">3 Star</option>
                          <option value="[1,2,3,4]">4 Star</option>
                          <option value="[1,2,3,4,5]">5 Star</option>
                        </select>
                      </div>
                    </div>
                    {
                      book.rate.map(
                        (id) => (
                            <div key={id} className="book-starFull"></div>
                        )
                      )
                    }
                    <br />
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
                )) 
              }
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        {/* <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a> */}
        <Link to="/search">Add a book</Link>
      </div> 
    </div>
    )
  }
}

export default BooksShelves