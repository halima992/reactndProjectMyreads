import React from 'react'
import Search from './Search';
import Library from './Library';
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     data: [],

  }
  componentDidMount() {
     BooksAPI.getAll().then(data => {
       this.setState({data});
     });
   }

   onChange = ( Book, Shelf ) => {
      Book.shelf = Shelf
      this.setState(updated=> ({data:this.state.data.filter( book => book.id !== Book.id ).concat([Book])
}))
BooksAPI.update(Book, Shelf)
  }

  render() {
    return (
      <div className="app">
      <Route exact  path="/Search"  render={()=>(<Search data={ this.state.data }  onChange ={this.onChange }/>)}/>
      <Route   path="/" exact  render={()=>(<Library data={ this.state.data } onChange ={this.onChange}/>)}/>
      </div>
)}}
export default BooksApp
