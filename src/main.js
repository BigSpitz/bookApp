import React, { Component } from 'react'
import ShowBooks from './showbooks'
import { Link } from 'react-router-dom'

class Main extends Component {

  render(){
    return (

          <div className="list-books">
            <div className="list-books-title">
              <h1>BookApp</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
{this.props.allBooks.filter(book=>book.shelf==='currentlyReading').map(book=>(<li key={book.id}> <ShowBooks showbook={book} changeShelf={this.props.changeShelf}/> </li>))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.allBooks.filter(book=>book.shelf==='wantToRead').map(book=>(<li key={book.id}> <ShowBooks showbook={book} changeShelf={this.props.changeShelf}/> </li>))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.allBooks.filter(book=>book.shelf==='read').map(book=>(<li key={book.id}> <ShowBooks showbook={book} changeShelf={this.props.changeShelf}/> </li>))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
    )
  }
}
export default Main;
