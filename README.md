
# Weather App

This is a web app developed as a using React.js. It allows users to search for the weather conditions of any city in the world and provides current weather information. The app fetches weather data using the  Weather Map API




[Uploading We<!DOCTYPE html>
<!-- saved from url=(0022)http://localhost:5173/ -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="module">
import RefreshRuntime from "/@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
</script>

    <script type="module" src="./Weather App_files/client"></script>

    
    <link rel="icon" type="image/svg+xml" href="http://localhost:5173/vite.svg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
  <style type="text/css" data-vite-dev-id="C:/Users/Prathamesh/Desktop/weather-ap/src/components/Weather/index.css">.weather-container{
    place-self: center;
    padding: 40px;
    border-radius: 10px;
    background-image: linear-gradient(45deg , #2f4680 , #500ae4);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.search-container{
    display: flex;
    align-items: center;
    gap: 12px;
}

.input-tag{
    height: 50px;
    border: none;
    outline: none;
    border-radius: 40px;
    padding-left: 25px;
    color: #626262;
    background-color: #ebfffc;
    font-size: 18px;
}
.seacrh-icon{
    width: 50px;
    padding: 15px;
    border-radius: 50%;
    background-color: #ebfffc;
    cursor: pointer;
}

.weather-icon{
    width: 150px;
    margin: 30px 0;
}
.temperature{
    color: #ffffff;
    font-size: 80px;
    line-height: 1;
}

.location{
    color: #ffffff;
    font-size: 40px;

}

.weather-data{
    width: 100%;
    margin-top: 40px;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
}
.weather-report-container{
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 22px; 
}
.weather-name{
    font-size: 16px;
    display: block;
}

.icon{
    width: 26px;
    margin-top: 10px;
}</style><style type="text/css" data-vite-dev-id="C:/Users/Prathamesh/Desktop/weather-ap/src/index.css">@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.app-container{
  min-height: 100vh ;
  display: grid;
  background-color:#e2d4ff ;
}</style></head>
  <body>
    <div id="root"><div class="app-container"><div class="weather-container"><div class="search-container"><input type="text" placeholder="Search" class="input-tag"><img src="./Weather App_files/search.png" alt="Search Icon" class="seacrh-icon"></div><img src="./Weather App_files/drizzle.png" alt="weather" class="weather-icon"><p class="temperature">19</p><p class="location">Innichen</p><div class="weather-data"><div class="weather-report-container"><img src="./Weather App_files/humidity.png" alt="Humidity Icon" class="icons"><div><p>40 %</p><span class="weather-name">Humidity</span></div></div><div class="weather-report-container"><img src="./Weather App_files/wind.png" alt="Humidity Icon" class="icon"><div><p>1.4 Km/h</p><span class="weather-name">Wind Speed</span></div></div></div></div></div></div>
    <script type="module" src="./Weather App_files/main.jsx"></script>
  

</body></html>ather App.html…]()




Open the code edit and create the folder in it 

```bash 
npm create vite@latest
cd weather-app
```

## Features

- Users can search for weather conditions of any city in the world.
- The app displays the current weather conditions, including temperature and weather description.
- The app utilizes the SheCodes Weather API to fetch weather data.

## Technologies
- React.js
- HTML 
- CSS 
- JavaScript 

### Tools Used 
- Weather Map API 



### Setup Instructions
- Download dependencies by running `npm install`
- Start up the app using `npm start`
