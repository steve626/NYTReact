import React from 'react';
import './SearchForm.css'

const SearchForm = props => (
    <form className='search'>
        <div className='form-group'>
            <label htmlFor='topic'>Topic:</label>
                <input
                value={props.search}
                onChange={props.handleInputChange}
                name='topic'
                list='topics'
                type='text'
                className='form-control'
                placeholder='What would you like to find articles on?'
                id='topic'
                />
            <label htmlFor='startYear'>Start Year:</label>
                <input
                value={props.search}
                onChange={props.handleInputChange}
                name='startYear'
                list='startYear'
                type='text'
                className='form-control'
                placeholder='starting year?'
                id='topic'
                />
            <label htmlFor='endYear'>End Year:</label>
                <input
                value={props.search}
                onChange={props.handleInputChange}
                name='endYear'
                list='endYear'
                type='text'
                className='form-control'
                placeholder='ending year?'
                id='topic'
                />
            <button 
                type='submit'
                onClick={props.handleFormSubmit}
                className='btn btn-success'
            >
            Search
            </button>
        </div>
    </form>
);

export default SearchForm;