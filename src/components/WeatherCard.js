
import React from 'react';
import './WeatherCard.css';

function WeatherCard()
{
    return(<div className = 'card'>

        <div className='weather_data_in_card'>
        <span className='card_heading'><strong>Temperature</strong></span>
        <span className='weather_icon'><img src="http://openweathermap.org/img/wn/10d@2x.png" alt="alternatetext"></img></span>
        <span className='temperature_reading'><strong>39 &#176;C</strong></span></div>
    </div>)
}

export default WeatherCard;