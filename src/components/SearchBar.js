import React from 'react';
import './SearchBar.css';

function SearchBar(){
    
    function fetchData()
    {
        
    }

    return(
        <div className='searchBar'>
            
            <form className='searchBar__form'>
                <div className='form__inputs'>
                <input className='textBox' type= 'text' placeholder='Enter city name'></input>
                <button className='submitButton' onClick={fetchData}>
                    Go
                </button>
                </div>
            </form>

        </div>
    );
}

export default SearchBar;