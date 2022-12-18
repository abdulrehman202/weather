
import React from 'react';
import './WeatherCard.css';

function WeatherCard({heading, img, data})
{
    return(<div className = 'card'>

        <div className='weather_data_in_card'>
        <span className='card_heading'><strong>{heading}</strong></span>
        <span className='weather_icon'><img src={img} alt="http://openweathermap.org/img/wn/10d@2x.png"></img></span>
        <span className='temperature_reading'><strong>{data}</strong></span></div>
    </div>)
}

//39 &#176;C
export default WeatherCard;