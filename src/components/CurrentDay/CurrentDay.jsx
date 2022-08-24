import React from 'react';

import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';
import moment from 'moment';

import { useSelector } from 'react-redux';
import getCurrentDayForecast from '../../helpers/getCurrentDayForecast';


const CurrentDay = () => {
    const forecast = useSelector(state => state.forecast)
    const { weekday, date, location, temperature, weatherIcon, weatherDescription } = getCurrentDayForecast(forecast)
    return (
        <div className="d-flex">
            <div className={styles.img}></div>
            <div className={styles.gradient}></div>
            <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
                <div>
                    <h2 className="font-weight-bold mb-1">{weekday}</h2>
                    <p className='mb-8'>{date}</p>
                    <p className='d-flex align-items-baseline font-weight-lighter mb-1'>
                        <img width="10" height="15" src={locationIcon} alt="location" className='mr-1' />
                        <span>{location}</span>
                    </p>
                </div>
                <div>
                    {/* {console.log(weatherIcon)} */}
                    <img src={weatherIcon} alt="weather icon" />
                    <h2 className='font-weight-bold mb-1'>
                        <span>{temperature}</span>°C
                    </h2>
                    <h5 className='font-weight-lighter'>{weatherDescription}</h5>
                </div>
            </div>
        </div>)
};

export default CurrentDay;
