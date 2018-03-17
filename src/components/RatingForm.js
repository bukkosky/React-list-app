import React, { Component } from 'react';
import '../App.css';


class RatingForm extends Component {
    render() {
        const ratingNames = [
            'Not rated yet',
            'very poor',
            'poor',
            'avg',
            'good',
            'very good',
        ];
        return (
            <div>{ratingNames[this.props.rating]}</div>
        )
    }
}

export default RatingForm;