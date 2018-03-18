import React, { Component } from 'react';
import '../App.css';

const whiteStar = '☆'
const baseStars = Array(5).fill('★');
const getStars = rating => baseStars.map((item, index) => {
    const star = rating > index + 1 ? whiteStar : item
    return <span key={index} > {star}</span>
    }
)


const Stars = (props) =>  (
    <div>
        {getStars(props.rating)}
    </div>
)

export default Stars;