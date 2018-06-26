
import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import {Link} from 'react-router-dom'

class Search extends React.Component {
  state = {
    query: '',
    searchBook:[]
  }
    updateQuery = (query) => {
  this.setState({ query: query.trim() })
  if(this.state.query){
     BooksAPI.search(query, 20).then((books) => {
      books?  this.setState({searchBook: books }) :
        this.setState({ searchBook:[]}) })}
  else {
  this.setState({ searchBook: []})
  }
}


  render() {
    return (
          <div className="search-books">
            <div className="search-books-bar">
             <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">

                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"  value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.searchBook && !this.state.searchBook.error && this.state.searchBook.map((book) => (
            <Book book={ book }  books={this.props.data } key={ book.id } onChange={this.props.onChange} />
                               ))}

              </ol>
            </div>
          </div>
        )

}}
export default Search
