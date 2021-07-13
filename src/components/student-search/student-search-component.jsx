import React from 'react';
import './student-search.styles.css';

export const StudentSearch = ({ placeholder, handleChange }) => (
    <input 
        className='search' 
        type='search'
       placeholder={placeholder}
       onChange={ handleChange} />
    
)