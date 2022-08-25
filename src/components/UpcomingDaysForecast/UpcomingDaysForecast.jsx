import React from 'react';
import { useSelector } from 'react-redux';

import styles from './UpcomingDaysForecast.module.css';
import getUpcomingDaysForecast from "./../../helpers/getUpcomingDaysForecast";
import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem';

const UpcomingDaysForecast = () => {

    const forecast = useSelector(state => state.forecast)
    const { maxTempForEachDay, fiveDays } = getUpcomingDaysForecast(forecast)
    // console.log(maxTempForEachDay)
    return (
        <ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
            {
                fiveDays.map((day, index) => <UpcomingDaysForecastItem key={index} day={day} maxTempForEachDay={maxTempForEachDay[index]} />)
            }
        </ul>
    );
}

export default UpcomingDaysForecast;
