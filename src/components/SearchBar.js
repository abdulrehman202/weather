import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar(){
    
  const [cityName, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

    async function showWeather(event)
    {
        event.preventDefault();
        console.log('City Name is ', cityName); 
        let data = await fetchData();
        console.log('Data is ', data);
               
    }

    async function fetchData()
    {
        let api = 'https://api.open-meteo.com/v1/forecast?latitude=31.42&longitude=73.12&hourly=temperature_2m';
        //This function makes the api call and returns the fetched Data
        let response = await fetch(api);
        let data = await response.json();
        return data;
    }

    return(
        <div className='searchBar'>
            
            <form className='searchBar__form'>
                <div className='form__inputs'>
                <input className='textBox' type= 'text' placeholder='Enter city name'  value={cityName} onChange={handleChange}></input>
                <button className='submitButton' onClick={(e) => {showWeather(e)}}>
                    Go
                </button>
                </div>
            </form>

        </div>
    );
}

export default SearchBar;