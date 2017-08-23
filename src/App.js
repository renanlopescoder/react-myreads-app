import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import BooksShelves from './BooksShelves'
import './App.css'
import { Route } from 'react-router-dom'

class App extends React.Component {
  
  state = {
    books: [],
    myBooks: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((myBooks) => this.setState({ myBooks }))
  }

  updateQuery = (query) => BooksAPI.search(query, 20).then((books) => {
    this.setState({ books: books, query: query })
  })

  updateBook = (book, shelf) => {
    book.shelf = shelf
    this.setState((state) => ({ state }))
    BooksAPI.update(book, shelf).then(() => { }, (error) => {
      alert('Sua alteração não pode ser efetuada!')
      BooksAPI.getAll().then((myBooks) => this.setState({ myBooks }))
    })
  }

  rateBook = (book, shelf, rate) => {
    book.rate = JSON.parse(rate)
    this.setState((state) => ({ state }))
    BooksAPI.update(book, shelf).then(() => { }, (error) => {
      alert('Sua alteração não pode ser efetuada!')
      BooksAPI.getAll().then((myBooks) => this.setState({ myBooks }))
    })
  }

  addBook = (book, shelf) => {
    book.shelf = shelf
    this.setState((oldState) => ({
      myBooks: oldState.myBooks.concat([book])
    })
    )
    BooksAPI.update(book, shelf).then(() => { }, (error) => {
      alert('Sua alteração não pode ser efetuada!')
      BooksAPI.getAll().then((myBooks) => this.setState({ myBooks }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks books={this.state.books} updateQuery={this.updateQuery} addBook={this.addBook} />
        )}>
        </Route>
        <Route exact path="/" render={() => (
          <BooksShelves myBooks={this.state.myBooks} updateBook={this.updateBook} rateBook={this.rateBook} />
        )}>
        </Route>
      </div>
    )
  }
}

export default App
