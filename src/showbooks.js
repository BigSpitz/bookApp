import React, { Component } from 'react'


class ShowBooks extends Component {

  render(){

    //fix thumbnail if it does not exist
    if (!this.props.showbook.imageLinks) {var imgUrl=''} else {imgUrl=this.props.showbook.imageLinks.thumbnail}

    //fix changeShelf for search page so the select value will be 'none' if it is not placed in shelf or
    //it will have the value of the shelf it is placed
    if (this.props.showbook.shelf) {var shelfValue=this.props.showbook.shelf} else {
if ((this.props.allBooks.filter(book=>book.id===this.props.showbook.id)).length>0){
    this.props.allBooks.filter(book=>book.id===this.props.showbook.id).map(book=>shelfValue =book.shelf);

      }
      else {shelfValue ='none'}
}
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imgUrl}")` }}></div>
          <div className="book-shelf-changer">
            <select
            value={shelfValue}
onChange={(e)=>this.props.changeShelf(this.props.showbook, e.target.value)}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.showbook.title}</div>
        <div className="book-authors">{this.props.showbook.authors}</div>
      </div>

    )
}
}
export default ShowBooks;
