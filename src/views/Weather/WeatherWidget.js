import React, { useEffect, useState } from "react";
import "./Weather.css";
import CancelPng from '../Assets/Images/cancel.png'
import { weather } from "../../redux/Admin/action";
import { useDispatch, useSelector } from "react-redux";
function WeatherWidget() {
  const [city, setCity] = useState("");
  const weatherCondition =useSelector((state)=>state.Admin.listweather)
  console.log("weatherCondition",weatherCondition);
const dispatch=useDispatch()
  // const api = {
  //   key: "5b9798395b65bd6fdf40d827d9b081e4",
  //   base: "https://api.openweathermap.org/data/2.5/",
  // };

  // const searchWeather = () => {
  //   fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       setWeatherCondition(result);
  //     })
  //     .catch((error) => {
  //       console.error("error:", error);
  //     });
  // };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(weather({city:city}))
    }
  };

  // Function to get suitable weather icon URL based on weather condition code
  const getWeatherIcon = (code) => {
    return `https://openweathermap.org/img/wn/${code}@2x.png`;
  };

  return (
    <main className="main_weather">
      <div className="weather-card">
        <div className="weather-search">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="city name"
            spellCheck="false"
            autoFocus
            onKeyDown={handleKeyDown}
          />
        </div>
        { weatherCondition &&weatherCondition !== 404 ? (
          <div className="weather-details">
            <img
              className="weather-icon"
              src={getWeatherIcon(weatherCondition.weather[0]?.icon)}
              alt=""
            />
            <p className="weather-condition">
              {weatherCondition.weather[0]?.description}
            </p>
            <h1 className="weather-temperature">
              {Math.round(weatherCondition.main.temp)}°C
            </h1>
            <h2 className="weather-city">{weatherCondition.name}</h2>
            <div className="weather-info">
              <div className="weather-detail">
                <img
                  src="https://murphyslaw.github.io/hosted-assets/weather/humidity.png"
                  alt=""
                />
                <div className="weather-description">
                  <p className="weather-value">
                    {weatherCondition.main.humidity}%
                  </p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="weather-detail">
                <img
                  src="https://murphyslaw.github.io/hosted-assets/weather/wind.png"
                  alt=""
                />
                <div className="weather-description">
                  <p className="weather-value">
                    {weatherCondition.wind.speed} km/h
                  </p>
                  <p>Wind</p>
                </div>
              </div>
            </div>
          </div>
        ) : weatherCondition && weatherCondition == 404 ? (
          <div className="weather-details">
            <img
              className="weather-icon"
              src={CancelPng}
              alt=""
            />
            <p className="weather-condition">
             City not found
            </p>
            </div>
        ) : null}
      </div>
    </main>
  );
}

export default WeatherWidget;
