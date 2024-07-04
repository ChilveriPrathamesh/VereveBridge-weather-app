import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import search_icon from '../../assets/search.png';
import clear_icon  from '../../assets/clear.png';
import cloud_icon from '../../assets/cloud.png';
import drizzle_icon  from '../../assets/drizzle.png';
import humidity_icon from '../../assets/humidity.png';
import rain_icon  from '../../assets/rain.png';
import snow_icon from '../../assets/snow.png';
import wind_icon  from '../../assets/wind.png';

const Weather = () => {

  const inputRef = useRef()

  const [weatherData , setWeatherdata] = useState(false);

  // Assigning the images based on the code from API
  const allIcons = {
    "01d" : clear_icon,
    "01n" : clear_icon ,
    "02d" : cloud_icon ,
    "02n" : cloud_icon ,
    "03d" : cloud_icon ,
    "03n" : cloud_icon,
    "04d" : drizzle_icon ,
    "04n" : drizzle_icon ,
    "09d" : rain_icon ,
    "09n" : rain_icon ,
    "10d" : rain_icon ,
    "10n" : rain_icon ,
    "13d" : snow_icon ,
    "13n" : snow_icon
  }

  // Response for the search 
  const search = async (city) => {
    // If the input tag is empty , popup the alert 
    if (city === "") {
      alert("Enter the City Name")
      return ;
    }
    try {

      // Using the API to configure with the city with its details
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if(!response.ok) {
        alert(data.message)
        return;
      }

      // For the images which should be displayu in the Weather report 
      const icon = allIcons[data.weather[0].icon] || clear_icon;

      // Initializing the data 
      setWeatherdata({
        humidity : data.main.humidity,
        windSpeed : data.wind.speed ,
        temperature : Math.floor(data.main.temp),
        location : data.name,
        icon : icon,
      })

    } catch (error){
        setWeatherdata(false);
        console.error("Error in fetching weather data")
    }
  }

  // The elements in the search tag should be renders
  useEffect(()=>{
    search("india");
  },[])

  return (
    <div className='weather-container'>
      <div className='search-container'>
        <input ref={inputRef} type='text' placeholder='Search'className='input-tag' />
        <img src={search_icon} alt='Search Icon' className='seacrh-icon' onClick={()=> search(inputRef.current.value)} />
      </div>
      {weatherData? <>
        <img src={weatherData.icon} alt="weather" className='weather-icon' />
        <p className='temperature'>{weatherData.temperature}</p>
        <p className='location'>{weatherData.location}</p>
        <div className='weather-data'>
          <div className="weather-report-container">
            <img src = {humidity_icon} alt='Humidity Icon' className='icons'/>
            <div>
              <p >{weatherData.humidity} %</p>
              <span className='weather-name' >Humidity</span>
            </div>
          </div>
          <div className="weather-report-container">
            <img src = {wind_icon} alt='Humidity Icon' className='icon'/>
            <div>
              <p >{weatherData.windSpeed} Km/h</p>
              <span className='weather-name' >Wind Speed</span>
            </div>
          </div>
        </div>
      </> : <></>}
     
    </div>
  );
}

export default Weather;
