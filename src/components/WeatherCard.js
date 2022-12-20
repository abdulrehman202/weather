
import React from 'react';
import './WeatherCard.css';

function WeatherCard({heading, img, data})
{
    return(<div className = 'card'>

        <div className='weather_data_in_card'>
        <img className='weather_icon' src={img} alt="http://openweathermap.org/img/wn/10d@2x.png"></img>
        <span className='card_heading'><strong>{heading}</strong></span>
        <span className='temperature_reading'>{data}</span></div>
    </div>)
}

export default WeatherCard;