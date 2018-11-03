import React, { Component } from 'react'
import Book from './Book'


class BookShelf extends Component {
    updateBook = (book, shelf) => {
    this.props.onChangeShelf(book, shelf)
    }
  render () {
      const books = this.props.books
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index)=>(
              <Book
                book={book}
                key={book.id}
                onUpdate = {(shelf)=>{
                  this.updateBook(book,shelf)
                }}
                />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;