import React, { Component } from 'react';
import FetchForm from './components/FetchForm'
import ListItem from './components/ListItem'
import FilterInput from './components/FilterInput'
import RatingForm from './components/RatingForm'
import './App.css';
import { sortComparator } from './utils'

const API_URL = 'https://sandbox-rkrajewski.firebaseio.com/photos.json?orderBy=%22id%22&startAt=0&endAt='




class App extends Component {

    state = {
        fetchedData: [],
        filteredData: []
    };

    filterData = (dataToFilter) => {
        const { fetchedData } = this.state

        const filteredData = fetchedData.filter(item => {
            return item.title.toLowerCase()
                .indexOf(dataToFilter.toLowerCase()) !==-1
        });
        console.log(filteredData)
        this.setState({
            filteredData
        })

        };

    fetchData = (numberOfItemsToFetch) => {

        fetch(API_URL + numberOfItemsToFetch)
            .then(response => response.json())
            .then(Object.values)
            .then(fetchedData => fetchedData.sort(sortComparator))
            .then(fetchedData => {
                this.setState({
                    fetchedData,
                    filteredData: fetchedData,
                });
                console.log(fetchedData)
            })
        };


  render() {
    const {filteredData} = this.state;

    return (
      <div className="App">
          <FetchForm onSubmit={this.fetchData} />
          {filteredData.length > 0 && <FilterInput onSubmit={this.filterData} /> }
         <div>
             {filteredData.map(({ id, title, image, rating}) => (
                 <ListItem key={id}
                           title={title}
                           image={image}
                           rating={rating}/>
             ))}
         </div>
          <div>
              {filteredData.map(({ id, rating}) => (
                  <RatingForm key={id}
                              rating={rating}/>
              ))}
          </div>
      </div>
    );
  }
}

export default App;
