import React from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger  extends React.Component  {
  static propTypes = {
 onChange: PropTypes.func.isRequired,
}
  render(){


    let shelf = 'none'

    for (let item of this.props.books ) {
      if (item.id === this.props.book.id)  {
        shelf = item.shelf
      break}
    }
    return( <div className="book-shelf-changer">
    <select onChange={(event) => this.props.onChange(this.props.book, event.target.value)}
      defaultValue={ shelf }>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>)}
}
export  default BookShelfChanger
