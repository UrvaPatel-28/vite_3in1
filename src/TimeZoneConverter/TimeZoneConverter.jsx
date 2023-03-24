import React from 'react'
import { useState } from 'react';
import './TimeZoneConverter.css'
import timeZoneData from './timzone.json'

const TimeZoneConverter = () => {
    const [defDate, setDefdate] = useState()
    const [timeZone, settimeZone] = useState("Etc/GMT-12");


    let date = new Date(defDate);
    let indTime = date.toLocaleString();

    let newDate = date.toLocaleString('en-US', { timeZone: timeZone })

    return (
        <div className='timezone-container'>
            <div className="input-date">
                <h2>Select Date</h2>
                <input
                    type="datetime-local"
                    placeholder='Select Date'
                    className='input-date'
                    onChange={(e) => { setDefdate(e.target.value) }}
                />
            </div>
            {defDate ?
                <div className="india-time">
                    <h2>Indian Time</h2>
                    <p>{indTime}</p>
                </div> : null}

            <h2 className='to'>To</h2>

            <div className='new-time'>
                <select name='timezone' onChange={(e) => { settimeZone(e.target.value) }}>
                    <option value="">{!defDate ? "--Selet TimeZone--" : "Etc-GMT-12"}</option>:

                    {timeZoneData.map((curEle, index) => {
                        return (
                            <option key={index} value={curEle.name}>{curEle.name}</option>
                        )
                    })}
                </select>
                {defDate ?
                    <h1>{newDate}</h1>
                    : null}
            </div>
        </div>
    )
}

export default TimeZoneConverter
