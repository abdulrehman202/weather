import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar(){
    
  const [cityName, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

    function fetchData()
    {
        console.log('City Name is ', cityName);        
    }

    return(
        <div className='searchBar'>
            
            <form className='searchBar__form'>
                <div className='form__inputs'>
                <input className='textBox' type= 'text' placeholder='Enter city name'  value={cityName} onChange={handleChange}></input>
                <button className='submitButton' onClick={fetchData}>
                    Go
                </button>
                </div>
            </form>

        </div>
    );
}

export default SearchBar;