import React from 'react';
import './SearchBar.css';

function SearchBar(){
    return(
        <div className='searchBar'>
            
            <form className='searchBar__form'>
                <input className='textBox' type= 'text'></input>
                <button className='submitButton' type = 'submit'>
                    Go
                </button>
            </form>

        </div>
    );
}

export default SearchBar;