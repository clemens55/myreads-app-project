import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'


class BookSearch extends Component {
     
     state = {
    Books: [],
    query: ''
  }
  
  handleChange = (event) => {
    var value = event.target.value
    this.setState(() => {
      return {
        query: value
      }
    })
    this.searchBooks(value)
  }
   searchBooks = (val)=> {
    if(val.length !== 0) {
      BooksAPI.search(val,10).then((books)=>{
        if (books.length>0) {
          this.setState(()=>{
            return {
              Books:books.filter((book)=>(book.imageLinks))
            }
          })
        }
      })
    }
    else
    {
      this.setState({
        Books: [],
        query: ''
      })
    }
  }
   
    addBook = (book, shelf) => {
        this.props.onChange(book, shelf)
        this.props.history.push('/')
    }
     
  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.query.length>0 && this.state.Books.map((book,index)=>(
              <Book
                book={book}
                key={index}
                onUpdate={(shelf)=> {
                  this.addBook(book,shelf)
                }}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch;
