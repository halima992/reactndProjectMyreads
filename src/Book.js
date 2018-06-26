import React from 'react';
import BookShelfChanger  from './BookShelfChanger'
class Book  extends React.Component  {
  render() {
    return(
      <li>
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style=
            {{ width: 128, height: 193, backgroundImage:
              `url("${(this.props.book.imageLinks &&
                               this.props.book.imageLinks.thumbnail)}")`}}></div>
              <BookShelfChanger
              book={ this.props.book }
              books={ this.props.books }
              onChange={this.props.onChange}
                />
                </div>
                <div className="book-title">{this.props.book.title}</div>
              {this.props.book.authors && this.props.book.authors.map((author,index)=>
            ( <div key={index} className="book-authors">{author}</div>))}
        </div>
        </li>
    )

}}
export default Book
