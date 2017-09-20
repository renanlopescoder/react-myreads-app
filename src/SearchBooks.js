import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const shelfs = ['currentlyReading', 'wantToRead' , 'read', 'none']

class SearchBooks extends Component {

 render () {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={this.props.query}
            onChange={
              (event) => {
                this.props.updateQuery(event.target.value)
              }
            } list="autocomplete"/>
            <datalist id="autocomplete">
              <option value="Android" />
              <option value="Art" />
              <option value="Artificial Intelligence" />
              <option value="Astronomy" />
              <option value="Austen" />
              <option value="Baseball" />
              <option value="Basketball" />
              <option value="Bhagat" />
              <option value="Biography" />
              <option value="Brief" />
              <option value="Business" />
              <option value="Camus" />
              <option value="Cervantes" />
              <option value="Christie" />
              <option value="Classics" />
              <option value="Comics" />
              <option value="Cook" />
              <option value="Cricket" />
              <option value="Cycling" />
              <option value="Desai" />
              <option value="Design" />
              <option value="Development" />
              <option value="Digital Marketing" />
              <option value="Drama" />
              <option value="Drawing" />
              <option value="Dumas" />
              <option value="Education" />
              <option value="Everything" />
              <option value="Fantasy" />
              <option value="Film" />
              <option value="Finance" />
              <option value="First" />
              <option value="Fitness" />
              <option value="Football" />
              <option value="Future" />
              <option value="Games" />
              <option value="Gandhi" />
              <option value="Homer" />
              <option value="Horror" />
              <option value="Hugo" />
              <option value="Ibsen" />
              <option value="Journey" />
              <option value="Kafka" />
              <option value="King" />
              <option value="Lahiri" />
              <option value="Larsson" />
              <option value="Learn" />
              <option value="Literary Fiction" />
              <option value="Make" />
              <option value="Manage" />
              <option value="Marquez" />
              <option value="Money" />
              <option value="Mystery" />
              <option value="Negotiate" />
              <option value="Painting" />
              <option value="Philosophy" />
              <option value="Photography" />
              <option value="Poetry" />
              <option value="Production" />
              <option value="Programming" />
              <option value="React" />
              <option value="Redux" />
              <option value="River" />
              <option value="Robotics" />
              <option value="Rowling" />
              <option value="Satire" />
              <option value="Science Fiction" />
              <option value="Shakespeare" />
              <option value="Singh" />
              <option value="Swimming" />
              <option value="Tale" />
              <option value="Thrun" />
              <option value="Time" />
              <option value="Tolstoy" />
              <option value="Travel" />
              <option value="Ultimate" />
              <option value="Virtual Reality" />
              <option value="Web Development" />
              <option value="iOS"/>
            </datalist>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            this.props.books.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                      <select onChange={
                            (event) => {
                              this.props.addBook(book, event.target.value)
                            }
                          } onClick={() => this.props.map(this.props.books, this.props.myBooks)}>
                          <option value="none" disabled>Move to...</option>          
                        {
                          shelfs.map((shelf)=> {
                              return <option key={shelf} selected={shelf === book.shelf ? `selected` : ``} value={shelf}>{shelf}</option>
                          })
                        }
                        
                      </select>
                    </div>
                  </div>
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
    )
  }
}

export default SearchBooks