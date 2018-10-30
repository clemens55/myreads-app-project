import React, { Component} from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './components/BookSearch.js'
import ListBook from './components/ListBooks'

class BooksApp extends React.Component {
  state = {
    Books: []
  }

   componentDidMount(){
    this.fetchBooksDetails()
  }
   fetchBooksDetails = () => {
    BooksAPI.getAll().then((books)=> {
      this.setState({
        Books: books
      })
    })
  }
   updateBooksDetails = (book, shelf) =>{
    BooksAPI.update(book, shelf).then(()=>{
      this.fetchBooksDetails()
    })
  }

  render() {
    return (
      <div className="app">
        
        <ListBook
          books={this.state.Books}
          onChange={this.updateBooksDetails}/>
        
      </div>
    )
  }
}

export default BooksApp
