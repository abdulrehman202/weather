import React, {useState} from 'react';
import './SearchBar.css';
import WeatherCard from './WeatherCard.js';

function SearchBar(){
    
  const [cityName, setMessage] = useState('');
  const [showPanel, setPanelVisibility] = useState(false);
  const [weatherData, setWeatherData] = useState({});


  const handleChange = event => {
    setMessage(event.target.value);
  };

    async function showWeather(event)
    {
        setPanelVisibility(true);
        event.preventDefault();
        console.log('City Name is ', cityName); 
        let data = await fetchData();
        console.log('Data is ', data);
        setWeatherData(data);
               
    }

    async function fetchData()
    {
        let api = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=67d1126fa2640c2d2cf4ff6700f0e1cb';
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

            {showPanel?<div className='weather_info'>
                
                <h1 >{cityName}</h1>
                <div className='outer__weather'>
                    <div className='inner__weather'>
                    <span className='weather__Card'><WeatherCard /></span>
                    <span className='weather__Card'><WeatherCard /></span>
                    </div>

                    <div className='inner__weather'>
                    <span className='weather__Card'><WeatherCard /></span>
                    <span className='weather__Card'><WeatherCard /></span>
                    </div>
                </div>
                
            </div>:<div></div>}

        </div>
    );
}

export default SearchBar;