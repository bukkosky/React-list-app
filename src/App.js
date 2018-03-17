import React, { Component } from 'react';
import FetchForm from './components/FetchForm'
import ListItem from './components/ListItem'
import './App.css';

const API_URL = 'https://sandbox-rkrajewski.firebaseio.com/photos.json?orderBy=%22id%22&startAt=0&endAt='

class App extends Component {

    state = {
        fetchedData: []
    };

    fetchDate = (numberOfItemsToFetch) => {

        fetch(API_URL + numberOfItemsToFetch)
            .then(response => response.json())
            .then(Object.values)
                .then(fetchedData => {
                    this.setState({
                        fetchedData
                    });
                    console.log(fetchedData)
                })
        };


  render() {
    const {fetchedData} = this.state

    return (
      <div className="App">
          <FetchForm onSubmit={this.fetchDate} />

         <div>
             {fetchedData.map(({ id, title, image, rating}) => (
                 <ListItem key={id}
                           title={title}
                           image={image}
                           rating={rating}/>
             ))}
         </div>
      </div>
    );
  }
}

export default App;
