import React from 'react'

export default (props) => (
  <li key={props.book.id}>
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.book.imageLinks.smallThumbnail}")` }}></div>
      <div className="book-shelf-changer">
        <select onChange={
              (event) => {
                props.updateBook(props.book, event.target.value)
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
                props.rateBook(props.book, props.book.shelf, event.target.value)
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
      props.book.rate.map(
        (id) => (
            <div key={id} className="book-starFull"></div>
        )
      )
    }
    <br />
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.authors}</div>
  </div>
</li>
);