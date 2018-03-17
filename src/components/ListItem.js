import React, { Component } from 'react';
import '../App.css';

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
                <div>{rating}</div>

            </div>
        );
    }

}

export default ListItem;