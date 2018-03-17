import React, { Component } from 'react';
import FetchForm from './components/FetchForm'
import './App.css';

const API_URL = 'https://sandbox-rkrajewski.firebaseio.com/photos.json?orderBy=%22id%22&startAt=0&endAt='

class App extends Component {



    fetchDate = (numberOfItemsToFetch) => {

        fetch(API_URL + numberOfItemsToFetch)
            .then(response => response.json())
                .then(json => {
                    console.log(json)
                })
        };


  render() {
    return (
      <div className="App">
          <FetchForm onSubmit={this.fetchDate}/>
      </div>
    );
  }
}

export default App;
