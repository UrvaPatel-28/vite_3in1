import React from 'react'
import './WeatherApp.css'
import { useState } from 'react'
import { useEffect } from 'react'

const WeatherApp = () => {
    const [input, setinput] = useState("Ahmedabad")
    const [details, setDetails] = useState(null)


    const fetchApi = async () => {
        const API = `http://api.weatherapi.com/v1/current.json?key=f76f09e4e3f742cc953172134232203&q=${input}`

        const res = await fetch(API)
        let data = await res.json();
        setDetails(data)

    }
    useEffect(() => {
        fetchApi();
    }, [input])

    return (
        <>
            <div className=" weather-app-container">
                <div className="search-bar">
                    <input type="search"
                        placeholder='Enter City Name'
                        autoComplete='off'
                        onChange={(e) => { setinput(e.target.value.trim()) }}
                    />

                </div>
                {!details || details.error ? (
                    <div className="no_data">

                        <p className='no_data'>No Data Found</p>
                        <span>(Enter Correct City Name)</span>
                    </div>
                ) : (
                    <div className="data-container">
                        <h2 className='city-name'>{details.location.name}, {details.location.country}</h2>
                        <div className="condition">

                            <figure>
                                <img src={details.current.condition.icon} alt="" />

                            </figure>
                            <p>{details.current.condition.text}</p>


                        </div>
                        <div className="details">
                            <div className="info">
                                <span>Temprature </span>
                                <span>{details.current.temp_c}℃ , {details.current.temp_f}℉</span>
                            </div>
                            <div className="info">
                                <span>Humidity</span>
                                <span>{details.current.humidity}</span>
                            </div>
                            <div className="info">
                                <span>Visibility</span>
                                <span>{details.current.vis_km}Km , {details.current.vis_miles}Miles</span>
                            </div>

                            <div className="info">
                                <span>Wind Speed</span>
                                <span>{details.current.wind_kph}Km/h</span>
                            </div>
                            <div className="info">
                                <span>Wind Gust</span>
                                <span>{details.current.gust_kph}Km/h</span>
                            </div>
                            <div className="info">
                                <span>Last Updated</span>
                                <span>{details.current.last_updated}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default WeatherApp
