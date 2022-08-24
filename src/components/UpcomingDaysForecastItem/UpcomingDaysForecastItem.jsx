import React from 'react';
import moment from "moment"

import styles from './UpcomingDaysForecastItem.module.css';

const UpcomingDaysForecastItem = ({ day }) => (
    <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
        <img className='mb-2' width="30" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="weather icon" />
        <span className='mb-2'>{moment(day.dt_txt).format('dddd').slice(0, 3)}</span>
        <span className='font-weight-bold'>{day.main.feels_like.toFixed(0)} °</span>
    </li>
);

export default UpcomingDaysForecastItem;
