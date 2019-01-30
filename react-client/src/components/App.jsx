import React from 'react';
import BookData from './BookData.jsx';
import ISBNform from './ISBNform.jsx'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ISBN: '',
      formSubmitted: false,
      title: '',
      thumbnail: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

 onChange(e) {
   this.setState({
     ISBN: e.target.value
   })
 } 

 onSubmit(e) {
  let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${this.state.ISBN}`
  fetch(url)
   .then(data => data.json())
   .then(data => {
     this.setState({
      ISBN: '',
      formSubmitted: true,
      title: data.items[0].volumeInfo.title,
      thumbnail: data.items[0].volumeInfo.imageLinks.thumbnail
     })
   })
 }

  render () {
    const currentPage = this.state.formSubmitted === false ? <ISBNform onChange={this.onChange} onSubmit={this.onSubmit}/> : <div><BookData title={this.state.title} thumbnail={this.state.thumbnail}/> <ISBNform onChange={this.onChange} onSubmit={this.onSubmit}/> </div>
    return (
      <div className='app'>
        { currentPage }
      </div>
    )
  }
}

export default App; 