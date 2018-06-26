import React from 'react';
import Book from './Book'
class BookShelf extends React.Component  {
  render() {
    return(
  <div className="bookshelf">
  <h2 className="bookshelf-title">{this.props.shelf.title}</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
    {this.props.data.map((book,index) => (<Book
            book={ book }
            books={ this.props.data }
            key={ index }
            shelf={this.props.shelf }
            onChange={this.props.onChange}
          />))}
          </ol>
          </div>
          </div>
)}}
export default BookShelf
