import React, { Component } from 'react';
import FetchForm from './components/FetchForm'
import ListItem from './components/ListItem'
import FilterInput from './components/FilterInput'
import './App.css';
import { sortComparator } from './utils'

const API_URL = 'https://sandbox-rkrajewski.firebaseio.com/photos.json?orderBy=%22id%22&startAt=0&endAt='




class App extends Component {

    state = {
        fetchedData: [],
        filterData: []
    };

    filterData = (dataToFilter) => {
        console.log(dataToFilter)
    };

    fetchData = (numberOfItemsToFetch) => {

        fetch(API_URL + numberOfItemsToFetch)
            .then(response => response.json())
            .then(Object.values)
            .then(fetchedData => fetchedData.sort(sortComparator))
            .then(fetchedData => {
                this.setState({
                    fetchedData
                });
                console.log(fetchedData)
            })
        };


  render() {
    const {fetchedData} = this.state;

    return (
      <div className="App">
          <FetchForm onSubmit={this.fetchData} />
          <FilterInput onSubmit={this.filterData} />
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
