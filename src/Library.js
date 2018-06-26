import React from 'react'
 import BookShelf from './BookShelf';
 import {Link} from 'react-router-dom'

class Library extends React.Component {

  state = { shelfChange: false }

  render() {
    const shelfTypes = [{ type: 'currentlyReading', title: 'Currently Reading' },
                            { type: 'wantToRead',  title: 'Want to Read' },
                            { type: 'read', title: 'Read'}]
return(
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
      {shelfTypes.map((shelf,index) => {
        let shelfBooks = this.props.data.filter(book=>book.shelf ===shelf.type)
        return (<BookShelf data={shelfBooks}
        shelf={shelf}
      key ={index} onChange={this.props.onChange}/>)
    })}
      </div>
      <div className="open-search">
         <Link to="/Search">Add a book</Link>
     </div>
      </div>

    </div>
)}
}
export default Library
