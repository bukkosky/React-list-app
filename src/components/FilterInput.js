import React, { Component } from 'react';
import '../App.css';


class FilterInput extends Component {

    state = {
        dataToFilter: ""
    };

    submit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.dataToFilter);
    };

    change = (e) => {
        this.setState({
            dataToFilter: e.target.value
        })
    };



    render() {
        return(
            <form onSubmit={this.submit}>
                <input type="text" onChange={this.change} value={this.state.dataToFilter} placeholder="Search" />
                <input type="submit" value="Search"/>
            </form>
        )
    }
}


export default FilterInput;