import React from 'react';
import { useSelector } from 'react-redux';

import styles from './UpcomingDaysForecast.module.css';
// import stylsForDay from "./../CurrentDayDescriptionItem/CurrentDayDescriptionItem.module.css"
import getUpcomingDaysForecast from "./../../helpers/getUpcomingDaysForecast";
import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem';

const UpcomingDaysForecast = () => {
    const forecast = useSelector(state => state.forecast)
    const diveDaysForecast = getUpcomingDaysForecast(forecast)
    return (
        <ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
            {
                diveDaysForecast.map((day, index) => <UpcomingDaysForecastItem key={index} day={day} />
                    // return {
                    //     weatherIcon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
                    //     temp: day.main.feels_like.toFixed(1),
                    //     weekday: moment(day.dt_txt).format('dddd').slice(0, 3),
                    // };
                )

            }
        </ul>
    );
}

export default UpcomingDaysForecast;
