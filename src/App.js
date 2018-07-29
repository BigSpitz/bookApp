import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './main'
import Search from './search'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  //the state which shows us how many books are in the MyReads section
  state = {
    allBooks:[]
  }


//using the BooksAPI to get all books and setting the array to the state
updateBookState(){
  BooksAPI.getAll().then((allBooks) => {
    this.setState({ allBooks:allBooks })
  })
}

//using the componentDidMount to make a data request
  componentDidMount() {
    this.updateBookState()
  }
//function that allows us to change the books' shelf, meaning their .shelf
changeShelf = (book,shelf)=>{BooksAPI.update(book,shelf); this.updateBookState();}

  render() {
    //setting the main page in '/' and the search in '/search' using Route
    return (
      <div className="app">

      <Route exact path='/' render={() => (
        < Main
           changeShelf={this.changeShelf}
           allBooks={this.state.allBooks} />
      )}/>

      <Route exact path='/search' render={() => (
        < Search
        changeShelf={this.changeShelf}
        />
      )}/>
      </div>
    )
  }
}

export default BooksApp
