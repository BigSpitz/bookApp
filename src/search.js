import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import ShowBooks from './showbooks'
import { Link } from 'react-router-dom'


class Search extends Component {

  state = {
    query: '',
    match: []
  }

  matchBooks = (query) => {
    //if the query is not '' we first check for any errors with the .error (this error method was learned by watching the 21/7 study jam) 
    //if not we see if results exist and we set the state, else if
    //query=='' then we set the match to [] to have the desired result (no books showing)

    if (query !== '') {
      BooksAPI.search(query).then((results) => {
        if (results.error) {
            this.setState({
              match: []
            })
        } else if (results) {
            this.setState({
              match: results
            })
        }
      })
    } else {
      this.setState({
        match: []
      })
    }
  }
  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.matchBooks(query);
  }
  render() {
    return ( <
      div className = "search-books" >
      <div className = "search-books-bar" >
      <Link className = "close-search" to='/'
       > Close < /Link> <
      div className = "search-books-input-wrapper" >
      <input type = "text"
      placeholder = "Search by title or author"
      value = {
        this.state.query
      }
      onChange = {
        (event) => this.updateQuery(event.target.value)
      }/>

      </div> </div> <
      div className = "search-books-results" >
      <ol className = "books-grid" >
      {
        this.state.match.map(book => ( <li key = {book.id} > < ShowBooks showbook = {book}
          changeShelf = {this.props.changeShelf} /> </li > ))
      }
      </ol>
      </div>
      </div>
    )
  }
}

export default Search
