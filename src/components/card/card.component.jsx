import React from 'react';
import './card.style.css';
export const Card = props => (
    <div className='card-container'>
        <img 
        alt='student'
        src={`https://robohash.org/${props.student.id}?set=set5&size=200x200`}
            />
        <h2> {props.student.name}</h2>
        <p>{props.student.email}</p>
        <h2></h2>
    </div>

);