import React, { Component } from 'react';
import '../App.css';
import Stars from './Stars'

class ListItem extends Component {


    render() {
        const {title, image, rating} =this.props
        return (
            <div>
                <div>
                    {image ?
                        <img src={image} alt=""/> :
                        <span> NO IMAGE :(</span>
                    }
                </div>
                <div>{title}</div>
                <div><Stars rating={rating} /></div>

            </div>
        );
    }

}

export default ListItem;